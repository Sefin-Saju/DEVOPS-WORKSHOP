// BRUTAL KINETIC TYPOGRAPHY: Animated text reveals and interactions
document.addEventListener('DOMContentLoaded', function () {
  const yearEl = document.getElementById('year');
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  // Set current year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Kinetic typography: Stagger word animations
  const words = document.querySelectorAll('.word');
  words.forEach((word, index) => {
    word.style.animationDelay = `${index * 0.15}s`;
  });

  // Grid items: Stagger reveal animations
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });

  // Scroll reveal for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections for scroll animations
  document.querySelectorAll('.brutal-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
  });

  // Form validation and submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      formMessage.textContent = '';
      formMessage.style.color = '#ffffff';

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name) {
        formMessage.textContent = '✗ NAME REQUIRED';
        formMessage.style.color = '#ff0000';
        form.name.focus();
        return;
      }

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formMessage.textContent = '✗ VALID EMAIL REQUIRED';
        formMessage.style.color = '#ff0000';
        form.email.focus();
        return;
      }

      if (!message) {
        formMessage.textContent = '✗ MESSAGE REQUIRED';
        formMessage.style.color = '#ff0000';
        form.message.focus();
        return;
      }

      // Success state
      formMessage.textContent = '✓ MESSAGE RECEIVED';
      formMessage.style.color = '#00ff00';
      form.reset();
      
      setTimeout(() => {
        formMessage.textContent = '';
      }, 3000);
    });
  }

  // Button hover effects
  const buttons = document.querySelectorAll('.brutal-btn, .brutal-btn-submit');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
    });
  });
});
