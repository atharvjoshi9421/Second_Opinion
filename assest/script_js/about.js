'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Fade-in on Scroll
  const elements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // 2. Trigger number counter if this element contains stats
        if (entry.target.classList.contains('stat-item') || entry.target.querySelector('.stat-number')) {
          const numEl = entry.target.querySelector('.stat-number') || entry.target;
          if (numEl.classList.contains('stat-number') && !numEl.classList.contains('counted')) {
            startCounter(numEl);
            numEl.classList.add('counted'); // Prevent running twice
          }
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));

  // 3. Number Counter Animation Logic
  function startCounter(element) {
    const target = +element.getAttribute('data-target');
    const duration = 2000; // 2 seconds total animation
    const increment = target / (duration / 16); 
    
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.innerText = Math.ceil(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        element.innerText = target.toLocaleString();
      }
    };

    updateCounter();
  }
});