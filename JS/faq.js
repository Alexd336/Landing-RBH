// script.js
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.faq__item');

  // 1) Scroll-triggered fade-in
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(item => io.observe(item));

  // 2) Click to toggle answer
  document.querySelectorAll('.faq__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      item.classList.toggle('open');
    });
  });
});
