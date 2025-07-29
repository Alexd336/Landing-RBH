document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".gallery");
  const items = Array.from(container.querySelectorAll(".gallery__item"));

  // Mezclar aleatoriamente los elementos
  const shuffled = items.sort(() => 0.5 - Math.random());

  // Vaciar contenedor y volver a agregar en orden aleatorio
  container.innerHTML = "";
  shuffled.forEach(item => container.appendChild(item));

  // Animación stagger
  shuffled.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = 1;
    }, index * 120); // más rápido, más "fluido"
  });
});
