const bar = document.getElementById('bar');
const cut = document.getElementById('close');
const navbar = document.getElementById('navbar');

// Event listener for bar button
if (bar) {
  bar.addEventListener('click', () => {
    navbar.classList.add('bar');
  });
}

// Event listener for cut button
if (cut) {
  cut.addEventListener('click', () => {
    navbar.classList.remove('bar');
    navbar.classList.add('closeSmooth');
  });
}