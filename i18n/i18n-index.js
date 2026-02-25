// i18n-index.js
// ✅ Uniquement les traductions + application des clés sur la page.
// ❗️La détection/persistance de langue est faite dans js/script.js.
//    Ici on lit simplement document.documentElement.lang (ou __BOOTHR_LANG__ en secours).

(function () {
  const DICTS = {
    fr: {
      // Header / Nav (redondant mais inoffensif si aussi gérés dans i18n-header.js)
      menu_label: "Menu",
      lang_current_label: "Langue actuelle",

      // Hero
      badge_rgpd: "Conforme RGPD",
      hero_h1: "Le photobooth 360° simple, rapide, spectaculaire",
      hero_sub:
        "Créez des vidéos 360° qui claquent en quelques secondes. Partage instantané par QR code, export vers Google Drive, overlays illimités et bande-son MP3 personnalisée.",
      cta_features: "Voir les fonctionnalités",
      cta_demo: "Voir la démo",

      // KPIs
      kpi_title: "Résultats",
      kpi_render: "pour un rendu standard",
      kpi_overlay: "overlays & presets",

      // Features
      feat_title: "Fonctionnalités clés",
      feat_qr_h: "Partage par QR code",
      feat_qr_p:
        "Scannez, téléchargez, c’est parti. Chaque rendu obtient un lien unique partageable instantanément sur mobile.",
      feat_drive_h: "Export Google Drive",
      feat_drive_p:
        "Envoyez automatiquement vos vidéos vers votre Drive pour un archivage sûr et un partage maîtrisé.",
      feat_overlay_h: "Overlays illimités",
      feat_overlay_p:
        "Ajoutez logos, images et textes en un clic. Enregistrez vos presets pour les réutiliser.",
      feat_mp3_h: "Import MP3",
      feat_mp3_p:
        "Synchronisez vos rendus avec votre musique. Importez vos MP3, réglez le volume et les fondus.",
      feat_more_h: "Et aussi",
      feat_more_1: "Montage auto (ralentis, boomerang, LUT)",
      feat_more_2: "Mode hors-ligne pendant l’événement",

      // Demo
      demo_title: "Démo express",
      demo_1: "Capture 3–5 s en 360° avec votre setup rotatif.",
      demo_2: "Personnalisez overlay + musique MP3.",
      demo_3: "Rendez en 10–20 s selon le device.",
      demo_4: "Partagez via QR code ou Google Drive.",
      demo_fallback:
        "Votre navigateur ne peut pas lire la vidéo. Téléchargez la démo ici.",

        "support_title": "Support",
  "support_intro": "Une question, un problème technique ou une suggestion ?",
  "support_contact_label": "Contactez notre équipe support :",
  "support_eta": "Nous répondons généralement sous 24 à 48 heures ouvrées.",
  "nav_support": "Support",

      // CTA / Download
      cta_try: "Essayer Boothorama 360",
      cta_faq: "Lire la FAQ",

      dl_title: "Téléchargement & tarifs",
      dl_sub: "Disponible sur iOS.",
      badge_appstore: "App Store (bientôt)",

      price_pro_h: "Pro",
      price_pro_p: "toutes fonctionnalités, support prioritaire"
    },

    en: {
      // Header / Nav
      menu_label: "Menu",
      nav_home: "Home",
      nav_faq: "FAQ",
      nav_privacy: "Privacy",
      nav_terms: "Terms",
      nav_legal: "Legal",
      lang_current_label: "Current language",

      // Hero
      badge_rgpd: "GDPR compliant",
      hero_h1: "The simple, fast, spectacular 360° photobooth",
      hero_sub:
        "Create stunning 360° videos in seconds. Instant QR code sharing, Google Drive export, unlimited overlays, and custom MP3 soundtrack.",
      cta_features: "See features",
      cta_demo: "Watch demo",

      // KPIs
      kpi_title: "Results",
      kpi_render: "for a standard render",
      kpi_overlay: "overlays & presets",

      // Features
      feat_title: "Key features",
      feat_qr_h: "QR code sharing",
      feat_qr_p:
        "Scan, download, done. Each render gets a unique link instantly shareable on mobile.",
      feat_drive_h: "Google Drive export",
      feat_drive_p:
        "Automatically send your videos to Drive for safe archiving and controlled sharing.",
      feat_overlay_h: "Unlimited overlays",
      feat_overlay_p:
        "Add logos, images and texts in one click. Save presets to reuse them.",
      feat_mp3_h: "MP3 import",
      feat_mp3_p:
        "Sync your renders with your music. Import MP3s, set volume and fades.",
      feat_more_h: "Also",
      feat_more_1: "Auto-edit (slow-mo, boomerang, LUT)",
      feat_more_2: "Offline mode during events",

        "support_title": "Support",
  "support_intro": "A question, a technical issue, or a suggestion?",
  "support_contact_label": "Contact our support team:",
  "support_eta": "We usually reply within 24–48 business hours.",
  "nav_support": "Support",

      // Demo
      demo_title: "Quick demo",
      demo_1: "Capture 3–5 s in 360° with your rotating rig.",
      demo_2: "Customize overlay + MP3 music.",
      demo_3: "Render in 10–20 s depending on device.",
      demo_4: "Share via QR code or Google Drive.",
      demo_fallback:
        "Your browser can’t play the video. Download the demo here.",

      // CTA / Download
      cta_try: "Try Boothorama 360",
      cta_faq: "Read the FAQ",

      dl_title: "Download",
      dl_sub: "Available on iOS.",
      badge_appstore: "App Store (soon)",

      price_pro_h: "Pro",
      price_pro_p: "all features, priority support"
    },

    es: {
      // Header / Nav
      menu_label: "Menú",
      nav_home: "Inicio",
      nav_faq: "FAQ",
      nav_privacy: "Privacidad",
      nav_terms: "Condiciones",
      nav_legal: "Aviso legal",
      lang_current_label: "Idioma actual",

      // Hero
      badge_rgpd: "Cumple RGPD",
      hero_h1: "El fotomatón 360° simple, rápido y espectacular",
      hero_sub:
        "Crea vídeos 360° en segundos. Compartir por código QR, exportación a Google Drive, overlays ilimitados y banda sonora MP3 personalizada.",
      cta_features: "Ver funciones",
      cta_demo: "Ver demo",

      // KPIs
      kpi_title: "Resultados",
      kpi_render: "para un render estándar",
      kpi_overlay: "overlays y presets",

      // Features
      feat_title: "Funciones clave",
      feat_qr_h: "Compartir por QR",
      feat_qr_p:
        "Escanear, descargar y listo. Cada vídeo obtiene un enlace único compartible al instante en móvil.",
      feat_drive_h: "Exportar a Google Drive",
      feat_drive_p:
        "Envía automáticamente tus vídeos a Drive para archivado seguro y uso compartido controlado.",
      feat_overlay_h: "Overlays ilimitados",
      feat_overlay_p:
        "Añade logotipos, marcos con textos un clic. Guarda presets para reutilizarlos.",
      feat_mp3_h: "Importar MP3",
      feat_mp3_p:
        "Sincroniza tus vídeos con tu música. Importa MP3, ajusta volumen y fundidos.",
      feat_more_h: "Además",
      feat_more_1: "Edición automática (cámara lenta, boomerang, LUT)",
      feat_more_2: "Modo sin conexión durante el evento",

        "support_title": "Soporte",
  "support_intro": "¿Una pregunta, un problema técnico o una sugerencia?",
  "support_contact_label": "Contacta con nuestro equipo de soporte:",
  "support_eta": "Normalmente respondemos en 24–48 horas laborables.",
  "nav_support": "Soporte",

      // Demo
      demo_title: "Demo rápida",
      demo_1: "Captura 3–5 s en 360° con tu equipo giratorio.",
      demo_2: "Personaliza overlay + música MP3.",
      demo_3: "Renderiza en 10–20 s según el dispositivo.",
      demo_4: "Comparte por QR o Google Drive.",
      demo_fallback:
        "Tu navegador no puede reproducir el vídeo. Descarga la demo aquí.",

      // CTA / Download
      cta_try: "Probar Boothorama 360",
      cta_faq: "Leer la FAQ",

      dl_title: "Descarga",
      dl_sub: "Disponible en iOS.",
      badge_appstore: "App Store (pronto)",

      price_pro_h: "Pro",
      price_pro_p: "todas las funciones, soporte prioritario"
    }
  };

  // Lang courante : définie par js/script.js (ou fallback __BOOTHR_LANG__)
  function currentLang() {
    const htmlLang = (document.documentElement.getAttribute('lang') || '').toLowerCase().slice(0,2);
    if (DICTS[htmlLang]) return htmlLang;
    const boot = (typeof window !== 'undefined' ? window.__BOOTHR_LANG__ : '') || '';
    const bootBase = String(boot).toLowerCase().slice(0,2);
    return DICTS[bootBase] ? bootBase : 'en';
  }

  let LANG = currentLang();

  function apply(root = document) {
    const dict = DICTS[LANG] || DICTS.en;

    // data-i18n → textContent
    root.querySelectorAll('[data-i18n]').forEach(el => {
  const key = el.dataset.i18n;
  if (key && dict[key] != null) {
    el.innerHTML = dict[key];
  }
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
      LANG = DICTS[base] ? base : 'en';
      document.documentElement.setAttribute('lang', LANG);
      apply(document);
      // notifie pour les autres modules
      try {
        document.dispatchEvent(new CustomEvent('boothr:lang-changed', { detail: { lang: LANG } }));
      } catch (_) {}
    }
  };
})();

