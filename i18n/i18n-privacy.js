// i18n-privacy.js — Politique de confidentialité Boothorama 360
// DICTS : dictionnaires FR/EN/ES
// Détection : navigator / localStorage / window.__BOOTHR_LANG__
// Expose window.BOOTHR_I18N et window.BOOTHR_I18N_HEADER (alias) et dispatch des events
(function () {
  const DICS = {
    fr: {
      title: "Politique de confidentialité – Boothorama 360",
      meta_desc: "Politique de confidentialité de l'application Boothorama 360.",
      nav_privacy: "Confidentialité",
      nav_terms: "Conditions d’utilisation",
      nav_legal: "Mentions légales",
      nav_faq: "FAQ",
      badge_rgpd: "Conforme RGPD",
      h1: "Politique de confidentialité",
      intro:
        "Nous expliquons ici quelles données sont traitées par <strong>Boothorama 360</strong>, pourquoi et pendant combien de temps. Aucune publicité, aucun traqueur.",
      who: "1. Qui est responsable ?",
      who_p:
        'Le responsable de traitement est <strong>Boothorama</strong> (voir <a href="legal.html">mentions légales</a>). Contact DPO : <a href="mailto:contact@boothorama360.com">contact@boothorama360.com</a>.',
      account: "2. Comptes et authentification",
      account_l1:
        "<strong>Compte anonyme</strong> : aucun identifiant nominatif n’est collecté.",
      account_l2:
        "<strong>Connexion Google (optionnelle)</strong> : via <strong>Firebase Authentication</strong> (Google) en OAuth pour exporter des vidéos dans VOTRE Google Drive. Nous recevons uniquement les jetons nécessaires aux fonctionnalités choisies.",
      account_l3:
        "<strong>Connexion avec Apple (optionnelle)</strong> : via <strong>Firebase Authentication</strong> (Apple) pour vous connecter à l’app (par exemple pour synchroniser vos droits d’abonnement entre appareils). Nous ne recevons que les jetons techniques nécessaires et, le cas échéant, votre e-mail si vous acceptez de le partager.",
      s1: "3. Données traitées",
      s1_l1:
        "<strong>Médias locaux</strong> : vidéos/images capturées dans l’app — stockées <em>sur l’appareil</em>. Aucun envoi vers nos serveurs.",
      s1_l2:
        "<strong>Identifiants d’authentification</strong> (Firebase Auth) : identifiant utilisateur (<code>uid</code>), fournisseur (Google/Apple/Anonyme) et, le cas échéant, les métadonnées exposées par le fournisseur (ex. e-mail, nom, photo) si vous choisissez de les partager.",
      s1_l2b:
        "<strong>Export Google Drive (option)</strong> : si activé, la vidéo montée est téléversée dans votre Drive via les jetons Google. Localement, l’app conserve l’ID du fichier / le lien de partage (pour le QR code).",
      s1_l3:
        "<strong>Permissions</strong> : accès caméra et micro (filmer), stockage (enregistrer), réseau (uploader).",
      s1_l4:
        "<strong>Abonnement</strong> : état (actif/expiré) et identifiant d’achat App Store / Google Play. Aucune donnée de carte bancaire traitée par Boothorama.",
      s1_l5:
        "<strong>Diagnostic</strong> : journaux d’erreur anonymes (si activé au niveau du système).",
      s2: "4. Finalités",
      s2_p1: "Fournir la capture 360°, le post-traitement et l’export/partage des vidéos.",
      s2_p2: "Permettre le partage par <strong>QR code</strong> d’un lien Drive.",
      s2_p3: "Gérer les achats intégrés/abonnements.",
      s2_p4: "Améliorer la stabilité via diagnostics (option système).",
      s3: "5. Bases légales",
      s3_p1:
        "<strong>Exécution du contrat</strong> : fonctions cœur (capture, enregistrement local, lecture).",
      s3_p2:
        "<strong>Consentement</strong> : autorisations caméra/micro ; export Drive ; lien/QR ; connexion Google / Apple.",
      s3_p3:
        "<strong>Intérêt légitime</strong> : sécurité, prévention de la fraude, amélioration technique via diagnostics anonymisés.",
      s4: "6. Durées de conservation",
      s4_l1: "<strong>Sur l’appareil</strong> : jusqu’à suppression par vous depuis l’app.",
      s4_l2: "<strong>Sur Google Drive</strong> : tant que le fichier reste dans votre Drive.",
      s4_l3: "<strong>Jetons OAuth</strong> : durée strictement nécessaire ; renouvelés/invalidés par Google.",
      s4_l4: "<strong>Preuves d’achat</strong> : durée requise pour la gestion de l’abonnement et les obligations légales.",
      s5: "7. Destinataires et tiers",
      s5_p:
        "Nous ne vendons pas vos données. L’authentification est fournie par <strong>Firebase Authentication</strong> (service Google — projet relié à <strong>Google Cloud Console</strong>). L’export est réalisé vers <strong>Google Drive</strong>. Les paiements/abonnements sont traités par <strong>Apple App Store</strong>. Boothorama n’héberge pas vos médias et ne traite pas vos données de carte bancaire.",
      s5_firebase:
        "<strong>Firebase Authentication</strong> (Google) pour gérer les connexions Google, Apple et anonymes.",
      s5_gdrive:
        "<strong>Google Drive</strong> uniquement si vous activez l’export des vidéos.",
      s5_stores:
        "<strong>Apple App Store / Google Play</strong> pour la facturation des abonnements.",
      s5_cloud:
        "Le projet est hébergé dans la <strong>Google Cloud Console</strong> associée à l’app. Aucune base de données d’images/vidéos n’est hébergée par nos soins : les médias restent sur votre appareil, ou dans votre Drive si vous l’activez.",
      transfer: "8. Transferts hors UE",
      transfer_p:
        "Les services Google (Firebase Auth, Google Drive) peuvent impliquer des traitements hors UE. Google applique des garanties adéquates (p. ex. Clauses Contractuelles Types). En activant la connexion Google et/ou l’export Drive, vous consentez à ces transferts.",
      qr: "9. Partage par lien / QR code",
      qr_p:
        "Si le partage de lien Drive est activé, toute personne disposant du lien/QR peut accéder à la vidéo selon vos réglages Drive. Vous pouvez désactiver le partage ou supprimer le fichier à tout moment.",
      revoke: "9 bis. Révocation de l’accès Google / Apple",
      revoke_p1:
        "<strong>Dans l’app</strong> : vous pouvez vous déconnecter de votre compte (Google / Apple). Pour l’export vers Google Drive, le fait de vous déconnecter de Google stoppe les exports futurs. Les vidéos déjà exportées restent dans votre Drive jusqu’à suppression par vous.",
      revoke_p2:
        "<strong>Dans vos comptes Google / Apple</strong> : vous pouvez <em>révoquer l’accès</em> de Boothorama 360. Pour Google : Compte Google → Sécurité → Accès des tiers → retirer l’accès. Pour Apple : Réglages iOS / macOS → identifiant Apple → « Mot de passe et sécurité » → « Apps utilisant votre identifiant Apple » → retirer l’accès. Après révocation, l’app ne pourra plus utiliser ce mode de connexion tant que vous ne reconnectez pas votre compte. Les liens/QR existants restent valides tant que le partage Drive n’est pas désactivé ou que le fichier n’est pas supprimé.",
      delete: "10. Suppression",
      delete_l1:
        "<strong>Depuis l’app</strong> : bouton « Supprimer » (local) ; si l’option est activée, suppression également sur Drive.",
      delete_l2:
        "<strong>Depuis Google Drive</strong> : supprimez le fichier ou révoquez son partage.",
      rights: "11. Vos droits",
      rights_l1: "Accès, rectification, effacement, portabilité, limitation, opposition.",
      rights_l2:
        "Retrait du consentement (export Drive, liens de partage, connexion Google / Apple) à tout moment.",
      rights_l3: "Réclamation : <strong>CNIL</strong> (cnil.fr).",
      security: "12. Sécurité",
      security_p:
        "Mesures techniques et organisationnelles adaptées (chiffrement en transit lors de l’upload, stockage local sur l’appareil, principe de minimisation). Conservez votre appareil et votre compte Google sécurisés (mot de passe, 2FA).",
      minors: "13. Mineurs",
      minors_p:
        "L’app n’est pas destinée aux moins de 13 ans. Pour les 13–16 ans dans l’UE, l’autorisation d’un titulaire de l’autorité parentale peut être requise selon le pays.",
      changes: "14. Modifications",
      changes_p:
        "Nous pouvons mettre à jour la présente politique. Les changements significatifs seront annoncés dans l’app.",
      updated: "Dernière mise à jour :"
    },

    en: {
      title: "Privacy Policy – Boothorama 360",
      meta_desc: "Privacy policy for the Boothorama 360 app.",
      nav_privacy: "Privacy",
      nav_terms: "Terms of Use",
      nav_legal: "Legal Notice",
      nav_faq: "FAQ",
      badge_rgpd: "GDPR Compliant",
      h1: "Privacy Policy",
      intro:
        "This page explains which data is processed by <strong>Boothorama 360</strong>, why, and for how long. No ads, no trackers.",
      who: "1. Who is the controller?",
      who_p:
        'The data controller is <strong>Boothorama</strong> (see <a href="legal.html">legal notice</a>). DPO contact: <a href="mailto:contact@boothorama360.com">contact@boothorama360.com</a>.',
      account: "2. Accounts & authentication",
      account_l1:
        "<strong>Anonymous account</strong>: no personal identifier is collected.",
      account_l2:
        "<strong>Google Sign-In (optional)</strong>: via <strong>Firebase Authentication</strong> (Google) using OAuth to export videos to YOUR Google Drive. We only receive tokens required for the chosen features.",
      account_l3:
        "<strong>Sign in with Apple (optional)</strong>: via <strong>Firebase Authentication</strong> (Apple) to sign into the app (for example to sync your subscription entitlements across devices). We only receive the technical tokens required and, where you allow it, your e-mail address.",
      s1: "3. Data we process",
      s1_l1:
        "<strong>Local media</strong>: videos/images captured in the app — stored <em>on your device</em>. No upload to our servers.",
      s1_l2:
        "<strong>Authentication identifiers</strong> (Firebase Auth): user <code>uid</code>, provider (Google/Apple/Anonymous) and, where available, profile metadata from the provider (e-mail, name, photo) if you choose to share it.",
      s1_l2b:
        "<strong>Google Drive export (optional)</strong>: when enabled, the rendered video is uploaded to your Drive using Google tokens. The app keeps locally the file ID/share link (for the QR code).",
      s1_l3:
        "<strong>Permissions</strong>: camera & microphone (record), storage (save), network (upload).",
      s1_l4:
        "<strong>Subscription</strong>: status and purchase identifier from the App Store / Google Play. We do not process card data.",
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
        "<strong>Consent</strong>: camera/mic permissions; Google Drive export; share link/QR; Google / Apple sign-in.",
      s3_p3:
        "<strong>Legitimate interest</strong>: security, fraud prevention, technical improvement using anonymized diagnostics.",
      s4: "6. Retention",
      s4_l1: "<strong>On device</strong>: until you delete it in the app.",
      s4_l2: "<strong>On Google Drive</strong>: as long as you keep it in your Drive.",
      s4_l3: "<strong>OAuth tokens</strong>: only as long as needed; renewed/invalidated by Google.",
      s4_l4:
        "<strong>Purchase records</strong>: as required to manage the subscription and comply with legal obligations.",
      s5: "7. Recipients & third parties",
      s5_p:
        "We do not sell data. Authentication is provided by <strong>Firebase Authentication</strong> (a Google service — project linked to <strong>Google Cloud Console</strong>). Exports are made to <strong>Google Drive</strong>. Payments/subscriptions are handled by <strong>Apple App Store</strong> and/or <strong>Google Play</strong>. Boothorama does not host your media and does not process card data.",
      s5_firebase:
        "<strong>Firebase Authentication</strong> (Google) to handle Google, Apple and anonymous sign-ins.",
      s5_gdrive:
        "<strong>Google Drive</strong> only if you enable exports.",
      s5_stores:
        "<strong>Apple App Store / Google Play</strong> for subscription billing.",
      s5_cloud:
        "The project is hosted in <strong>Google Cloud Console</strong> linked to the app. We do not host your images/videos: media stays on your device, or in your Drive if you enable it.",
      transfer: "8. International transfers",
      transfer_p:
        "Google services (Firebase Auth, Google Drive) may involve processing outside the EU. Google applies appropriate safeguards (e.g., Standard Contractual Clauses). By enabling Google Sign-In and/or Drive export, you consent to such transfers.",
      qr: "9. Link/QR sharing",
      qr_p:
        "If Drive link sharing is enabled, anyone with the link/QR can access the video according to your Drive settings. You may disable sharing or delete the file at any time.",
      revoke: "9 bis. Sign-out & Google / Apple access revocation",
      revoke_p1:
        "<strong>In the app</strong>: you can sign out of your account (Google / Apple). For Google Drive exports, signing out of Google stops future exports. Videos already exported remain in your Drive until you delete them.",
      revoke_p2:
        "<strong>In your Google / Apple account</strong>: you can <em>revoke Boothorama 360 access</em>. For Google: Google Account → Security → Third-party access → remove. For Apple: iOS / macOS Settings → Apple ID → “Password & Security” → “Apps using your Apple ID” → stop using Apple ID. After revocation, the app can no longer use that sign-in method until you reconnect. Existing links/QRs stay valid unless you disable Drive sharing or delete the file.",
      delete: "10. Deletion",
      delete_l1:
        "<strong>From the app</strong>: “Delete” (local); if enabled, also deletes on Drive.",
      delete_l2:
        "<strong>From Google Drive</strong>: delete the file or revoke sharing.",
      rights: "11. Your rights",
      rights_l1:
        "Access, rectification, erasure, portability, restriction, objection.",
      rights_l2:
        "Withdraw consent (Drive/sharing/Google / Apple sign-in) at any time.",
      rights_l3:
        "Complain to your supervisory authority (e.g., CNIL in France).",
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
      nav_terms: "Condiciones de uso",
      nav_legal: "Aviso legal",
      nav_faq: "FAQ",
      badge_rgpd: "Cumple con RGPD",
      h1: "Política de privacidad",
      intro:
        "Aquí explicamos qué datos procesa <strong>Boothorama 360</strong>, por qué y durante cuánto tiempo. Sin anuncios ni rastreadores.",
      who: "1. Responsable del tratamiento",
      who_p:
        'El responsable es <strong>Boothorama</strong> (ver <a href="legal.html">aviso legal</a>). Contacto DPO: <a href="mailto:contact@boothorama360.com">contact@boothorama360.com</a>.',
      account: "2. Cuentas y autenticación",
      account_l1:
        "<strong>Cuenta anónima</strong>: no se recoge ningún identificador personal.",
      account_l2:
        "<strong>Inicio de sesión con Google (opcional)</strong>: mediante <strong>Firebase Authentication</strong> (Google) con OAuth para exportar vídeos a TU Google Drive. Solo recibimos los tokens necesarios para las funciones elegidas.",
      account_l3:
        "<strong>Inicio de sesión con Apple (opcional)</strong>: mediante <strong>Firebase Authentication</strong> (Apple) para iniciar sesión en la app (por ejemplo, para sincronizar tus derechos de suscripción entre dispositivos). Solo recibimos los tokens técnicos necesarios y, en su caso, tu correo electrónico si aceptas compartirlo.",
      s1: "3. Datos tratados",
      s1_l1:
        "<strong>Medios locales</strong>: vídeos/imágenes almacenados <em>en tu dispositivo</em>. No se suben a nuestros servidores.",
      s1_l2:
        "<strong>Identificadores de autenticación</strong> (Firebase Auth): <code>uid</code> de usuario, proveedor (Google/Apple/Anónimo) y, cuando proceda, metadatos del proveedor (correo, nombre, foto) si decides compartirlos.",
      s1_l2b:
        "<strong>Exportación a Google Drive (opcional)</strong>: si está activado, el vídeo montado se sube a tu Drive con tokens de Google. La app guarda localmente el ID/enlace del archivo (para el código QR).",
      s1_l3:
        "<strong>Permisos</strong>: cámara y micrófono (grabar), almacenamiento (guardar), red (subir).",
      s1_l4:
        "<strong>Suscripción</strong>: estado e identificador de compra del App Store / Google Play. Boothorama no trata datos de tarjetas.",
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
        "<strong>Consentimiento</strong>: permisos de cámara/micrófono; exportación a Drive; enlace/QR; inicio de sesión con Google / Apple.",
      s3_p3:
        "<strong>Interés legítimo</strong>: seguridad, prevención de fraude, mejora técnica con diagnósticos anonimizados.",
      s4: "6. Conservación",
      s4_l1: "<strong>En el dispositivo</strong>: hasta que lo elimines.",
      s4_l2: "<strong>En Google Drive</strong>: mientras lo conserves.",
      s4_l3: "<strong>Tokens OAuth</strong>: solo el tiempo necesario; Google los renueva/inhabilita.",
      s4_l4:
        "<strong>Registros de compra</strong>: según requisitos legales y de gestión.",
      s5: "7. Destinatarios y terceros",
      s5_p:
        "No vendemos datos. La autenticación la proporciona <strong>Firebase Authentication</strong> (servicio de Google — proyecto vinculado a <strong>Google Cloud Console</strong>). La exportación se realiza a <strong>Google Drive</strong>. Los pagos/suscripciones los gestionan <strong>Apple App Store</strong> y/o <strong>Google Play</strong>. Boothorama no aloja tus medios ni trata datos de tarjeta.",
      s5_firebase:
        "<strong>Firebase Authentication</strong> (Google) para gestionar inicios de sesión con Google, Apple y anónimos.",
      s5_gdrive:
        "<strong>Google Drive</strong> solo si habilitas la exportación.",
      s5_stores:
        "<strong>Apple App Store / Google Play</strong> para la facturación de suscripciones.",
      s5_cloud:
        "El proyecto está alojado en <strong>Google Cloud Console</strong> vinculado a la app. No alojamos tus imágenes/vídeos: permanecen en tu dispositivo o en tu Drive si lo habilitas.",
      transfer: "8. Transferencias internacionales",
      transfer_p:
        "Los servicios de Google (Firebase Auth, Google Drive) pueden implicar tratamiento fuera de la UE. Google aplica salvaguardias adecuadas (p. ej., Cláusulas Contractuales Tipo). Al habilitar el inicio de sesión con Google y/o la exportación a Drive, consientes estas transferencias.",
      qr: "9. Enlace/QR",
      qr_p:
        "Si habilitas la compartición de enlace de Drive, cualquiera con el enlace/QR puede acceder según tu configuración de Drive. Puedes desactivar la compartición o eliminar el archivo cuando quieras.",
      revoke: "9 bis. Revocación del acceso de Google / Apple",
      revoke_p1:
        "<strong>En la app</strong>: puedes cerrar sesión en tu cuenta (Google / Apple). Para la exportación a Google Drive, cerrar sesión en Google detiene futuras exportaciones. Los vídeos ya exportados permanecen en tu Drive hasta que los elimines.",
      revoke_p2:
        "<strong>En tus cuentas de Google / Apple</strong>: puedes <em>revocar el acceso</em> de Boothorama 360. Para Google: Cuenta de Google → Seguridad → Acceso de terceros → retirar. Para Apple: Ajustes de iOS / macOS → ID de Apple → «Contraseña y seguridad» → «Apps que usan tu ID de Apple» → dejar de usar el ID de Apple. Tras la revocación, la app no podrá usar ese método de inicio de sesión hasta que vuelvas a conectar. Los enlaces/códigos QR existentes siguen siendo válidos salvo que desactives la compartición o elimines el archivo.",
      delete: "10. Eliminación",
      delete_l1:
        "<strong>Desde la app</strong>: «Eliminar» (local) y, si está activado, también en Drive.",
      delete_l2:
        "<strong>Desde Google Drive</strong>: elimina el archivo o desactiva la compartición.",
      rights: "11. Tus derechos",
      rights_l1:
        "Acceso, rectificación, supresión, portabilidad, limitación, oposición.",
      rights_l2:
        "Retirar el consentimiento (Drive/compartición/inicio de sesión con Google / Apple) en cualquier momento.",
      rights_l3:
        "Reclamar ante la autoridad de control (p. ej., CNIL).",
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

  // Lang courante : définie par js/script.js (ou fallback __BOOTHR_LANG__)
  function currentLang() {
    const htmlLang = (document.documentElement.getAttribute('lang') || '').toLowerCase().slice(0, 2);
    if (DICS[htmlLang]) return htmlLang;
    const boot = (typeof window !== 'undefined' ? window.__BOOTHR_LANG__ : '') || '';
    const bootBase = String(boot).toLowerCase().slice(0, 2);
    return DICS[bootBase] ? bootBase : 'en';
  }

  let LANG = currentLang();

  function apply(root = document) {
    const dict = DICS[LANG] || DICS.en;

    // data-i18n → innerHTML (permet <strong>, <em>, <a> dans les traductions)
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

  // Écoute les changements globaux (provenant du header ou d'autres modules)
  document.addEventListener('boothr:lang-changed', () => {
    applyAndReveal();
  });

  // API minimale (pas de détection/persistance ici)
  window.BOOTHR_I18N = {
    apply,
    get lang() {
      return LANG;
    },
    setLang(l) {
      // setter simple (pas de stockage, pas d'URL)
      const base = String(l || '').toLowerCase().slice(0, 2);
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
