const I18N = {
  fr: {
    title: "FAQ – Boothorama 360",
    meta_desc: "Questions fréquentes sur l’app Boothorama 360.",
    nav_privacy: "Confidentialité",
    nav_terms: "Conditions d’utilisation",
    nav_legal: "Mentions légales",
    nav_faq: "FAQ",
    badge: "Aide & support",
    h1: "FAQ",
    intro: "Tout sur l’export Drive, les QR codes et la suppression des vidéos.",
    q1: "1) Quelles autorisations sont nécessaires ?",
    a1: "Caméra et micro (filmer), stockage (enregistrer), réseau (téléverser vers Drive). Vous pouvez les refuser ; sans caméra/micro, l’app ne peut pas filmer.",
    q2: "2) Que débloque l’abonnement ?",
    a2: "Notamment l’export automatique des vidéos montées vers votre Google Drive et des options avancées de partage. Les paiements sont gérés par l’App Store.",
    q3: "3) Comment fonctionne le QR code ?",
    a3: "L’app génère un QR contenant le lien de partage Drive. Toute personne scannant le QR peut accéder à la vidéo si le partage est activé. Vous pouvez désactiver le partage ou supprimer le fichier depuis Drive.",
    q4: "4) Comment supprimer une vidéo ?",
    a4: "Dans l’app : bouton « Supprimer » (supprime localement et, si option activée, sur Drive). Dans Drive : supprimez le fichier ou coupez le lien de partage.",
    q5: "5) Utilisez-vous des traceurs ou la publicité ?",
    a5: "Non. Pas de publicité, pas de traceurs tiers.",
  },
  en: {
    title: "FAQ – Boothorama 360",
    meta_desc: "Frequently asked questions about the Boothorama 360 app.",
    nav_privacy: "Privacy",
    nav_terms: "Terms of Use",
    nav_legal: "Legal Notice",
    nav_faq: "FAQ",
    badge: "Help & Support",
    h1: "FAQ",
    intro: "All about Drive export, QR codes and deleting videos.",
    q1: "1) What permissions are required?",
    a1: "Camera & mic (record), storage (save), network (upload to Drive). Without camera/mic, the app cannot record.",
    q2: "2) What does the subscription unlock?",
    a2: "Automatic export of rendered videos to your Google Drive and advanced sharing options. Payments are handled by the App Store.",
    q3: "3) How does the QR code work?",
    a3: "The app generates a QR containing the Drive share link. Anyone with the QR can access the video if sharing is enabled. You can disable sharing or delete the file from Drive.",
    q4: "4) How do I delete a video?",
    a4: "In the app: “Delete” (removes locally and, if enabled, on Drive). In Drive: delete the file or disable sharing.",
    q5: "5) Do you use trackers or ads?",
    a5: "No. No ads, no third-party trackers.",
  },
  es: {
    title: "FAQ – Boothorama 360",
    meta_desc: "Preguntas frecuentes sobre la app Boothorama 360.",
    nav_privacy: "Privacidad",
    nav_terms: "Condiciones de uso",
    nav_legal: "Aviso legal",
    nav_faq: "FAQ",
    badge: "Ayuda y soporte",
    h1: "FAQ",
    intro: "Todo sobre la exportación a Drive, los códigos QR y la eliminación de vídeos.",
    q1: "1) ¿Qué permisos se requieren?",
    a1: "Cámara y micrófono (grabar), almacenamiento (guardar), red (subir a Drive). Sin cámara/micrófono la app no puede grabar.",
    q2: "2) ¿Qué desbloquea la suscripción?",
    a2: "Exportación automática de los vídeos renderizados a tu Google Drive y opciones avanzadas de compartición. Los pagos los gestionan App Store.",
    q3: "3) ¿Cómo funciona el código QR?",
    a3: "La app genera un QR con el enlace de compartición de Drive. Cualquiera con el QR puede acceder si la compartición está activada. Puedes desactivar la compartición o eliminar el archivo en Drive.",
    q4: "4) ¿Cómo elimino un vídeo?",
    a4: "En la app: «Eliminar» (borra localmente y, si está activado, también en Drive). En Drive: elimina el archivo o desactiva la compartición.",
    q5: "5) ¿Usáis rastreadores o anuncios?",
    a5: "No. Sin anuncios ni rastreadores de terceros.",
  }
};
// Détection : uniquement langue système (posée par le bootstrap)
function detectLang() {
  return window.__BOOTHR_LANG__ || "en";
}

function applyI18n(lang) {
  const dict = I18N[lang] || I18N.en;
  console.info("[i18n] detected lang:", lang);

  // html@lang + data-lang (bootstrap les a déjà posés)
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  // Title & meta description
  document.title = dict.title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", dict.meta_desc);

  // Remplacement des contenus i18n (HTML autorisé)
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val =
      (dict && dict[key] !== undefined) ? dict[key]
      : (I18N.en && I18N.en[key] !== undefined) ? I18N.en[key]
      : null;

    if (val !== null) {
      el.innerHTML = val;
    } else {
      console.warn(`[i18n] Missing key "${key}" for lang "${lang}" (and EN fallback).`);
    }
  });

  // Footer : année courante
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();

  // Affiche le contenu une fois prêt (évite le flash de langue par défaut)
  document.documentElement.style.visibility = "";
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  const lang = detectLang();
  applyI18n(lang);
});
