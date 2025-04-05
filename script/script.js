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

// handleClose function to trigger button click when section is clicked
const handleClose = (click) => {
  const clickThis = document.getElementById(click); // This is the section with id=hero
  const cutButton = document.getElementById('close'); // This is the button you want to click

  // Trigger the button's functionality when the section is clicked
  if (clickThis && cutButton) {
    clickThis.addEventListener('click', () => {
      cutButton.click(); // Simulate a click on the "close" button
    });
  }
};
