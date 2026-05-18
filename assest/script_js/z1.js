/* Second Opinion — interactions */
(() => {
  // Year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
  // Sticky nav
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add('is-stuck');
    else nav.classList.remove('is-stuck');
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  // Mobile drawer
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  const closeDrawer = () => {
    drawer.hidden = true;
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  };
  burger?.addEventListener('click', () => {
    const open = drawer.hidden;
    drawer.hidden = !open;
    burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  // Scroll-spy nav links
  const links = document.querySelectorAll('.nav__links a');
  const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href')));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => s && spy.observe(s));
  // Reveal-on-scroll
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-in');
        revealIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => revealIO.observe(el));
  // Animated SVG path-draw for process timeline
  const path = document.getElementById('processPath');
  if (path) {
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    const pathIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          path.style.transition = 'stroke-dashoffset 2.2s ease';
          path.style.strokeDashoffset = '0';
          pathIO.disconnect();
        }
      });
    }, { threshold: 0.25 });
    pathIO.observe(path);
  }
  // Testimonials pager (auto + manual)
  const quotes = document.querySelectorAll('.quote');
  const dots = document.querySelectorAll('.quotes__dots .dot');
  let qi = 0;
  let timer;
  const show = (i) => {
    quotes.forEach((q, idx) => q.classList.toggle('is-active', idx === i));
    dots.forEach((d, idx) => d.classList.toggle('is-active', idx === i));
    qi = i;
  };
  const cycle = () => { show((qi + 1) % quotes.length); };
  const start = () => { timer = setInterval(cycle, 6500); };
  const stop = () => clearInterval(timer);
  dots.forEach(d => d.addEventListener('click', () => {
    stop(); show(parseInt(d.dataset.i, 10)); start();
  }));
  if (quotes.length) start();
  // Subtle hero parallax
  const art = document.querySelector('.hero__art');
  if (art && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    document.addEventListener('scroll', () => {
      const y = Math.min(window.scrollY, 400);
      art.style.transform = `translateY(${y * 0.06}px)`;
    }, { passive: true });
  }
})();
