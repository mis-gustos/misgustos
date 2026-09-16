
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', navLinks?.classList.contains('open') ? 'true' : 'false');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks?.classList.remove('open'));
});

const form = document.querySelector('#contact-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const status = document.querySelector('#form-status');
  if (!status) return;
  status.style.display = 'block';
  status.textContent = 'Tu consulta quedó preparada. Para recibirla realmente, conectá este formulario a tu correo, Formspree o a un backend.';
  form.reset();
});

document.querySelectorAll('[data-close-menu]').forEach(el => {
  el.addEventListener('click', () => navLinks?.classList.remove('open'));
});
