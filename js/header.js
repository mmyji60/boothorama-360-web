// js/header.js (patch 2025-11-04)
// - Cache robuste (ignore les valeurs vides)
// - Logs légers pour diagnostic
// - Support des partials encapsulés dans <template>…</template>
// - Option pour désactiver l'URL absolue si le site est servi sous un sous-dossier
// - Amélioration du rétablissement de la visibilité si un guard l'a cachée

async function loadHeader(options = {}) {
  const {
    mountSelector = '#site-header',
    partialRelPath = 'partials/header.html',
    // Désactivé par défaut pour éviter les surprises sous sous-dossier
    partialAbsPath = null, // ex: '/partials/header.html' si vous servez en racine de domaine
    cacheKey = 'boothr_header_html_v1'
  } = options;

  console.log('[header] boot', { href: location.href, partialRelPath, partialAbsPath, cacheKey });

  const mount = document.querySelector(mountSelector);
  if (!mount) {
    console.warn('[header] mount introuvable:', mountSelector);
    return;
  }

  const isFileProtocol = location.protocol === 'file:';

  async function fetchFirst(urls) {
    const list = urls.filter(Boolean);
    console.log('[header] try urls', list);
    for (const u of list) {
      try {
        const res = await fetch(u, { credentials: 'same-origin' });
        if (!res.ok) { console.warn('[header] fetch non-OK', u, res.status); continue; }
        const txt = await res.text();
        if (!String(txt).trim()) { console.warn('[header] réponse vide', u); continue; }
        console.log('[header] OK via', u);
        return txt;
      } catch (e) {
        console.warn('[header] fetch erreur', u, e);
      }
    }
    throw new Error('Aucune des URLs ne répond: ' + list.join(', '));
  }

  function mountHtml(html) {
    try {
      const txt = String(html || '').trim();
      if (!txt) { mount.innerHTML = ''; return; }

      // Si le partial commence par <template>, on insère son contenu
      if (/^<\s*template[\s>]/i.test(txt)) {
        const div = document.createElement('div');
        div.innerHTML = txt;
        const tpl = div.querySelector('template');
        mount.innerHTML = '';
        if (tpl && 'content' in tpl) {
          mount.appendChild(tpl.content.cloneNode(true));
        } else {
          mount.insertAdjacentHTML('afterbegin', tpl ? tpl.innerHTML : txt);
        }
        return;
      }

      // Sinon, injection directe
      mount.innerHTML = txt;
    } catch (e) {
      console.warn('[header] mountHtml error', e);
      mount.innerHTML = html;
    }
  }

  function mountFromTemplate() {
    const tpl = document.getElementById('header-fallback');
    if (tpl && 'content' in tpl) {
      mount.innerHTML = '';
      mount.appendChild(tpl.content.cloneNode(true));
      return true;
    }
    return false;
  }

  // --- Icônes drapeaux (inline SVG) ---
  const FLAGS = {
    en: `
      <svg viewBox="0 0 24 16" width="24" height="16" aria-hidden="true">
        <rect width="24" height="16" fill="#012169"/>
        <path d="M0,0 L24,16 M24,0 L0,16" stroke="#FFF" stroke-width="3"/>
        <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" stroke-width="1.5"/>
        <path d="M12,0 v16 M0,8 h24" stroke="#FFF" stroke-width="5"/>
        <path d="M12,0 v16 M0,8 h24" stroke="#C8102E" stroke-width="3"/>
      </svg>`,
    fr: `
      <svg viewBox="0 0 24 16" width="24" height="16" aria-hidden="true">
        <rect width="24" height="16" fill="#ED2939"/>
        <rect width="16" height="16" fill="#FFF"/>
        <rect width="8" height="16" fill="#002395"/>
      </svg>`,
    es: `
      <svg viewBox="0 0 24 16" width="24" height="16" aria-hidden="true">
        <rect width="24" height="16" fill="#AA151B"/>
        <rect y="4" width="24" height="8" fill="#F1BF00"/>
      </svg>`
  };

  const LANG_NAMES = { en: 'English', fr: 'Français', es: 'Español' };

  function getCurrentLang() {
    if (window.BOOTHR_I18N_HEADER && window.BOOTHR_I18N_HEADER.lang) return window.BOOTHR_I18N_HEADER.lang;
    if (window.BOOTHR_I18N && window.BOOTHR_I18N.lang) return window.BOOTHR_I18N.lang;
    const htmlLang = (document.documentElement.getAttribute('lang') || '').slice(0,2).toLowerCase();
    return ['en','fr','es'].includes(htmlLang) ? htmlLang : 'en';
  }

  function wireHeaderBehavior() {
    const btn = mount.querySelector('.nav-toggle');
    const nav = mount.querySelector('#primary-nav');

    const toggle = (open) => {
      if (!btn || !nav) return;
      btn.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      document.documentElement.classList.toggle('no-scroll', open);
      document.body.classList.toggle('no-scroll', open);
    };

    if (btn && nav) {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';
        toggle(!isOpen);
      });
      const mql = window.matchMedia('(min-width: 768px)');
      mql.addEventListener('change', (e) => { if (e.matches) toggle(false); });
    }

    // Lien actif
    const links = mount.querySelectorAll('nav a[href]');
    const current = (location.pathname.split('/').pop() || 'index.html').split('#')[0].split('?')[0];
    links.forEach(a => {
      const href = a.getAttribute('href') || '';
      const file = href.split('/').pop().split('#')[0].split('?')[0];
      if (file === current) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });

    // --- Propager ?lang=xx dans les liens internes du header ---
    (function propagateLangInLinks() {
      const cur = (document.documentElement.getAttribute('lang') || 'en').slice(0,2).toLowerCase();
      try {
        const url = new URL(location.href);
        const qLang = url.searchParams.get('lang');
        const langToUse = qLang || cur;
        if (!langToUse) return;

        mount.querySelectorAll('a[href]').forEach(a => {
          const href = a.getAttribute('href') || '';
          // Ignorer externes / mailto / tel / ancres
          if (/^([a-z]+:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;

          const abs = new URL(href, location.href);
          abs.searchParams.set('lang', langToUse);
          a.setAttribute('href', abs.pathname + abs.search + abs.hash);
        });
      } catch (_) {}
    })();

    // --- Dropdown langue ---
    const dd = mount.querySelector('.lang-dropdown');
    const currentBtn = dd ? dd.querySelector('.lang-current') : null;
    const menu = dd ? dd.querySelector('#lang-menu') : null;

    function setMenuOpen(open) {
      if (!currentBtn || !menu) return;
      currentBtn.setAttribute('aria-expanded', String(open));
      if (open) menu.removeAttribute('hidden'); else menu.setAttribute('hidden', '');
    }

    function refreshLangUI() {
      const lang = getCurrentLang();
      const icon = currentBtn?.querySelector('.lang-current__icon');
      const name = currentBtn?.querySelector('.lang-current__name');
      if (icon) icon.innerHTML = FLAGS[lang] || '';
      if (name) name.textContent = LANG_NAMES[lang] || lang.toUpperCase();

      menu?.querySelectorAll('[data-set-lang]').forEach(btn => {
        const l = (btn.getAttribute('data-set-lang') || '').slice(0,2).toLowerCase();
        btn.setAttribute('aria-checked', String(l === lang));
        const i = btn.querySelector('.lang-icon');
        const n = btn.querySelector('.lang-name');
        if (i) i.innerHTML = FLAGS[l] || '';
        if (n) n.textContent = LANG_NAMES[l] || l.toUpperCase();
      });
    }

    currentBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = currentBtn.getAttribute('aria-expanded') === 'true';
      setMenuOpen(!isOpen);
      if (!isOpen) {
        const lang = getCurrentLang();
        menu?.querySelector(`[data-set-lang="${lang}"]`)?.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (!dd) return;
      if (!dd.contains(e.target)) setMenuOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    });

    // Changement de langue : MAJ header + page + URL + event global
    mount.addEventListener('click', (e) => {
      const el = e.target.closest?.('[data-set-lang]');
      if (!el) return;

      e.preventDefault();
      const lang = String(el.getAttribute('data-set-lang') || '').slice(0, 2).toLowerCase();
      if (!lang) return;

      try { localStorage.setItem('boothr_lang', lang); } catch (_) {}

      // 1) i18n header
      if (window.BOOTHR_I18N_HEADER && typeof window.BOOTHR_I18N_HEADER.setLang === 'function') {
        window.BOOTHR_I18N_HEADER.setLang(lang);
      }

      // 2) i18n page
      if (window.BOOTHR_I18N && typeof window.BOOTHR_I18N.setLang === 'function') {
        window.BOOTHR_I18N.setLang(lang);
      }

      // 3) <html lang> + API centrale (si dispo)
      if (window.BOOTHR_LANG && typeof window.BOOTHR_LANG.set === 'function') {
        window.BOOTHR_LANG.set(lang);
      } else {
        document.documentElement.setAttribute('lang', lang);
        try {
          document.dispatchEvent(new CustomEvent('boothr:lang-changed', { detail: { lang } }));
        } catch (_) {}
      }

      // 4) Synchroniser ?lang dans l'URL
      try {
        const url = new URL(location.href);
        url.searchParams.set('lang', lang);
        history.replaceState(null, '', url.toString());
      } catch (_) {}

      // 5) Rafraîchir UI + fermer le menu
      refreshLangUI();
      setMenuOpen(false);

      // 6) Re-propager ?lang aux liens (au cas où)
      (function repropagate() {
        try {
          const url = new URL(location.href);
          const langToUse = url.searchParams.get('lang') || lang;
          mount.querySelectorAll('a[href]').forEach(a => {
            const href = a.getAttribute('href') || '';
            if (/^([a-z]+:)?\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) return;
            const abs = new URL(href, location.href);
            abs.searchParams.set('lang', langToUse);
            a.setAttribute('href', abs.pathname + abs.search + abs.hash);
          });
        } catch (_) {}
      })();
    });

    refreshLangUI();
  }

  // 1) Récupération du HTML (cache robuste)
  try {
    let html = sessionStorage.getItem(cacheKey);
    if (!html || !html.trim()) {
      if (isFileProtocol) throw new Error('file-protocol');
      const urls = [partialRelPath, partialAbsPath].filter(Boolean);
      html = await fetchFirst(urls);
      if (html && html.trim()) sessionStorage.setItem(cacheKey, html);
    }
    mountHtml(html);
  } catch (e) {
    console.warn('[header] chargement échoué, tentative fallback', e);
    const ok = mountFromTemplate();
    if (!ok) {
      mount.innerHTML = `
        <div class="container" style="padding:10px 16px">
          <div style="background:#5b1a1a;border:1px solid #9b3b3b;color:#ffdada;padding:10px;border-radius:10px;">
            ⚠️ Impossible de charger <code>${options.partialRelPath || 'partials/header.html'}</code>.<br>
            Lance un serveur HTTP (ex: <code>python -m http.server</code>) 
            ou ajoute un template <code>#header-fallback</code> dans la page.
          </div>
        </div>`;
    }
  }

  // 2) Ré-appliquer l’i18n sur le nœud injecté puis révéler si caché
  (function reapplyI18nToHeader(root) {
    function applyNow() {
      try {
        if (window.BOOTHR_I18N_HEADER && typeof window.BOOTHR_I18N_HEADER.apply === 'function') {
          window.BOOTHR_I18N_HEADER.apply(root);
        } else if (window.BOOTHR_I18N && typeof window.BOOTHR_I18N.apply === 'function') {
          window.BOOTHR_I18N.apply(root);
        } else {
          return false;
        }
        // Rétablir visibilité si un guard l'a cachée via style inline ou CSS
        const cs = getComputedStyle(document.documentElement);
        if (document.documentElement.style.visibility === 'hidden' || cs.visibility === 'hidden') {
          requestAnimationFrame(() => { document.documentElement.style.visibility = ''; });
        }
        return true;
      } catch (_) {}
      return false;
    }

    if (!applyNow()) {
      function onHdr() { document.removeEventListener('i18n-header:ready', onHdr); applyNow(); }
      function onAny()  { document.removeEventListener('i18n:ready', onAny); applyNow(); }
      document.addEventListener('i18n-header:ready', onHdr, { once: true });
      document.addEventListener('i18n:ready', onAny, { once: true });
    }
  })(mount);

  // 3) Brancher comportements
  wireHeaderBehavior();
}

loadHeader();
window.BOOTHR_HEADER = { load: loadHeader };

