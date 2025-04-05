const bar = document.getElementById('bar');
const cut = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    navbar.classList.add('bar');
  });
}
if (cut) {
  cut.addEventListener('click', () => {
    navbar.classList.remove('bar');
      navbar.classList.add('closeSmooth');
  });
}
