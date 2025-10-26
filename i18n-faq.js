const I18N = {
  fr: {
    title: "FAQ – Boothorama 360",
    meta_desc: "Questions fréquentes sur l’app Boothorama 360.",
    nav_privacy: "Confidentialité",
    nav_legal: "Mentions légales",
    nav_faq: "FAQ",
    badge: "Aide & support",
    h1: "FAQ",
    intro: "Tout sur l’export Drive, les QR codes et la suppression des vidéos.",
    q1: "1) Quelles autorisations sont nécessaires ?",
    a1: "Caméra et micro (filmer), stockage (enregistrer), réseau (téléverser vers Drive). Vous pouvez les refuser ; sans caméra/micro, l’app ne peut pas filmer.",
    q2: "2) Que débloque l’abonnement ?",
    a2: "Notamment l’export automatique des vidéos montées vers votre Google Drive et des options avancées de partage. Les paiements sont gérés par l’App Store / Google Play.",
    q3: "3) Comment fonctionne le QR code ?",
    a3: "L’app génère un QR contenant le lien de partage Drive. Toute personne scannant le QR peut accéder à la vidéo si le partage est activé. Vous pouvez désactiver le partage ou supprimer le fichier depuis Drive.",
    q4: "4) Comment supprimer une vidéo ?",
    a4: "Dans l’app : bouton « Supprimer » (supprime localement et, si option activée, sur Drive). Dans Drive : supprimez le fichier ou coupez le lien de partage.",
    q5: "5) Utilisez-vous des traceurs ou la publicité ?",
    a5: "Non. Pas de publicité, pas de traceurs tiers.",
    q6: "6) Où puis-je exercer mes droits RGPD ?",
    a6: 'Contactez <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>. Vous pouvez également saisir la CNIL (cnil.fr).'
  },
  en: {
    title: "FAQ – Boothorama 360",
    meta_desc: "Frequently asked questions about the Boothorama 360 app.",
    nav_privacy: "Privacy",
    nav_legal: "Legal Notice",
    nav_faq: "FAQ",
    badge: "Help & Support",
    h1: "FAQ",
    intro: "All about Drive export, QR codes and deleting videos.",
    q1: "1) What permissions are required?",
    a1: "Camera & mic (record), storage (save), network (upload to Drive). Without camera/mic, the app cannot record.",
    q2: "2) What does the subscription unlock?",
    a2: "Automatic export of rendered videos to your Google Drive and advanced sharing options. Payments are handled by the App Store / Google Play.",
    q3: "3) How does the QR code work?",
    a3: "The app generates a QR containing the Drive share link. Anyone with the QR can access the video if sharing is enabled. You can disable sharing or delete the file from Drive.",
    q4: "4) How do I delete a video?",
    a4: "In the app: “Delete” (removes locally and, if enabled, on Drive). In Drive: delete the file or disable sharing.",
    q5: "5) Do you use trackers or ads?",
    a5: "No. No ads, no third-party trackers.",
    q6: "6) How can I exercise my GDPR rights?",
    a6: 'Contact <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>. You may also contact your local authority (e.g., CNIL in France).'
  },
  es: {
    title: "FAQ – Boothorama 360",
    meta_desc: "Preguntas frecuentes sobre la app Boothorama 360.",
    nav_privacy: "Privacidad",
    nav_legal: "Aviso legal",
    nav_faq: "FAQ",
    badge: "Ayuda y soporte",
    h1: "FAQ",
    intro: "Todo sobre la exportación a Drive, los códigos QR y la eliminación de vídeos.",
    q1: "1) ¿Qué permisos se requieren?",
    a1: "Cámara y micrófono (grabar), almacenamiento (guardar), red (subir a Drive). Sin cámara/micrófono la app no puede grabar.",
    q2: "2) ¿Qué desbloquea la suscripción?",
    a2: "Exportación automática de los vídeos renderizados a tu Google Drive y opciones avanzadas de compartición. Los pagos los gestionan App Store / Google Play.",
    q3: "3) ¿Cómo funciona el código QR?",
    a3: "La app genera un QR con el enlace de compartición de Drive. Cualquiera con el QR puede acceder si la compartición está activada. Puedes desactivar la compartición o eliminar el archivo en Drive.",
    q4: "4) ¿Cómo elimino un vídeo?",
    a4: "En la app: «Eliminar» (borra localmente y, si está activado, también en Drive). En Drive: elimina el archivo o desactiva la compartición.",
    q5: "5) ¿Usáis rastreadores o anuncios?",
    a5: "No. Sin anuncios ni rastreadores de terceros.",
    q6: "6) ¿Cómo ejerzo mis derechos RGPD?",
    a6: 'Contacta con <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>. También puedes contactar con tu autoridad local (p. ej., CNIL).'
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
