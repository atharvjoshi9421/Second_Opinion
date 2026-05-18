/* =========================================================
   Second Opnion — interactions
   ========================================================= */
/* ---------- Sticky nav state ---------- */
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
/* ---------- Mobile drawer ---------- */
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
burger.addEventListener('click', () => {
  const open = drawer.classList.toggle('is-open');
  burger.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', open);
  drawer.setAttribute('aria-hidden', !open);
});
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  drawer.classList.remove('is-open');
  burger.classList.remove('is-open');
}));
/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
/* ---------- Stat count-up ---------- */
const countUp = (el) => {
  const target = parseInt(el.dataset.count, 10);
  const dur = 1600;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
const statIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      countUp(e.target.querySelector('strong'));
      statIO.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat').forEach(s => statIO.observe(s));
/* ---------- Testimonials ---------- */
const slides = document.querySelectorAll('.tm__slide');
const dots = document.querySelectorAll('.tm__dots button');
let idx = 0;
const goTo = (i) => {
  idx = (i + slides.length) % slides.length;
  slides.forEach((s, n) => s.classList.toggle('is-active', n === idx));
  dots.forEach((d, n) => d.classList.toggle('is-active', n === idx));
};
dots.forEach((d, n) => d.addEventListener('click', () => goTo(n)));
let auto = setInterval(() => goTo(idx + 1), 5500);
document.querySelector('.tm__stage').addEventListener('mouseenter', () => clearInterval(auto));
document.querySelector('.tm__stage').addEventListener('mouseleave', () => auto = setInterval(() => goTo(idx + 1), 5500));
/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();