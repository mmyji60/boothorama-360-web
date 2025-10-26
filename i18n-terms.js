<script>
/**
 * Mini loader : lit ?lang=xx puis remplit via data-i18n.
 * Adapte si tu as déjà un utilitaire commun (ex: i18n.js).
 */
(function () {
  const params = new URLSearchParams(location.search);
  const lang = (params.get('lang') || document.documentElement.dataset.lang || 'fr').toLowerCase();

  const dict = {
    fr: {
      title: "Conditions d’utilisation – Boothorama 360",
      meta_desc: "Conditions générales d’utilisation de l’application Boothorama 360.",
      nav_privacy: "Confidentialité",
      nav_legal: "Mentions légales",
      nav_faq: "FAQ",
      badge_app: "Application mobile",
      h1: "Conditions d’utilisation",
      intro: "Ce document définit les règles d’utilisation de <strong>Boothorama 360</strong>, vos droits et obligations, ainsi que nos responsabilités.",

      s0: "0. Acceptation",
      s0_p: "En installant, accédant ou utilisant l’app, vous acceptez pleinement ces Conditions d’utilisation. Si vous n’acceptez pas, veuillez ne pas utiliser l’app.",

      s1: "1. Définitions",
      s1_l1: "<strong>App</strong> : l’application mobile Boothorama 360.",
      s1_l2: "<strong>Service</strong> : fonctionnalités de capture 360°, post-traitement, export et partage.",
      s1_l3: "<strong>Utilisateur</strong> : toute personne utilisant l’app (compte anonyme ou connecté).",

      s2: "2. Éligibilité",
      s2_p: "L’app n’est pas destinée aux moins de 13 ans. Selon votre pays, un accord parental peut être requis pour les 13–16 ans.",

      s3: "3. Compte et authentification",
      s3_l1: "<strong>Compte anonyme</strong> : possible via Firebase Authentication.",
      s3_l2: "<strong>Connexion Google</strong> : optionnelle. Vous pouvez vous déconnecter ou révoquer l’accès à tout moment.",

      s4: "4. Abonnements, paiements, remboursements",
      s4_l1: "Les achats sont gérés par l’App Store/Google Play. Boothorama ne traite pas vos données de carte.",
      s4_l2: "La durée, le prix, le renouvellement et les essais gratuits sont indiqués dans le store.",
      s4_l3: "Gestion/annulation depuis votre compte Apple/Google. Les remboursements relèvent des politiques des stores.",

      s5: "5. Utilisation acceptable",
      s5_l1: "Ne pas nuire au Service, ni tenter d’y accéder de manière non autorisée.",
      s5_l2: "Ne pas enfreindre la loi, ni violer les droits de tiers (image, propriété intellectuelle).",
      s5_l3: "Ne pas publier/partager de contenus illégaux, diffamatoires, haineux, ou violents.",

      s6: "6. Contenu et propriété intellectuelle",
      s6_l1: "<strong>Vos médias</strong> : restent à vous. Ils sont stockés sur votre appareil et, si vous l’activez, dans votre Google Drive.",
      s6_l2: "<strong>Licence limitée</strong> : nous vous concédons une licence personnelle, non exclusive et non transférable pour utiliser l’app.",
      s6_l3: "<strong>Éléments Boothorama</strong> : marques, logos, textes, visuels, code — protégés par le droit d’auteur.",

      s7: "7. Export Google Drive & QR code",
      s7_p1: "Si vous activez l’export Drive, l’app téléverse la vidéo montée dans votre Drive à l’aide des jetons Google.",
      s7_p2: "Si vous activez le partage par lien/QR, toute personne disposant du lien/QR peut accéder à la vidéo selon vos réglages Drive. Vous pouvez à tout moment désactiver le partage ou supprimer le fichier.",

      s8: "8. Services tiers",
      s8_p: "L’app s’appuie sur Firebase Authentication, Google Drive, App Store/Google Play. Ces services ont leurs propres conditions et politiques.",

      s9: "9. Absence de garantie",
      s9_p: "L’app est fournie « en l’état ». Nous ne garantissons pas l’absence d’erreurs, l’exactitude, la disponibilité continue ou l’adéquation à un usage particulier.",

      s10: "10. Limitation de responsabilité",
      s10_p: "Dans la mesure permise par la loi, notre responsabilité est limitée aux dommages directs et prévisibles. Nous ne sommes pas responsables des pertes indirectes (perte de profits, données, etc.).",

      s11: "11. Suspension / Résiliation",
      s11_p: "Nous pouvons suspendre ou résilier l’accès en cas de violation des présentes, de fraude, de risques pour la sécurité ou la disponibilité du Service.",

      s12: "12. Modifications",
      s12_p: "Nous pouvons mettre à jour ces Conditions. Les changements significatifs pourront être annoncés dans l’app. La poursuite d’utilisation vaut acceptation.",

      s13: "13. Droit applicable et juridiction",
      s13_p: "Ces Conditions sont régies par le droit français. Les tribunaux du ressort de l’éditeur sont compétents, sous réserve des règles impératives applicables.",

      s14: "14. Contact",
      s14_p: "Pour toute question : <a href=\"mailto:contact@exemple.com\">contact@exemple.com</a>. Pour la confidentialité : <a href=\"mailto:privacy@exemple.com\">privacy@exemple.com</a>. Voir la <a href=\"./\">politique de confidentialité</a>.",

      updated: "Dernière mise à jour :",
      privacy_link: "politique de confidentialité"
    },

    en: {
      title: "Terms of Use – Boothorama 360",
      meta_desc: "Terms of Use for the Boothorama 360 application.",
      nav_privacy: "Privacy",
      nav_legal: "Legal Notice",
      nav_faq: "FAQ",
      badge_app: "Mobile app",
      h1: "Terms of Use",
      intro: "This document sets the rules for using <strong>Boothorama 360</strong>, your rights and obligations, and our responsibilities.",

      s0: "0. Acceptance",
      s0_p: "By installing, accessing or using the app, you accept these Terms of Use. If you do not agree, please do not use the app.",

      s1: "1. Definitions",
      s1_l1: "<strong>App</strong>: the Boothorama 360 mobile application.",
      s1_l2: "<strong>Service</strong>: 360° capture, post-processing, export and sharing features.",
      s1_l3: "<strong>User</strong>: anyone using the app (anonymous or signed-in).",

      s2: "2. Eligibility",
      s2_p: "The app is not intended for children under 13. Depending on your country, parental consent may be required for 13–16.",

      s3: "3. Account & authentication",
      s3_l1: "<strong>Anonymous account</strong>: possible using Firebase Authentication.",
      s3_l2: "<strong>Google sign-in</strong>: optional. You can sign out or revoke access at any time.",

      s4: "4. Subscriptions, payments, refunds",
      s4_l1: "Purchases are handled by the App Store/Google Play. Boothorama does not process your card data.",
      s4_l2: "Duration, price, renewal and trials are shown in the store.",
      s4_l3: "Manage/cancel from your Apple/Google account. Refunds depend on store policies.",

      s5: "5. Acceptable use",
      s5_l1: "Do not harm the Service or attempt unauthorized access.",
      s5_l2: "Do not break the law or infringe third-party rights (image, IP).",
      s5_l3: "Do not publish/share illegal, defamatory, hateful or violent content.",

      s6: "6. Content & intellectual property",
      s6_l1: "<strong>Your media</strong>: remains yours. It is stored on your device and, if enabled, in your Google Drive.",
      s6_l2: "<strong>Limited license</strong>: we grant a personal, non-exclusive, non-transferable license to use the app.",
      s6_l3: "<strong>Boothorama assets</strong>: trademarks, logos, text, visuals, code — protected by copyright.",

      s7: "7. Google Drive export & QR",
      s7_p1: "If you enable Drive export, the app uploads the edited video to your Drive using Google tokens.",
      s7_p2: "If you enable link/QR sharing, anyone with the link/QR can access the video per your Drive settings. You can disable sharing or delete the file at any time.",

      s8: "8. Third-party services",
      s8_p: "The app relies on Firebase Authentication, Google Drive, and the App Store/Google Play. These have their own terms and policies.",

      s9: "9. No warranty",
      s9_p: "The app is provided “as is”. We do not guarantee error-free operation, accuracy, continuous availability or fitness for a particular purpose.",

      s10: "10. Liability limitation",
      s10_p: "To the extent permitted by law, our liability is limited to direct and foreseeable damages. We are not liable for indirect losses (lost profits, data, etc.).",

      s11: "11. Suspension / termination",
      s11_p: "We may suspend or terminate access in case of breach of these Terms, fraud, or risks to security or Service availability.",

      s12: "12. Changes",
      s12_p: "We may update these Terms. Material changes may be announced in the app. Continued use constitutes acceptance.",

      s13: "13. Governing law & jurisdiction",
      s13_p: "These Terms are governed by French law. Courts at the publisher’s domicile shall have jurisdiction, subject to mandatory rules.",

      s14: "14. Contact",
      s14_p: "Questions: <a href=\"mailto:contact@exemple.com\">contact@exemple.com</a>. Privacy: <a href=\"mailto:privacy@exemple.com\">privacy@exemple.com</a>. See the <a href=\"./\">privacy policy</a>.",

      updated: "Last updated:",
      privacy_link: "privacy policy"
    },

    es: {
      title: "Términos de uso – Boothorama 360",
      meta_desc: "Términos de uso de la aplicación Boothorama 360.",
      nav_privacy: "Privacidad",
      nav_legal: "Aviso legal",
      nav_faq: "FAQ",
      badge_app: "Aplicación móvil",
      h1: "Términos de uso",
      intro: "Este documento establece las reglas de uso de <strong>Boothorama 360</strong>, tus derechos y obligaciones, y nuestras responsabilidades.",

      s0: "0. Aceptación",
      s0_p: "Al instalar, acceder o usar la app, aceptas estos Términos de uso. Si no estás de acuerdo, no uses la app.",

      s1: "1. Definiciones",
      s1_l1: "<strong>App</strong>: la aplicación móvil Boothorama 360.",
      s1_l2: "<strong>Servicio</strong>: funciones de captura 360°, posprocesado, exportación y compartición.",
      s1_l3: "<strong>Usuario</strong>: cualquier persona que use la app (anónimo o con sesión).",

      s2: "2. Elegibilidad",
      s2_p: "La app no está destinada a menores de 13 años. Según el país, puede requerirse consentimiento parental para 13–16.",

      s3: "3. Cuenta y autenticación",
      s3_l1: "<strong>Cuenta anónima</strong>: posible mediante Firebase Authentication.",
      s3_l2: "<strong>Inicio de sesión con Google</strong>: opcional. Puedes cerrar sesión o revocar el acceso en cualquier momento.",

      s4: "4. Suscripciones, pagos y reembolsos",
      s4_l1: "Las compras las gestionan App Store/Google Play. Boothorama no procesa tus datos de tarjeta.",
      s4_l2: "Duración, precio, renovación y pruebas se muestran en la tienda.",
      s4_l3: "Gestiona/cancela desde tu cuenta Apple/Google. Los reembolsos dependen de las políticas de las tiendas.",

      s5: "5. Uso aceptable",
      s5_l1: "No dañes el Servicio ni intentes accesos no autorizados.",
      s5_l2: "No incumplas la ley ni vulneres derechos de terceros (imagen, PI).",
      s5_l3: "No publiques/compartas contenido ilegal, difamatorio, de odio o violento.",

      s6: "6. Contenido y propiedad intelectual",
      s6_l1: "<strong>Tus medios</strong>: siguen siendo tuyos. Se guardan en tu dispositivo y, si lo activas, en tu Google Drive.",
      s6_l2: "<strong>Licencia limitada</strong>: te concedemos una licencia personal, no exclusiva e intransferible para usar la app.",
      s6_l3: "<strong>Activos de Boothorama</strong>: marcas, logos, textos, visuales y código — protegidos por derechos de autor.",

      s7: "7. Exportación a Google Drive y QR",
      s7_p1: "Si activas la exportación a Drive, la app sube el vídeo editado a tu Drive usando los tokens de Google.",
      s7_p2: "Si activas el enlace/QR, cualquiera con el enlace/QR puede acceder al vídeo según tu configuración de Drive. Puedes desactivar el enlace o borrar el archivo en cualquier momento.",

      s8: "8. Servicios de terceros",
      s8_p: "La app se basa en Firebase Authentication, Google Drive y App Store/Google Play. Estos servicios tienen sus propios términos y políticas.",

      s9: "9. Sin garantía",
      s9_p: "La app se ofrece “tal cual”. No garantizamos funcionamiento sin errores, exactitud, disponibilidad continua ni idoneidad para un propósito particular.",

      s10: "10. Limitación de responsabilidad",
      s10_p: "En la medida permitida por la ley, nuestra responsabilidad se limita a daños directos y previsibles. No respondemos de pérdidas indirectas (beneficios, datos, etc.).",

      s11: "11. Suspensión / terminación",
      s11_p: "Podemos suspender o terminar el acceso en caso de incumplimiento, fraude o riesgos para la seguridad o la disponibilidad del Servicio.",

      s12: "12. Cambios",
      s12_p: "Podemos actualizar estos Términos. Los cambios materiales podrán anunciarse en la app. El uso continuado implica aceptación.",

      s13: "13. Ley aplicable y jurisdicción",
      s13_p: "Estos Términos se rigen por la ley francesa. Los tribunales del domicilio del editor serán competentes, sujeto a normas imperativas.",

      s14: "14. Contacto",
      s14_p: "Preguntas: <a href=\"mailto:contact@exemple.com\">contact@exemple.com</a>. Privacidad: <a href=\"mailto:privacy@exemple.com\">privacy@exemple.com</a>. Consulta la <a href=\"./\">política de privacidad</a>.",

      updated: "Última actualización:",
      privacy_link: "política de privacidad"
    }
  };

  
// Détection de langue : paramètre ?lang prioritaire, sinon préférences navigateur.
// Valeurs supportées : 'en' | 'fr' | 'es' ; fallback : 'en'
function detectLang() {
  const params = new URLSearchParams(location.search);
  const forced = params.get("lang");
  if (forced && ["en", "fr", "es"].includes(forced)) return forced;

  const list =
    (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || "en"];

  for (const l of list) {
    const base = String(l || "").toLowerCase().slice(0, 2);
    if (["en", "fr", "es"].includes(base)) return base;
  }
  return "en"; // fallback
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;

  // html@lang + data-lang
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  // title & meta
  document.title = dict.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', dict.meta_desc);

  // Contenu i18n (avec HTML autorisé)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Footer : année courante
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  const lang = detectLang();
  applyI18n(lang);
});
</script>
