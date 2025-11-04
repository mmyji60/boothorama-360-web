(function () {
  const DICS = {
    fr: {
    title: "Mentions légales – Boothorama 360",
    meta_desc: "Mentions légales et informations éditeur de Boothorama 360.",
    nav_privacy: "Confidentialité",
    nav_terms: "Conditions d’utilisation",
    nav_legal: "Mentions légales",
    nav_faq: "FAQ",
    badge_app: "Application mobile",
    h1: "Mentions légales",
    intro: "Informations relatives à l’éditeur, à l’hébergement et aux droits.",
    s1: "1. Éditeur du site & de l’app",
    company_name_label: "Société: Mmyji",
    company_addr_label: "Adresse: 6 allée Anita Conti",
    company_addr: "31520 Ramonville St Agne, France",
    company_contact_label: "Contact: contact@boothorama360.com",
    privacy_contact_label: "DPO: contact@boothorama360.com",
    s2: "2. Directeur de la publication",
    publisher: "Le directeur de la publication est le représentant légal de Boothorama 360.",
    s3: "3. Hébergement du site",
    hosting: "Site servi par GitHub Pages – GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.",
    s3b: "4. Plateformes d’app & paiements",
    stores: "L’app est distribuée via Apple App Store. Les paiements sont traités par ces plateformes. Boothorama ne traite pas vos données de carte bancaire.",
    s4: "5. Propriété intellectuelle",
    ip: "Le contenu (textes, visuels, logo et éléments de design) est protégé par le droit d’auteur. Toute reproduction ou réutilisation nécessite une autorisation préalable.",
    s5: "6. Données personnelles",
    privacy_link: 'Le traitement des données personnelles est décrit dans la <a href="./">politique de confidentialité</a>.',
    s6: "7. Signalement de contenu",
    notice: 'Pour signaler un contenu ou une vulnérabilité, contactez <a href="mailto:contact@boothorama360.com">contact@boothorama360.com</a>.',
    updated: "Dernière mise à jour :"
  },
  en: {
    title: "Legal Notice – Boothorama 360",
    meta_desc: "Legal information and site publisher details for Boothorama 360.",
    nav_privacy: "Privacy",
    nav_terms: "Terms of Use",
    nav_legal: "Legal Notice",
    nav_faq: "FAQ",
    badge_app: "Mobile app",
    h1: "Legal Notice",
    intro: "Information about the publisher, hosting and intellectual property.",
    s1: "1. Publisher (site & app)",
    company_name_label: "Company: Mmyji",
    company_addr_label: "Address: 6 allée Anita Conti",
    company_addr: "31520 Ramonville St Agne, France",
    company_contact_label: "Contact: contact@boothorama360.com",
    privacy_contact_label: "DPO/Privacy: contact@boothorama360.com",
    s2: "2. Editorial responsibility",
    publisher: "The legal representative of Boothorama 360 acts as the editorial director.",
    s3: "3. Site hosting",
    hosting: "Hosted via GitHub Pages – GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.",
    s3b: "4. App stores & payments",
    stores: "The app is distributed via Apple App Store. Payments are processed by these platforms. Boothorama does not process your card data.",
    s4: "5. Intellectual property",
    ip: "All content is protected by copyright. Any reproduction or reuse requires prior authorization.",
    s5: "6. Personal data",
    privacy_link: 'Personal data processing is described in the <a href="./">privacy policy</a>.',
    s6: "7. Report content",
    notice: 'To report content or a vulnerability, contact <a href="mailto:contact@boothorama360.com">contact@boothorama360.com</a>.',
    updated: "Last updated:"
  },
  es: {
    title: "Aviso legal – Boothorama 360",
    meta_desc: "Información legal y detalles del editor del sitio de Boothorama 360.",
    nav_privacy: "Privacidad",
    nav_terms: "Condiciones de uso",
    nav_legal: "Aviso legal",
    nav_faq: "FAQ",
    badge_app: "Aplicación móvil",
    h1: "Aviso legal",
    intro: "Información sobre el editor, el alojamiento y la propiedad intelectual.",
    s1: "1. Editor (sitio y app)",
    company_name_label: "Empresa: Mmyji",
    company_addr_label: "Dirección: 6 Allée Anita Conti",
    company_addr: "31520 Ramonville St Agne, France",
    company_contact_label: "Contacto: contact@boothorama360.com",
    privacy_contact_label: "DPO/Privacidad: contact@boothorama360.com",
    s2: "2. Responsable editorial",
    publisher: "El representante legal de Boothorama 360 actúa como responsable editorial.",
    s3: "3. Alojamiento del sitio",
    hosting: "Sitio alojado mediante GitHub Pages – GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, EE. UU.",
    s3b: "4. Tiendas de apps y pagos",
    stores: "La app se distribuye a través de Apple App Store. Los pagos son procesados por estas plataformas. Boothorama no trata tus datos de tarjeta.",
    s4: "5. Propiedad intelectual",
    ip: "El contenido está protegido por derechos de autor. Cualquier reproducción o reutilización requiere autorización previa.",
    s5: "6. Datos personales",
    privacy_link: 'El tratamiento de datos personales se describe en la <a href="./">política de privacidad</a>.',
    s6: "7. Notificación de contenido",
    notice: 'Para informar sobre un contenido o una vulnerabilidad, contacta con <a href="mailto:contact@boothorama360.com">contact@boothorama360.com</a>.',
    updated: "Última actualización:"
  }
};

  // Lang courante : définie par js/script.js (ou fallback __BOOTHR_LANG__)
  function currentLang() {
    const htmlLang = (document.documentElement.getAttribute('lang') || '').toLowerCase().slice(0,2);
    if (DICS[htmlLang]) return htmlLang;
    const boot = (typeof window !== 'undefined' ? window.__BOOTHR_LANG__ : '') || '';
    const bootBase = String(boot).toLowerCase().slice(0,2);
    return DICS[bootBase] ? bootBase : 'en';
  }

  let LANG = currentLang();

  function apply(root = document) {
    const dict = DICS[LANG] || DICS.en;

    // data-i18n → textContent
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (key && dict[key] != null) el.textContent = dict[key];
    });

    // data-i18n-attr="placeholder:title,aria-label:menu_label"
    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const pairs = (el.dataset.i18nAttr || '').split(',').map(s => s.trim()).filter(Boolean);
      pairs.forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
      });
    });
  }

  function applyAndReveal() {
    // s'aligne sur la langue posée par script.js
    LANG = currentLang();
    apply(document);
    // optionnel: définir l'attribut lang (script.js l'a déjà fait)
    document.documentElement.setAttribute('lang', LANG);
    // révéler si la page est cachée
    if (document.documentElement.style.visibility === 'hidden') {
      requestAnimationFrame(() => { document.documentElement.style.visibility = ''; });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAndReveal);
  } else {
    applyAndReveal();
  }

  // Écoute les changements globaux (provenant du header ou d'autres modules)
  document.addEventListener('boothr:lang-changed', () => {
    applyAndReveal();
  });

  // API minimale (pas de détection/persistance ici)
  window.BOOTHR_I18N = {
    apply,
    get lang() { return LANG; },
    setLang(l) {
      // setter simple (pas de stockage, pas d'URL)
      const base = String(l || '').toLowerCase().slice(0,2);
      LANG = DICS[base] ? base : 'en';
      document.documentElement.setAttribute('lang', LANG);
      apply(document);
      // notifie pour les autres modules
      try {
        document.dispatchEvent(new CustomEvent('boothr:lang-changed', { detail: { lang: LANG } }));
      } catch (_) {}
    }
  };
})();
