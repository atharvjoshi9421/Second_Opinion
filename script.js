// ============================================
// SECOND opnion – Multi-Page Website JS
// ============================================

// ===== NAVBAR & FOOTER INJECTION =====
const NAVBAR_HTML = `
<nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <img src="assest/images/logo-removebg-preview.png" alt="Second opnion Logo" class="nav-logo" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="toggler-icon"><i class="fas fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto align-items-lg-center">
        <li class="nav-item"><a class="nav-link" href="index.html" data-page="home">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html" data-page="about">About</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-page="services">Services</a>
          <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
            <li><a class="dropdown-item" href="services.html">Builder Services</a></li>
            <li><a class="dropdown-item" href="services.html">Customer Services</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="benefits.html" data-page="benefits">Benefits</a></li>
        <li class="nav-item"><a class="nav-link btn-enquiry ms-lg-3" href="enquiry.html" data-page="enquiry">Enquiry</a></li>
      </ul>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="main-footer">

  <div class="container">

    <div class="row g-5">

      <!-- LEFT -->
      <div class="col-lg-4">

        <img
          src="assest/images/logo-removebg-preview.png"
          alt="Second opnion"
          class="footer-logo"
        />

        <p class="mt-3">
          One Roof for Property Solutions.
          We bring trust, transparency,
          and expertise to every real estate journey.
        </p>

        <div class="social-row mt-3">

          <a
            href="https://wa.me/919421344075"
            target="_blank"
            class="soc-btn sm"
            aria-label="WhatsApp"
          >
            <i class="fab fa-whatsapp"></i>
          </a>

          <a
            href="#"
            class="soc-btn sm"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            href="#"
            class="soc-btn sm"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            href="#"
            class="soc-btn sm"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>

        </div>

      </div>

      <!-- QUICK LINKS -->
      <div class="col-sm-6 col-lg-2">

        <h6 class="footer-head">Quick Links</h6>

        <ul class="footer-links">

          <li><a href="index.html">Home</a></li>

          <li><a href="about.html">About Us</a></li>

          <li>
            <a href="services.html?tab=builder">
              Builder Services
            </a>
          </li>

          <li>
            <a href="services.html?tab=customer">
              Customer Services
            </a>
          </li>

          <li><a href="benefits.html">Benefits</a></li>

          <li><a href="enquiry.html">Enquiry</a></li>

        </ul>

      </div>

      <!-- SERVICES -->
      <div class="col-sm-6 col-lg-3">

        <h6 class="footer-head">Our Services</h6>

        <ul class="footer-links">

          <li>
            <a href="services.html?tab=customer">
              Property Search
            </a>
          </li>

          <li>
            <a href="services.html?tab=customer">
              Second opnion
            </a>
          </li>

          <li>
            <a href="services.html?tab=customer">
              Legal Due Diligence
            </a>
          </li>

          <li>
            <a href="services.html?tab=customer">
              Home Loan Assistance
            </a>
          </li>

          <li>
            <a href="services.html?tab=builder">
              Builder Marketing
            </a>
          </li>

          <li>
            <a href="services.html?tab=customer">
              Post-Possession Support
            </a>
          </li>

        </ul>

      </div>

      <!-- CONTACT -->
      <div class="col-lg-3">

        <h6 class="footer-head">Contact Us</h6>

        <ul class="footer-links contact-footer">

          <li>

            <i class="fas fa-map-marker-alt"></i>

            <span>
              Office No. 302,
              Solitaire Business Hub,
              Viman Nagar,
              Pune – 411014
            </span>

          </li>

          <li>

            <i class="fas fa-phone-alt"></i>

            <a href="tel:+919421344075">
              +91 94213 44075
            </a>

          </li>

          <li>

            <i class="fas fa-envelope"></i>

            <a href="mailto:info@secondopnion.in">
              info@secondopnion.in
            </a>

          </li>

        </ul>

        <!-- QR CODE -->

        <div class="qr-box">

          <div class="qr-left">

            <h6 class="footer-head">
              WhatsApp QR
            </h6>

            <p class="qr-text">
              Scan to chat on WhatsApp
            </p>

          </div>

          <div class="qr-right">

            <a
              href="https://wa.me/919421344075"
              target="_blank"
            >

              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://wa.me/919421344075"
                alt="WhatsApp QR Code"
                class="footer-qr"
              />

            </a>

          </div>

        </div>

      </div>

    </div>

    <!-- FOOTER BOTTOM -->

  <div class="footer-bottom">

  <p>
    &copy; 2026 Second opnion.
    All rights reserved. |

    Developed By
    <a
      href="https://mindaxiss.com/"
      target="_blank"
      class="developer-link"
    >
      MindAxis Innovation PVT LTD.
    </a>

  </p>

</div>

  </div>

</footer>

<!-- FLOATING BUTTONS -->
<a href="https://wa.me/919876543210" target="_blank" class="float-btn whatsapp-btn" title="Chat on WhatsApp" aria-label="Chat on WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>
<button class="float-btn scroll-top-btn" id="scrollTopBtn" title="Back to top" aria-label="Back to top">
  <i class="fas fa-chevron-up"></i>
</button>`;

// ===== INJECT NAVBAR & FOOTER =====
function injectLayout() {
  // Inject Navbar
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) navPlaceholder.innerHTML = NAVBAR_HTML;

  // Inject Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.innerHTML = FOOTER_HTML;

  // Set active nav link based on current page
  setActiveNavLink();

  // Bind scroll-to-top after injection
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', scrollToTop);
  }
}

