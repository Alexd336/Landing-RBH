
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  const gridIcon = nav.querySelector('.nav__grid-icon');

  gridIcon.addEventListener('click', e => {
    e.stopPropagation();
    nav.classList.toggle('expanded');
  });

  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) {
      nav.classList.remove('expanded');
    }
  });
});



// Animación de aparición con Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const onEntry = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(onEntry, observerOptions);
  cards.forEach(card => observer.observe(card));
});



/**
 * Slider de Testimonios
 * Lógica para alternar entre slides al hacer clic en miniaturas
 */
document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.testimonials__nav-item');
  const slides = document.querySelectorAll('.testimonials__slide');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const index = item.getAttribute('data-index');

      // Limpiar estado activo
      document.querySelector('.testimonials__nav-item--active').classList.remove('testimonials__nav-item--active');
      document.querySelector('.testimonials__slide--active').classList.remove('testimonials__slide--active');

      // Activar nuevo slide y miniatura
      item.classList.add('testimonials__nav-item--active');
      document.querySelector(`.testimonials__slide[data-index="${index}"]`).classList.add('testimonials__slide--active');
    });
  });
});



// animaciones.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.js-animate').forEach(el => {
  observer.observe(el);
});



// Al hacer clic, desplazamiento suave al destino
document.querySelectorAll('header a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Cierra dropdown si está abierto (opcional)
    const dropdown = document.querySelector('.nav__dropdown');
    if (dropdown && dropdown.classList.contains('open')) {
      dropdown.classList.remove('open');
    }
  });
});
