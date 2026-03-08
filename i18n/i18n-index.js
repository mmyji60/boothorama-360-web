// i18n-index.js
// ✅ Uniquement les traductions + application des clés sur la page.
// ❗️La détection/persistance de langue est faite dans js/script.js.
//    Ici on lit simplement document.documentElement.lang (ou __BOOTHR_LANG__ en secours).

(function () {
  const DICTS = {
    fr: {
      // Header / Nav
      menu_label: "Menu",
      lang_current_label: "Langue actuelle",
      nav_home: "Accueil",
      nav_faq: "FAQ",
      nav_privacy: "Confidentialité",
      nav_terms: "Conditions",
      nav_legal: "Mentions légales",
      nav_support: "Support",

      // Hero
      badge_rgpd: "Conforme RGPD",
      hero_badge: "Écosystème iOS pour événements 360",
      hero_h1: "Le photobooth 360° simple, rapide, spectaculaire",
      hero_sub:
        "Créez des vidéos 360° premium en quelques secondes. Capture, overlays, musique, QR code, export Google Drive… et pilotez maintenant votre booth à distance avec l’application gratuite Boothorama 360 Controller.",
      cta_features: "Voir les fonctionnalités",
      cta_demo: "Voir la démo",
      cta_controller: "Découvrir Controller",
      cta_download: "Télécharger",

      hero_highlight_1: "QR code instantané",
      hero_highlight_2: "Export Google Drive",
      hero_highlight_3: "Overlays illimités",
      hero_highlight_4: "Controller gratuit",

      // KPIs
      kpi_title: "Résultats",
      kpi_render: "pour un rendu standard",
      kpi_overlay: "overlays & presets",
      kpi_workflow: "un workflow complet",
      kpi_controller: "Controller iOS",

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
        "Ajoutez logos, cadres, textes et effets en un clic. Enregistrez vos presets pour les réutiliser.",
      feat_mp3_h: "Import MP3",
      feat_mp3_p:
        "Synchronisez vos rendus avec votre musique. Importez vos MP3, réglez le volume et les fondus.",
      feat_capture_h: "Capture premium",
      feat_capture_p:
        "Une expérience pensée pour l’événementiel : rapide à lancer, visuelle, simple à prendre en main et efficace en prestation.",
      feat_ecosystem_h: "Écosystème 2 apps",
      feat_ecosystem_p:
        "Utilisez Boothorama360 pour capturer et Boothorama 360 Controller pour piloter à distance depuis un second appareil iOS.",
      feat_more_h: "Et aussi",
      feat_more_1: "Montage auto (ralentis, boomerang, LUT)",
      feat_more_2: "Mode hors-ligne pendant l’événement",

      // Controller / Ecosystem
      controller_eyebrow: "Nouveau",
      controller_title: "Deux apps, un workflow ultra fluide",
      controller_lead:
        "Boothorama360 capture vos vidéos. <strong>Boothorama 360 Controller</strong> vous permet de piloter votre installation à distance depuis un second appareil iPhone ou iPad.",

      controller_main_title: "Boothorama360",
      controller_main_p:
        "L’application principale pour capturer, monter et livrer des vidéos 360° professionnelles avec overlays, QR code, export Drive et bande-son personnalisée.",
      controller_main_1: "Capture et rendu 360°",
      controller_main_2: "Overlays illimités",
      controller_main_3: "Partage QR code",
      controller_main_4: "Export Google Drive",

      controller_app_title: "Boothorama 360 Controller",
      controller_app_p:
        "La télécommande événementielle pensée pour les pros. Lancez vos captures à distance, synchronisez les vidéos automatiquement et partagez-les sans toucher à l’appareil principal.",
      controller_app_1: "Démarrage / arrêt à distance",
      controller_app_2: "Synchronisation automatique des vidéos",
      controller_app_3: "Prévisualisation sur l’appareil contrôleur",
      controller_app_4: "Partage instantané depuis le second appareil",

      controller_note:
        "Idéal pour les mariages, soirées, activations de marque et installations 360° où chaque seconde compte.",

      // Download
      dl_title: "Téléchargement",
      dl_sub:
        "Un écosystème iOS complet pour capturer, contrôler et livrer vos vidéos 360° plus vite.",

      dl_main_eyebrow: "Application principale",
      dl_main_title: "Boothorama360",
      dl_main_p:
        "Capture 360°, overlays illimités, QR code, export Google Drive, musique MP3 et post-processing avancé.",
      dl_main_cta: "Télécharger sur l’App Store",

      dl_controller_eyebrow: "Companion app gratuite",
      dl_controller_title: "Boothorama 360 Controller",
      dl_controller_p:
        "Contrôlez votre booth à distance depuis un second appareil iOS. Une solution simple, rapide et pro pour fluidifier vos prestations.",
      dl_controller_cta: "Télécharger sur l’App Store",

      // Support
      support_title: "Support",
      support_intro: "Une question, un problème technique ou une suggestion ?",
      support_contact_label: "Contactez notre équipe support :",
      support_eta: "Nous répondons généralement sous 24 à 48 heures ouvrées."
    },

    en: {
      // Header / Nav
      menu_label: "Menu",
      lang_current_label: "Current language",
      nav_home: "Home",
      nav_faq: "FAQ",
      nav_privacy: "Privacy",
      nav_terms: "Terms",
      nav_legal: "Legal",
      nav_support: "Support",

      // Hero
      badge_rgpd: "GDPR compliant",
      hero_badge: "iOS ecosystem for 360 events",
      hero_h1: "The simple, fast, spectacular 360° photobooth",
      hero_sub:
        "Create premium 360° videos in seconds. Capture, overlays, music, QR codes, Google Drive export… and now control your booth remotely with the free Boothorama 360 Controller app.",
      cta_features: "See features",
      cta_demo: "Watch demo",
      cta_controller: "Discover Controller",
      cta_download: "Download",

      hero_highlight_1: "Instant QR code",
      hero_highlight_2: "Google Drive export",
      hero_highlight_3: "Unlimited overlays",
      hero_highlight_4: "Free Controller app",

      // KPIs
      kpi_title: "Results",
      kpi_render: "for a standard render",
      kpi_overlay: "overlays & presets",
      kpi_workflow: "one complete workflow",
      kpi_controller: "iOS Controller",

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
        "Add logos, frames, text and effects in one click. Save presets to reuse them.",
      feat_mp3_h: "MP3 import",
      feat_mp3_p:
        "Sync your renders with your music. Import MP3s, set volume and fades.",
      feat_capture_h: "Premium capture",
      feat_capture_p:
        "An event-focused experience: fast to launch, highly visual, easy to use and efficient in real-world events.",
      feat_ecosystem_h: "2-app ecosystem",
      feat_ecosystem_p:
        "Use Boothorama360 for capture and Boothorama 360 Controller for remote control from a second iOS device.",
      feat_more_h: "Also",
      feat_more_1: "Auto-edit (slow motion, boomerang, LUT)",
      feat_more_2: "Offline mode during events",

      // Controller / Ecosystem
      controller_eyebrow: "New",
      controller_title: "Two apps, one seamless workflow",
      controller_lead:
        "Boothorama360 captures your videos. <strong>Boothorama 360 Controller</strong> lets you control your setup remotely from a second iPhone or iPad.",

      controller_main_title: "Boothorama360",
      controller_main_p:
        "The main app to capture, edit and deliver professional 360° videos with overlays, QR code sharing, Drive export and custom soundtrack.",
      controller_main_1: "360° capture and rendering",
      controller_main_2: "Unlimited overlays",
      controller_main_3: "QR code sharing",
      controller_main_4: "Google Drive export",

      controller_app_title: "Boothorama 360 Controller",
      controller_app_p:
        "The event remote designed for pros. Start captures remotely, sync videos automatically and share them without touching the main device.",
      controller_app_1: "Remote start / stop",
      controller_app_2: "Automatic video synchronization",
      controller_app_3: "Preview on the controller device",
      controller_app_4: "Instant sharing from the second device",

      controller_note:
        "Ideal for weddings, parties, brand activations and 360° installations where every second matters.",

      // Download
      dl_title: "Download",
      dl_sub:
        "A complete iOS ecosystem to capture, control and deliver your 360° videos faster.",

      dl_main_eyebrow: "Main app",
      dl_main_title: "Boothorama360",
      dl_main_p:
        "360° capture, unlimited overlays, QR codes, Google Drive export, MP3 music and advanced post-processing.",
      dl_main_cta: "Download on the App Store",

      dl_controller_eyebrow: "Free companion app",
      dl_controller_title: "Boothorama 360 Controller",
      dl_controller_p:
        "Control your booth remotely from a second iOS device. A simple, fast and professional solution to streamline your events.",
      dl_controller_cta: "Download on the App Store",

      // Support
      support_title: "Support",
      support_intro: "A question, a technical issue, or a suggestion?",
      support_contact_label: "Contact our support team:",
      support_eta: "We usually reply within 24–48 business hours."
    },

    es: {
      // Header / Nav
      menu_label: "Menú",
      lang_current_label: "Idioma actual",
      nav_home: "Inicio",
      nav_faq: "FAQ",
      nav_privacy: "Privacidad",
      nav_terms: "Condiciones",
      nav_legal: "Aviso legal",
      nav_support: "Soporte",

      // Hero
      badge_rgpd: "Cumple RGPD",
      hero_badge: "Ecosistema iOS para eventos 360",
      hero_h1: "El fotomatón 360° simple, rápido y espectacular",
      hero_sub:
        "Crea vídeos 360° premium en segundos. Captura, overlays, música, código QR, exportación a Google Drive… y ahora controla tu booth a distancia con la aplicación gratuita Boothorama 360 Controller.",
      cta_features: "Ver funciones",
      cta_demo: "Ver demo",
      cta_controller: "Descubrir Controller",
      cta_download: "Descargar",

      hero_highlight_1: "Código QR instantáneo",
      hero_highlight_2: "Exportación a Google Drive",
      hero_highlight_3: "Overlays ilimitados",
      hero_highlight_4: "Controller gratuito",

      // KPIs
      kpi_title: "Resultados",
      kpi_render: "para un render estándar",
      kpi_overlay: "overlays y presets",
      kpi_workflow: "un flujo completo",
      kpi_controller: "Controller iOS",

      // Features
      feat_title: "Funciones clave",
      feat_qr_h: "Compartir por QR",
      feat_qr_p:
        "Escanear, descargar y listo. Cada render obtiene un enlace único compartible al instante en móvil.",
      feat_drive_h: "Exportar a Google Drive",
      feat_drive_p:
        "Envía automáticamente tus vídeos a Drive para archivado seguro y uso compartido controlado.",
      feat_overlay_h: "Overlays ilimitados",
      feat_overlay_p:
        "Añade logotipos, marcos, textos y efectos con un clic. Guarda presets para reutilizarlos.",
      feat_mp3_h: "Importar MP3",
      feat_mp3_p:
        "Sincroniza tus renders con tu música. Importa MP3, ajusta volumen y fundidos.",
      feat_capture_h: "Captura premium",
      feat_capture_p:
        "Una experiencia pensada para eventos: rápida de lanzar, visual, fácil de usar y eficaz en servicio.",
      feat_ecosystem_h: "Ecosistema de 2 apps",
      feat_ecosystem_p:
        "Usa Boothorama360 para capturar y Boothorama 360 Controller para controlar a distancia desde un segundo dispositivo iOS.",
      feat_more_h: "Además",
      feat_more_1: "Edición automática (cámara lenta, boomerang, LUT)",
      feat_more_2: "Modo sin conexión durante el evento",

      // Controller / Ecosystem
      controller_eyebrow: "Nuevo",
      controller_title: "Dos apps, un flujo ultra fluido",
      controller_lead:
        "Boothorama360 captura tus vídeos. <strong>Boothorama 360 Controller</strong> te permite controlar tu instalación a distancia desde un segundo iPhone o iPad.",

      controller_main_title: "Boothorama360",
      controller_main_p:
        "La aplicación principal para capturar, editar y entregar vídeos 360° profesionales con overlays, código QR, exportación a Drive y banda sonora personalizada.",
      controller_main_1: "Captura y render 360°",
      controller_main_2: "Overlays ilimitados",
      controller_main_3: "Compartir por QR",
      controller_main_4: "Exportación a Google Drive",

      controller_app_title: "Boothorama 360 Controller",
      controller_app_p:
        "El mando remoto para eventos pensado para profesionales. Inicia capturas a distancia, sincroniza los vídeos automáticamente y compártelos sin tocar el dispositivo principal.",
      controller_app_1: "Inicio / parada a distancia",
      controller_app_2: "Sincronización automática de vídeos",
      controller_app_3: "Vista previa en el dispositivo controlador",
      controller_app_4: "Compartir al instante desde el segundo dispositivo",

      controller_note:
        "Ideal para bodas, fiestas, activaciones de marca e instalaciones 360° donde cada segundo cuenta.",

      // Download
      dl_title: "Descarga",
      dl_sub:
        "Un ecosistema iOS completo para capturar, controlar y entregar tus vídeos 360° más rápido.",

      dl_main_eyebrow: "Aplicación principal",
      dl_main_title: "Boothorama360",
      dl_main_p:
        "Captura 360°, overlays ilimitados, código QR, exportación a Google Drive, música MP3 y postprocesado avanzado.",
      dl_main_cta: "Descargar en App Store",

      dl_controller_eyebrow: "App complementaria gratuita",
      dl_controller_title: "Boothorama 360 Controller",
      dl_controller_p:
        "Controla tu booth a distancia desde un segundo dispositivo iOS. Una solución simple, rápida y profesional para agilizar tus eventos.",
      dl_controller_cta: "Descargar en App Store",

      // Support
      support_title: "Soporte",
      support_intro: "¿Una pregunta, un problema técnico o una sugerencia?",
      support_contact_label: "Contacta con nuestro equipo de soporte:",
      support_eta: "Normalmente respondemos en 24–48 horas laborables."
    }
  };

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

    // data-i18n → HTML
    root.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (key && dict[key] != null) {
        el.innerHTML = dict[key];
      }
    });

    // data-i18n-attr="placeholder:key,title:key,aria-label:key"
    root.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const pairs = (el.dataset.i18nAttr || '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean);

      pairs.forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        if (attr && key && dict[key] != null) {
          el.setAttribute(attr, dict[key]);
        }
      });
    });
  }

  function applyAndReveal() {
    LANG = currentLang();
    apply(document);
    document.documentElement.setAttribute('lang', LANG);

    if (document.documentElement.style.visibility === 'hidden') {
      requestAnimationFrame(() => {
        document.documentElement.style.visibility = '';
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAndReveal);
  } else {
    applyAndReveal();
  }

  document.addEventListener('boothr:lang-changed', () => {
    applyAndReveal();
  });

  window.BOOTHR_I18N = {
    apply,
    get lang() {
      return LANG;
    },
    setLang(l) {
      const base = String(l || '').toLowerCase().slice(0, 2);
      LANG = DICTS[base] ? base : 'en';
      document.documentElement.setAttribute('lang', LANG);
      apply(document);

      try {
        document.dispatchEvent(
          new CustomEvent('boothr:lang-changed', { detail: { lang: LANG } })
        );
      } catch (_) {}
    }
  };
})();