// ===== ACTIVE NAV LINK =====
function setActiveNavLink() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const pageMap = {
    'index.html': 'home',
    '': 'home',
    'about.html': 'about',
    'services.html': 'services',
    'benefits.html': 'benefits',
    'enquiry.html': 'enquiry'
  };
  const currentPage = pageMap[currentFile] || 'home';

  document.querySelectorAll('.navbar-nav .nav-link[data-page]').forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active-link');
    }
  });
}

// ===== SCROLL TO TOP =====
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== SCROLL EVENTS =====
function initScrollEvents() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    const scrollBtn = document.getElementById('scrollTopBtn');

    if (nav) {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }
    if (scrollBtn) {
      scrollBtn.classList.toggle('show', window.scrollY > 400);
    }

    revealOnScroll();
  });
}

// ===== SCROLL REVEAL =====
function revealOnScroll() {
  document.querySelectorAll('.reveal:not(.revealed)').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('revealed');
    }
  });
}

function initReveal() {
  document.querySelectorAll('.service-card, .testi-card, .benefit-card, .value-card, .svc-feat-card, .team-card, .how-step').forEach(el => {
    el.classList.add('reveal');
  });
  revealOnScroll();
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  document.querySelectorAll('.stat-card h3').forEach(counter => {
    const text = counter.innerText;
    const hasPlus = text.includes('+');
    const hasPct = text.includes('%');
    const num = parseInt(text.replace(/\D/g, ''), 10);
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

function initCounterObserver() {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;

  let animated = false;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
        obs.disconnect();
      }
    });
  }, { threshold: 0.5 });

  obs.observe(statsSection);
}

// ===== SERVICE TAB SWITCH =====
function switchService(tab, clickedBtn) {
  const builderPanel = document.getElementById('svc-builder');
  const customerPanel = document.getElementById('svc-customer');
  if (!builderPanel || !customerPanel) return;

  if (tab === 'builder') {
    builderPanel.style.display = 'block';
    customerPanel.style.display = 'none';
  } else {
    builderPanel.style.display = 'none';
    customerPanel.style.display = 'block';
  }

  document.querySelectorAll('.stab').forEach(btn => btn.classList.remove('active'));

  if (clickedBtn) {
    clickedBtn.classList.add('active');
  } else {
    document.querySelectorAll('.stab').forEach(btn => {
      const text = btn.textContent.trim();
      if ((tab === 'builder' && text.includes('Builder')) ||
          (tab === 'customer' && text.includes('Customer'))) {
        btn.classList.add('active');
      }
    });
  }

  // Update URL param without reload
  const url = new URL(window.location);
  url.searchParams.set('tab', tab);
  window.history.replaceState({}, '', url);
}

function initServiceTabs() {
  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab') || 'builder';
  switchService(tab, null);
}

// // ===== ENQUIRY FORM =====
// function initEnquiryForm() {
//   const form = document.getElementById('enquiryForm');
//   if (!form) return;

//   form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const submitBtn = form.querySelector('button[type="submit"]');
//     submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Submitting...';
//     submitBtn.disabled = true;

//     setTimeout(() => {
//       form.style.display = 'none';
//       const success = document.getElementById('formSuccess');
//       if (success) {
//         success.style.display = 'block';
//         success.style.animation = 'fadeInUp 0.6s ease forwards';
//       }
//     }, 1500);
//   });
// }

// ===== ENQUIRY FORM =====
function initEnquiryForm() {

  const form = document.getElementById('enquiryForm');

  if (!form) return;

  form.addEventListener('submit', function (e) {

    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Submitting...';

    submitBtn.disabled = true;

    // ===== GET FORM VALUES =====
    const fullName = document.getElementById('fullName').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const budget = document.getElementById('budget').value;
    const propType = document.getElementById('propType').value;
    const service = document.getElementById('service').value;
    const contactTime = document.getElementById('contactTime').value;
    const message = document.getElementById('message').value;

    // ===== WHATSAPP MESSAGE =====
    const whatsappMessage = `
*New Property Enquiry*

👤 Full Name: ${fullName}
📞 Mobile: ${mobile}
📧 Email: ${email}
🏙️ City: ${city}

💰 Budget: ${budget}
🏠 Property Type: ${propType}
🛠️ Service Required: ${service}
⏰ Preferred Contact Time: ${contactTime}

📝 Message:
${message}
    `;

    // ===== YOUR WHATSAPP NUMBER =====
    const whatsappNumber = "919421344075";

    // ===== WHATSAPP URL =====
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {

      // OPEN WHATSAPP
      window.open(whatsappURL, '_blank');

      form.style.display = 'none';

      const success = document.getElementById('formSuccess');

      if (success) {

        success.style.display = 'block';

        success.style.animation = 'fadeInUp 0.6s ease forwards';

      }

    }, 1500);

  });

}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  initScrollEvents();
  initReveal();
  initCounterObserver();
  initServiceTabs();
  initEnquiryForm();
});

document.addEventListener("DOMContentLoaded", function() {
      const video = document.getElementById("heroVideo");
      const initialImg = document.getElementById("heroInitialImg");

      // When the video actually begins playing, fade out the image
      if (video && initialImg) {
        video.addEventListener("playing", function() {
          initialImg.style.opacity = "0";
          
          // Remove the image completely after the fade-out finishes
          setTimeout(() => {
            initialImg.style.display = "none";
          }, 800); // Matches the CSS transition time
        });
      }
    });