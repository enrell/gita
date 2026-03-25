// Scroll Animations - Intersection Observer based
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -50px 0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;

      // Add visible class
      element.classList.add('is-visible');

      // Stagger children if container
      if (element.dataset.stagger) {
        const children = element.querySelectorAll('[data-stagger-item]');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('is-visible');
          }, index * parseInt(element.dataset.stagger));
        });
      }

      // Unobserve after animation
      if (!element.dataset.repeat) {
        observer.unobserve(element);
      }
    } else if (entry.target.dataset.repeat) {
      entry.target.classList.remove('is-visible');
    }
  });
}, observerOptions);

// Initialize animations
function initAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  animatedElements.forEach(el => observer.observe(el));
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
