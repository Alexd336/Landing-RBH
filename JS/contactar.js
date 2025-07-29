document.addEventListener('DOMContentLoaded', () => {
  const form    = document.getElementById('contactForm');
  const nameEl  = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const msgEl   = document.getElementById('message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    limpiarFeedback();
    let valido = true;

    if (nameEl.value.trim() === '') {
      mostrarError(nameEl, '❗ Dime tu nombre, porfa.');
      valido = false;
    }
    if (!esEmailValido(emailEl.value.trim())) {
      mostrarError(emailEl, '❗ Este correo no parece real.');
      valido = false;
    }
    if (msgEl.value.trim().length < 10) {
      mostrarError(msgEl, '❗ Al menos 10 caracteres en tu mensaje.');
      valido = false;
    }

    if (valido) {
      mostrarExito('🎉 ¡Listo! Tu mensaje voló como un verso al buzón.');
      form.reset();
    }
  });

  function mostrarError(el, msg) {
    const error = document.createElement('small');
    error.className = 'error-message';
    error.innerText = msg;
    el.parentNode.insertBefore(error, el.nextSibling);
    el.classList.add('input-error');
  }

  function limpiarFeedback() {
    document.querySelectorAll('.error-message').forEach(n => n.remove());
    document.querySelectorAll('.input-error').forEach(i => i.classList.remove('input-error'));
    const exito = document.querySelector('.success-message');
    if (exito) exito.remove();
  }

  function mostrarExito(msg) {
    const div = document.createElement('div');
    div.className = 'success-message';
    div.innerText = msg;
    form.appendChild(div);
  }

  function esEmailValido(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
