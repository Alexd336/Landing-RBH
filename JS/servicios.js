document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.product-scroll__item');
  const wrapper = document.querySelector('.product-scroll__wrapper');

  function updateActive() {
    const vh = window.innerHeight;
    const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;
    const scrollY = window.scrollY;
    const relativeY = scrollY - wrapperTop;

    let index = Math.floor((relativeY + vh/2) / vh);
    index = Math.max(0, Math.min(items.length - 1, index));

    items.forEach((el, i) => el.classList.toggle('active', i === index));
  }

  window.addEventListener('scroll', updateActive);
  updateActive();
});
