<script>
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

  btn.addEventListener("click", function () {
    setOpen(btn.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") setOpen(false);
  });

  var mq = window.matchMedia("(min-width: 768px)");
  (mq.addEventListener || mq.addListener).call(mq, "change", function (e) {
    if (e.matches) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
});
</script>
