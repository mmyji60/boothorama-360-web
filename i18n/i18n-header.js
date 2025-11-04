// i18n-header.js
// I18n dédié au header : nav + accessibilité + label du sélecteur de langue.
// Priorité : ?lang → localStorage → <html lang> → __BOOTHR_LANG__ → navigator.
// Expose window.BOOTHR_I18N_HEADER { apply(root), lang, setLang(l) }.
// Ne gère pas la "révélation" de la page (c'est le rôle du i18n principal).

(function () {
  const DICTS = {
    fr: {
      menu_label: "Menu",
      nav_home: "Accueil",
      nav_faq: "FAQ",
      nav_privacy: "Confidentialité",
      nav_terms: "Conditions",
      nav_legal: "Mentions légales",
      lang_current_label: "Langue actuelle"
    },
    en: {
      menu_label: "Menu",
      nav_home: "Home",
      nav_faq: "FAQ",
      nav_privacy: "Privacy",
      nav_terms: "Terms",
      nav_legal: "Legal",
      lang_current_label: "Current language"
    },
    es: {
      menu_label: "Menú",
      nav_home: "Inicio",
      nav_faq: "FAQ",
      nav_privacy: "Privacidad",
      nav_terms: "Condiciones",
      nav_legal: "Aviso legal",
      lang_current_label: "Idioma actual"
    }
  };

  function readUrlLang() {
    try {
      const url = new URL(location.href);
      const l = (url.searchParams.get('lang') || '').toLowerCase().slice(0,2);
      return DICTS[l] ? l : null;
    } catch (_) { return null; }
  }

  function detectLang() {
    const fromUrl = readUrlLang();
    if (fromUrl) return fromUrl;

    try {
      const mem = (localStorage.getItem('boothr_lang') || '').slice(0, 2).toLowerCase();
      if (DICTS[mem]) return mem;
    } catch (_) {}

    const htmlLang = (document.documentElement.getAttribute('lang') || '').slice(0, 2).toLowerCase();
    if (DICTS[htmlLang]) return htmlLang;

    if (typeof window !== 'undefined' && window.__BOOTHR_LANG__) {
      const w = String(window.__BOOTHR_LANG__).toLowerCase().slice(0, 2);
      if (DICTS[w]) return w;
    }

    const list =
      (navigator.languages && navigator.languages.length)
        ? navigator.languages
        : [navigator.language || 'en'];
    for (let i = 0; i < list.length; i++) {
      const base = String(list[i] || '').toLowerCase().slice(0, 2);
      if (DICTS[base]) return base;
    }
    return 'en';
  }

  let LANG = detectLang();

  function apply(root = document) {
    const dict = DICTS[LANG] || DICTS.en;

    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (key && dict[key] != null) el.textContent = dict[key];
    });

    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const pairs = (el.dataset.i18nAttr || '').split(',').map(s => s.trim()).filter(Boolean);
      pairs.forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
      });
    });
  }

  window.BOOTHR_I18N_HEADER = {
    apply,
    get lang() { return LANG; },
    setLang(l) {
      const base = String(l || '').toLowerCase().slice(0, 2);
      LANG = DICTS[base] ? base : 'en';
      try { localStorage.setItem('boothr_lang', LANG); } catch (_) {}
      document.documentElement.setAttribute('lang', LANG);
      apply(document);
    }
  };
})();

// Signal prêt (utile si on veut écouter cet événement)
document.dispatchEvent(new Event('i18n-header:ready'));

