// i18n.js — Politique de confidentialité Boothorama 360
// FR / EN / ES, fallback par défaut : EN
// ➜ Authentification : Firebase Authentication (Google) + compte anonyme
// ➜ Export : Google Drive (optionnel)
// ➜ Projet relié à Google Cloud Console (pas d’hébergement de médias par Boothorama)

const I18N = {
  fr: {
    title: "Politique de confidentialité – Boothorama 360",
    meta_desc: "Politique de confidentialité de l'application Boothorama 360.",
    nav_privacy: "Confidentialité",
    nav_legal: "Mentions légales",
    nav_terms: "Conditions d'utilisation",
    nav_faq: "FAQ",
    badge_rgpd: "Conforme RGPD",
    h1: "Politique de confidentialité",
    intro:
      "Nous expliquons ici quelles données sont traitées par <strong>Boothorama 360</strong>, pourquoi et pendant combien de temps. Aucune publicité, aucun traqueur.",

    who: "1. Qui est responsable ?",
    who_p:
      'Le responsable de traitement est <strong>Boothorama</strong> (voir <a href="mentions-legales.html">mentions légales</a>). Contact DPO/Privacy : <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>.',

    account: "2. Comptes et authentification",
    account_l1:
      "<strong>Compte anonyme</strong> : aucun identifiant nominatif n’est collecté.",
    account_l2:
      "<strong>Connexion Google (optionnelle)</strong> : via Firebase Authentication (Google) en OAuth pour exporter des vidéos dans VOTRE Google Drive. Nous recevons uniquement les jetons nécessaires aux fonctionnalités choisies.",

    s1: "3. Données traitées",
    s1_l1:
      "<strong>Médias locaux</strong> : vidéos/images capturées dans l’app — stockées <em>sur l’appareil</em>. Aucun envoi vers nos serveurs.",
    s1_l2:
      "<strong>Export Google Drive (option)</strong> : si activé, les vidéos montées sont téléversées dans votre Drive. L’app conserve localement l’ID fichier/le lien de partage pour gérer le QR code.",
    s1_l3:
      "<strong>Permissions</strong> : accès <em>caméra</em> et <em>micro</em> (filmer), <em>stockage</em> (enregistrer), <em>réseau</em> (uploader).",
    s1_l4:
      "<strong>Abonnement</strong> : état de l’abonnement (actif/expiré) et identifiant d’achat fourni par l’App Store / Google Play. Aucune donnée de carte bancaire n’est traitée par Boothorama.",
    s1_l5:
      "<strong>Diagnostic</strong> : journaux d’erreur anonymes (si activé au niveau du système) pour la stabilité.",

    s2: "4. Finalités",
    s2_p1: "Fournir la capture 360°, le post-traitement et l’export/partage des vidéos.",
    s2_p2: "Permettre le partage par <strong>QR code</strong> d’un lien Drive.",
    s2_p3: "Gérer les achats intégrés/abonnements.",
    s2_p4: "Améliorer la stabilité via diagnostics (option système).",

    s3: "5. Bases légales",
    s3_p1:
      "<strong>Exécution du contrat</strong> : fonctions cœur (capture, enregistrement local, lecture).",
    s3_p2:
      "<strong>Consentement</strong> : autorisations caméra/micro ; export vers Google Drive ; génération de lien de partage/QR.",
    s3_p3:
      "<strong>Intérêt légitime</strong> : sécurité, prévention de la fraude, amélioration technique via diagnostics anonymisés.",

    s4: "6. Durées de conservation",
    s4_l1:
      "<strong>Sur l’appareil</strong> : jusqu’à suppression par vous depuis l’app.",
    s4_l2:
      "<strong>Sur Google Drive</strong> : tant que le fichier reste dans votre Drive.",
    s4_l3:
      "<strong>Jetons OAuth</strong> : durée strictement nécessaire pour l’export ; renouvelés/invalidés par Google.",
    s4_l4:
      "<strong>Preuves d’achat</strong> : durée requise pour gérer l’abonnement et respecter les obligations légales.",

    s5: "7. Destinataires et tiers",
    s5_p:
      "Nous ne vendons pas vos données. L’authentification est fournie par <strong>Firebase Authentication</strong> (service Google — projet relié à <strong>Google Cloud Console</strong>). L’export est réalisé vers <strong>Google Drive</strong> (Google). Les paiements/abonnements sont traités par <strong>Apple App Store</strong> et/ou <strong>Google Play</strong>. Boothorama n’héberge pas vos médias et ne traite pas vos données de carte bancaire.",

    transfer: "8. Transferts hors UE",
    transfer_p:
      "Les services Google (Firebase Auth, Google Drive) peuvent impliquer des traitements hors UE. Google applique des garanties adéquates (p. ex. Clauses Contractuelles Types). En activant la connexion Google et/ou l’export Drive, vous consentez à ces transferts.",

    qr: "9. Partage par lien / QR code",
    qr_p:
      "Si le partage de lien Drive est activé, toute personne disposant du lien/QR peut accéder à la vidéo selon vos réglages Drive. Vous pouvez désactiver le partage ou supprimer le fichier à tout moment.",

    // --- 9 bis ---
    revoke: "9 bis. Déconnexion & révocation Google",
    revoke_p1:
      "<strong>Dans l’app</strong> : vous pouvez vous déconnecter de Google pour stopper les exports futurs. Les vidéos déjà exportées restent dans votre Drive jusqu’à suppression par vous.",
    revoke_p2:
      "<strong>Dans votre compte Google</strong> : vous pouvez <em>révoquer l’accès</em> de Boothorama 360 (Compte Google → Sécurité → Accès des tiers → retirer l’accès). Après révocation, l’app ne pourra plus exporter vers Drive tant que vous ne reconnectez pas votre compte. Les liens/QR existants restent valides tant que le partage Drive n’est pas désactivé ou que le fichier n’est pas supprimé.",

    delete: "10. Suppression",
    delete_l1:
      "<strong>Depuis l’app</strong> : bouton « Supprimer » (local) ; si l’option est activée, suppression également sur Drive.",
    delete_l2:
      "<strong>Depuis Google Drive</strong> : supprimez le fichier ou révoquez son lien de partage.",

    rights: "11. Vos droits",
    rights_l1:
      "Accès, rectification, effacement, portabilité, limitation, opposition.",
    rights_l2:
      "Retrait du consentement (Drive/partage/connexion Google) à tout moment.",
    rights_l3:
      "Réclamation : <strong>CNIL</strong> (cnil.fr).",
    rights_how:
      'Pour exercer vos droits : <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>.',

    security: "12. Sécurité",
    security_p:
      "Mesures techniques et organisationnelles adaptées (chiffrement en transit lors de l’upload, stockage local sur l’appareil, minimisation). Sécurisez votre appareil et votre compte Google (2FA).",

    minors: "13. Mineurs",
    minors_p:
      "L’app n’est pas destinée aux moins de 13 ans. Pour les 13–16 ans, l’autorisation d’un titulaire de l’autorité parentale peut être requise selon le pays.",

    changes: "14. Modifications",
    changes_p:
      "Nous pouvons mettre à jour la présente politique. Les changements significatifs seront annoncés dans l’app.",

    updated: "Dernière mise à jour :"
  },

  en: {
    title: "Privacy Policy – Boothorama 360",
    meta_desc: "Privacy policy for the Boothorama 360 app.",
    nav_privacy: "Privacy",
    nav_legal: "Legal Notice",
    nav_terms: "Terms of Use",
    nav_faq: "FAQ",
    badge_rgpd: "GDPR Compliant",
    h1: "Privacy Policy",
    intro:
      "This page explains which data is processed by <strong>Boothorama 360</strong>, why, and for how long. No ads, no trackers.",

    who: "1. Who is the controller?",
    who_p:
      'The data controller is <strong>Boothorama</strong> (see <a href="mentions-legales.html?lang=en">legal notice</a>). DPO/Privacy contact: <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>.',

    account: "2. Accounts & authentication",
    account_l1:
      "<strong>Anonymous account</strong>: no personal identifier is collected.",
    account_l2:
      "<strong>Google Sign-In (optional)</strong>: via <strong>Firebase Authentication</strong> (Google) using OAuth to export videos to YOUR Google Drive. We only receive tokens required for the chosen features.",

    s1: "3. Data we process",
    s1_l1:
      "<strong>Local media</strong>: videos/images captured in the app — stored <em>on your device</em>. No upload to our servers.",
    s1_l2:
      "<strong>Google Drive export (optional)</strong>: when enabled, rendered videos are uploaded to your Drive. The app stores locally the file ID/share link to manage the QR code.",
    s1_l2b:
  "<strong>Google Drive export (optional)</strong>: when enabled, the rendered video is uploaded to your Drive using Google tokens. Locally, the app keeps the file ID/share link (for the QR code).",
    s1_l3:
      "<strong>Permissions</strong>: camera & microphone (record), storage (save), network (upload).",
    s1_l4:
      "<strong>Subscription</strong>: subscription status and purchase identifier from the App Store / Google Play. We do not process card data.",
    s1_l5:
      "<strong>Diagnostics</strong>: anonymous crash logs (if enabled at OS level).",

    s2: "4. Purposes",
    s2_p1: "Provide 360° capture, post-processing and export/sharing.",
    s2_p2: "Enable QR-code sharing of a Drive link.",
    s2_p3: "Manage in-app purchases/subscriptions.",
    s2_p4: "Improve stability via diagnostics.",

    s3: "5. Legal bases",
    s3_p1:
      "<strong>Contract</strong>: core app features (capture, local storage, playback).",
    s3_p2:
      "<strong>Consent</strong>: camera/mic permissions; Google Drive export; share link/QR; Google Sign-In.",
    s3_p3:
      "<strong>Legitimate interest</strong>: security, fraud prevention, technical improvement using anonymized diagnostics.",

    s4: "6. Retention",
    s4_l1:
      "<strong>On device</strong>: until you delete it in the app.",
    s4_l2:
      "<strong>On Google Drive</strong>: as long as you keep it in your Drive.",
    s4_l3:
      "<strong>OAuth tokens</strong>: only as long as needed for export; renewed/invalidated by Google.",
    s4_l4:
      "<strong>Purchase records</strong>: as required to manage the subscription and comply with legal obligations.",

    s5: "7. Recipients & third parties",
    s5_p:
      "We do not sell data. Authentication is provided by <strong>Firebase Authentication</strong> (a Google service — project linked to <strong>Google Cloud Console</strong>). Exports are made to <strong>Google Drive</strong>. Payments/subscriptions are handled by <strong>Apple App Store</strong> and/or <strong>Google Play</strong>. Boothorama does not host your media and does not process card data.",

    transfer: "8. International transfers",
    transfer_p:
      "Google services (Firebase Auth, Google Drive) may involve processing outside the EU. Google applies appropriate safeguards (e.g., Standard Contractual Clauses). By enabling Google Sign-In and/or Drive export, you consent to such transfers.",

    qr: "9. Link/QR sharing",
    qr_p:
      "If Drive link sharing is enabled, anyone with the link/QR can access the video according to your Drive settings. You may disable sharing or delete the file at any time.",

    // --- 9 bis ---
    revoke: "9 bis. Sign-out & Google access revocation",
    revoke_p1:
      "<strong>In the app</strong>: you can sign out of Google to stop future exports. Videos already exported remain in your Drive until you delete them.",
    revoke_p2:
      "<strong>In your Google Account</strong>: you can <em>revoke Boothorama 360 access</em> (Google Account → Security → Third-party access → remove). After revocation, the app cannot export to Drive until you reconnect. Existing links/QRs stay valid unless you disable Drive sharing or delete the file.",

    delete: "10. Deletion",
    delete_l1:
      "<strong>From the app</strong>: “Delete” (local); if enabled, also deletes on Drive.",
    delete_l2:
      "<strong>From Google Drive</strong>: delete the file or revoke sharing.",

    rights: "11. Your rights",
    rights_l1:
      "Access, rectification, erasure, portability, restriction, objection.",
    rights_l2:
      "Withdraw consent (Drive/sharing/Google Sign-In) at any time.",
    rights_l3:
      "Complain to your supervisory authority (e.g., CNIL in France).",
    rights_how:
      'Exercise your rights: <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>.',

    security: "12. Security",
    security_p:
      "Appropriate technical/organizational measures (in-transit encryption for uploads, on-device storage, minimization). Secure your device and Google account (2FA).",

    minors: "13. Minors",
    minors_p:
      "Not intended for children under 13. For ages 13–16, parental authorization may be required depending on the country.",

    changes: "14. Changes",
    changes_p:
      "We may update this policy. Significant changes will be announced in-app.",

    updated: "Last updated:"
  },

  es: {
    title: "Política de privacidad – Boothorama 360",
    meta_desc: "Política de privacidad de la aplicación Boothorama 360.",
    nav_privacy: "Privacidad",
    nav_legal: "Aviso legal",
    nav_terms: "Condiciones de uso",
    nav_faq: "FAQ",
    badge_rgpd: "Cumple con RGPD",
    h1: "Política de privacidad",
    intro:
      "Aquí explicamos qué datos procesa <strong>Boothorama 360</strong>, por qué y durante cuánto tiempo. Sin anuncios ni rastreadores.",

    who: "1. Responsable del tratamiento",
    who_p:
      'El responsable es <strong>Boothorama</strong> (ver <a href="mentions-legales.html?lang=es">aviso legal</a>). Contacto privacidad/DPO: <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>.',

    account: "2. Cuentas y autenticación",
    account_l1:
      "<strong>Cuenta anónima</strong>: no se recoge ningún identificador personal.",
    account_l2:
      "<strong>Inicio de sesión con Google (opcional)</strong>: mediante <strong>Firebase Authentication</strong> (Google) con OAuth para exportar vídeos a TU Google Drive. Solo recibimos los tokens necesarios para las funciones elegidas.",

    s1: "3. Datos tratados",
    s1_l1:
      "<strong>Medios locales</strong>: vídeos/imágenes almacenados <em>en tu dispositivo</em>. No se suben a nuestros servidores.",
    s1_l2:
      "<strong>Exportación a Google Drive (opcional)</strong>: si está activado, los vídeos renderizados se suben a tu Drive. La app guarda localmente el ID/enlace del archivo para gestionar el código QR.",
    s1_l2b:
  "<strong>Exportación a Google Drive (opcional)</strong>: si está activado, el vídeo montado se sube a tu Drive con los tokens de Google. Localmente, la app guarda el ID/enlace del archivo (para el código QR).",
    s1_l3:
      "<strong>Permisos</strong>: cámara y micrófono (grabar), almacenamiento (guardar), red (subir).",
    s1_l4:
      "<strong>Suscripción</strong>: estado de la suscripción e identificador de compra del App Store / Google Play. Boothorama no trata datos de tarjetas.",
    s1_l5:
      "<strong>Diagnóstico</strong>: registros anónimos de fallos (si está activado a nivel del sistema).",

    s2: "4. Finalidades",
    s2_p1: "Proporcionar captura 360°, posprocesado y exportación/compartición.",
    s2_p2: "Habilitar <strong>código QR</strong> con enlace de Drive.",
    s2_p3: "Gestionar compras integradas/suscripciones.",
    s2_p4: "Mejorar la estabilidad mediante diagnósticos.",

    s3: "5. Bases jurídicas",
    s3_p1:
      "<strong>Ejecución del contrato</strong>: funciones básicas (captura, almacenamiento local, reproducción).",
    s3_p2:
      "<strong>Consentimiento</strong>: permisos de cámara/micrófono; exportación a Drive; enlace/QR; inicio de sesión con Google.",
    s3_p3:
      "<strong>Interés legítimo</strong>: seguridad, prevención de fraude, mejora técnica con diagnósticos anonimizados.",

    s4: "6. Conservación",
    s4_l1:
      "<strong>En el dispositivo</strong>: hasta que lo elimines.",
    s4_l2:
      "<strong>En Google Drive</strong>: mientras lo conserves.",
    s4_l3:
      "<strong>Tokens OAuth</strong>: solo el tiempo necesario; Google los renueva/inhabilita.",
    s4_l4:
      "<strong>Registros de compra</strong>: según requisitos legales y de gestión.",

    s5: "7. Destinatarios y terceros",
    s5_p:
      "No vendemos datos. La autenticación la proporciona <strong>Firebase Authentication</strong> (servicio de Google — proyecto vinculado a <strong>Google Cloud Console</strong>). La exportación se realiza a <strong>Google Drive</strong>. Los pagos/suscripciones los gestionan <strong>Apple App Store</strong> y/o <strong>Google Play</strong>. Boothorama no aloja tus medios ni trata datos de tarjeta.",

    transfer: "8. Transferencias internacionales",
    transfer_p:
      "Los servicios de Google (Firebase Auth, Google Drive) pueden implicar tratamiento fuera de la UE. Google aplica salvaguardias adecuadas (p. ej., Cláusulas Contractuales Tipo). Al habilitar el inicio de sesión con Google y/o la exportación a Drive, consientes estas transferencias.",

    qr: "9. Enlace/QR",
    qr_p:
      "Si habilitas la compartición de enlace de Drive, cualquiera con el enlace/QR puede acceder según tu configuración de Drive. Puedes desactivar la compartición o eliminar el archivo cuando quieras.",

    // --- 9 bis ---
    revoke: "9 bis. Cierre de sesión y revocación en Google",
    revoke_p1:
      "<strong>En la app</strong>: puedes cerrar sesión en Google para detener futuras exportaciones. Los vídeos ya exportados permanecen en tu Drive hasta que los elimines.",
    revoke_p2:
      "<strong>En tu Cuenta de Google</strong>: puedes <em>revocar el acceso</em> de Boothorama 360 (Cuenta de Google → Seguridad → Acceso de terceros → retirar). Tras la revocación, la app no podrá exportar a Drive hasta que vuelvas a conectar. Los enlaces/QR existentes siguen siendo válidos salvo que desactives la compartición o elimines el archivo.",

    delete: "10. Eliminación",
    delete_l1:
      "<strong>Desde la app</strong>: «Eliminar» (local) y, si está activado, también en Drive.",
    delete_l2:
      "<strong>Desde Google Drive</strong>: elimina el archivo o desactiva la compartición.",

    rights: "11. Tus derechos",
    rights_l1:
      "Acceso, rectificación, supresión, portabilidad, limitación, oposición.",
    rights_l2:
      "Retirar el consentimiento (Drive/compartición/inicio de sesión con Google) en cualquier momento.",
    rights_l3:
      "Reclamar ante la autoridad de control (p. ej., CNIL).",
    rights_how:
      'Ejercer derechos: <a href="mailto:privacy@exemple.com">privacy@exemple.com</a>.',

    security: "12. Seguridad",
    security_p:
      "Medidas técnicas/organizativas adecuadas (cifrado en tránsito para subidas, almacenamiento en el dispositivo, minimización). Protege tu dispositivo y tu cuenta de Google (2FA).",

    minors: "13. Menores",
    minors_p:
      "No destinada a menores de 13 años. Para 13–16, puede requerirse autorización parental según el país.",

    changes: "14. Cambios",
    changes_p:
      "Podemos actualizar esta política. Los cambios significativos se anunciarán en la app.",

    updated: "Última actualización:"
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
