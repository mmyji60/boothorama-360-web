document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (!btn || !nav) return;

  function setOpen(isOpen) {
    btn.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
    document.documentElement.classList.toggle("no-scroll", isOpen);
    document.body.classList.toggle("no-scroll", isOpen);
  }

  // Toggle via clic
  btn.addEventListener("click", function () {
    var next = btn.getAttribute("aria-expanded") !== "true";
    setOpen(next);
  });

  // Ferme en cliquant un lien du menu
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  // Ferme sur Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  // Ferme en passant en desktop (>=768px)
  var mq = window.matchMedia("(min-width: 768px)");
  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", function (e) { if (e.matches) setOpen(false); });
  } else if (typeof mq.addListener === "function") {
    mq.addListener(function (e) { if (e.matches) setOpen(false); });
  }

  // (Debug optionnel) vois les clics dans la console
  // console.log("nav ready; btn=", !!btn, "nav=", !!nav);
});
