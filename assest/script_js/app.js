// ============================================
// SECOND OPINION – Website JS
// ============================================

// ===== PAGE NAVIGATION =====
function showPage(pageName, serviceTab) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
    p.style.opacity = '0';
  });

  // Show target page
  const target = document.getElementById('page-' + pageName);
  if (target) {
    target.classList.add('active');
    // Fade in
    requestAnimationFrame(() => {
      target.style.transition = 'opacity 0.4s ease';
      target.style.opacity = '1';
    });
  }

  // Handle service tab if given
  if (pageName === 'services' && serviceTab) {
    setTimeout(() => switchService(serviceTab, document.querySelector('.stab')), 100);
  }

  // Update navbar active state
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.classList.remove('active-link');
  });

  // Close mobile menu
  const navCollapse = document.getElementById('navbarNav');
  if (navCollapse.classList.contains('show')) {
    const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
    if (bsCollapse) bsCollapse.hide();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== SERVICE TAB SWITCH =====
function switchService(tab, clickedBtn) {
  // Toggle panels
  const builderPanel = document.getElementById('svc-builder');
  const customerPanel = document.getElementById('svc-customer');

  if (tab === 'builder') {
    builderPanel.style.display = 'block';
    customerPanel.style.display = 'none';
  } else {
    builderPanel.style.display = 'none';
    customerPanel.style.display = 'block';
  }

  // Toggle button styles
  document.querySelectorAll('.stab').forEach(btn => btn.classList.remove('active'));
  if (clickedBtn) {
    clickedBtn.classList.add('active');
  } else {
    // Find the right button
    document.querySelectorAll('.stab').forEach(btn => {
      if ((tab === 'builder' && btn.textContent.includes('Builder')) ||
          (tab === 'customer' && btn.textContent.includes('Customer'))) {
        btn.classList.add('active');
      }
    });
  }
}

// ===== SCROLL TO TOP =====
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== SCROLL EVENTS =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  const scrollBtn = document.getElementById('scrollTopBtn');

  // Navbar scroll effect
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Scroll to top button visibility
  if (window.scrollY > 400) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }

  // Scroll reveal
  revealOnScroll();
});

// ===== SCROLL REVEAL =====
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => {
    const windowH = window.innerHeight;
    const elTop = el.getBoundingClientRect().top;
    if (elTop < windowH - 80) {
      el.classList.add('revealed');
    }
  });
}

// ===== FORM SUBMIT =====
function submitForm(e) {
  e.preventDefault();
  const form = document.getElementById('enquiryForm');
  const success = document.getElementById('formSuccess');

  // Simulate API call
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Submitting...';
  submitBtn.disabled = true;

  setTimeout(() => {
    form.style.display = 'none';
    success.style.display = 'block';
    success.style.animation = 'fadeInUp 0.6s ease forwards';
  }, 1500);
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('.stat-card h3');
  counters.forEach(counter => {
    const text = counter.innerText;
    const hasPlus = text.includes('+');
    const hasPct = text.includes('%');
    const num = parseInt(text.replace(/\D/g, ''));
    let start = 0;
    const duration = 1800;
    const step = num / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        start = num;
        clearInterval(timer);
      }
      counter.innerText = Math.floor(start) + (hasPlus ? '+' : '') + (hasPct ? '%' : '');
    }, 16);
  });
}

// ===== INTERSECTION OBSERVER for stats =====
let counterAnimated = false;
const statsObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !counterAnimated) {
      counterAnimated = true;
      animateCounters();
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) statsObs.observe(statsSection);

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Show home page by default
  showPage('home');
  revealOnScroll();

  // Add reveal class to key sections
  document.querySelectorAll('.service-card, .testi-card, .benefit-card, .value-card, .svc-feat-card').forEach(el => {
    el.classList.add('reveal');
  });
});

// ===== PREVENT DEFAULT on # links =====
document.querySelectorAll('a[href="#"]').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});