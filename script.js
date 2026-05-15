/* =============================================
   Second Opinion CRM – script.js
   Vanilla JavaScript – No frameworks
   ============================================= */

'use strict';

/* ============================================
   UTILITY: Query selectors
   ============================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ============================================
   1. NAVBAR – Sticky scroll shadow + hamburger
   ============================================ */
(function initNavbar() {
  const navbar    = $('#navbar');
  const hamburger = $('#hamburger');
  const navLinks  = $('#navLinks');
  const navCta    = $('.nav-cta');

  /* Scroll shadow */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 12) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  /* Hamburger toggle */
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  /* Close menu when a link is clicked */
  $$('a', navLinks).forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  /* Close menu on outside click */
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });

  /* Active link highlight on scroll */
  const sections = $$('section[id]');
  const navAnchors = $$('.nav-links a');

  const activateLink = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navAnchors.forEach(a => {
      a.style.color = '';
      if (a.getAttribute('href') === `#${current}`) {
        a.style.color = 'var(--navy)';
        a.style.fontWeight = '600';
      } else {
        a.style.fontWeight = '';
      }
    });
  };

  window.addEventListener('scroll', activateLink, { passive: true });
})();

/* ============================================
   2. FADE-IN ON SCROLL – IntersectionObserver
   ============================================ */
(function initFadeIn() {
  const elements = $$('.fade-in');

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
})();

/* ============================================
   3. SMOOTH SCROLLING for anchor links
   ============================================ */
(function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute('href').slice(1);
    const target   = document.getElementById(targetId);
    if (!target) return;

    e.preventDefault();

    const navHeight = $('#navbar')?.offsetHeight || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;

    window.scrollTo({ top, behavior: 'smooth' });
  });
})();

/* ============================================
   4. SCROLL TO TOP BUTTON
   ============================================ */
(function initScrollTop() {
  const btn = $('#scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ============================================
   5. SERVICE CARD – stagger entrance
   ============================================ */
(function initCardStagger() {
  const cards = $$('.service-card, .why-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Extra stagger based on DOM order
        const idx = cards.indexOf(entry.target);
        entry.target.style.transitionDelay = `${idx * 0.07}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10 });

  cards.forEach(c => {
    c.classList.add('fade-in'); // ensure fade class
    observer.observe(c);
  });
})();

/* ============================================
   6. PROCESS STEPS – Animate on scroll
   ============================================ */
(function initProcessAnim() {
  const steps = $$('.process-step');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const allSteps = $$('.process-step');
        allSteps.forEach((step, i) => {
          setTimeout(() => {
            step.style.opacity = '1';
            step.style.transform = 'translateY(0)';
          }, i * 120);
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });

  steps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(20px)';
    step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  if (steps.length) observer.observe(steps[0]);
})();

/* ============================================
   7. COUNTER ANIMATION – for stat badges
   ============================================ */
(function initCounters() {
  const targets = $$('.badge-num, .about-experience-badge span');

  targets.forEach(el => {
    const match = el.textContent.match(/^(\d+)/);
    if (!match) return;

    const end    = parseInt(match[1], 10);
    const suffix = el.textContent.replace(/^\d+/, '');
    let   start  = 0;
    const dur    = 1800;
    const step   = Math.ceil(end / (dur / 16));

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        obs.unobserve(entry.target);

        const tick = () => {
          start = Math.min(start + step, end);
          el.textContent = start + suffix;
          if (start < end) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });

    obs.observe(el);
  });
})();

/* ============================================
   8. HERO PARALLAX (subtle depth effect)
   ============================================ */
(function initHeroParallax() {
  const hero    = $('#hero');
  const content = $('.hero-content');

  if (!hero || !content) return;

  // Only on non-mobile
  if (window.innerWidth <= 768) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const rate     = scrolled * 0.22;
    content.style.transform = `translateY(${rate}px)`;
    content.style.opacity   = Math.max(0, 1 - scrolled / 500);
  }, { passive: true });
})();

/* ============================================
   9. BUTTON RIPPLE EFFECT
   ============================================ */
(function initRipple() {
  $$('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect   = this.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const ripple = document.createElement('span');

      ripple.style.cssText = `
        position:absolute;
        border-radius:50%;
        background:rgba(255,255,255,0.35);
        width:6px;height:6px;
        left:${x}px;top:${y}px;
        transform:scale(0);
        animation:rippleAnim 0.55s ease-out;
        pointer-events:none;
      `;

      // Inject ripple keyframes once
      if (!document.getElementById('ripple-style')) {
        const s = document.createElement('style');
        s.id = 'ripple-style';
        s.textContent = `@keyframes rippleAnim{to{transform:scale(60);opacity:0;}}`;
        document.head.appendChild(s);
      }

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
})();

/* ============================================
   10. TESTIMONIAL TYPING EFFECT (subtle)
   ============================================ */
(function initTestimonial() {
  const box = $('.testimonial-box');
  if (!box) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        box.style.animation = 'none';
        box.style.transform = 'translateY(0)';
        box.style.opacity   = '1';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  box.style.opacity   = '0';
  box.style.transform = 'translateY(24px)';
  box.style.transition= 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s';

  observer.observe(box);
})();

/* ============================================
   11. FOOTER links hover glow
   ============================================ */
(function initFooterEffects() {
  $$('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 14px rgba(245,166,35,0.4)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
  });
})();

/* ============================================
   12. PAGE LOAD – Entry animation trigger
   ============================================ */
window.addEventListener('DOMContentLoaded', () => {
  // Trigger hero animations immediately
  $$('#hero .fade-in').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 180);
  });
});