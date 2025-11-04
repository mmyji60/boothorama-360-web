// js/carousel.js
(() => {
  const root = document.getElementById('hero-carousel');
  if (!root) return;

  const viewport = root.querySelector('.carousel__viewport');
  const slides = Array.from(root.querySelectorAll('.carousel__slide'));
  const prevBtn = root.querySelector('.carousel__btn.prev');
  const nextBtn = root.querySelector('.carousel__btn.next');
  const dots = Array.from(root.querySelectorAll('.carousel__dots button'));

  let i = 0;
  let auto = null;
  const delay = 5000;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const setActive = (n) => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('is-active', k === i));
    dots.forEach((d, k) => {
      d.classList.toggle('is-active', k === i);
      d.setAttribute('aria-selected', String(k === i));
    });
    // Met à jour les labels 1/3, 2/3…
    slides[i].setAttribute('aria-label', `${i + 1} sur ${slides.length}`);
  };

  const next = () => setActive(i + 1);
  const prev = () => setActive(i - 1);

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
  dots.forEach((d) => d.addEventListener('click', () => setActive(Number(d.dataset.index))));

  // Clavier
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { next(); }
    if (e.key === 'ArrowLeft') { prev(); }
  });

  // Auto-play (pause au focus/hover)
  const start = () => {
    if (prefersReduced) return;
    clearInterval(auto);
    auto = setInterval(next, delay);
  };
  const stop = () => clearInterval(auto);

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);

  // Swipe / drag
  let startX = null;
  viewport.addEventListener('pointerdown', (e) => { startX = e.clientX; viewport.setPointerCapture(e.pointerId); });
  viewport.addEventListener('pointerup', (e) => {
    if (startX == null) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    startX = null;
  });

  // Initialisation
  setActive(0);
  start();
})();

