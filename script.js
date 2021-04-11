const navLinks = document.getElementById('nav-links');
const closeNav = document.getElementById('close-nav');
const hamburger = document.getElementById('hamburger');

hamburger.onclick = () => {
  if(navLinks.style.display === '') {
    navLinks.style.display = 'flex';
  };
};

closeNav.onclick = () => {
  if(navLinks.style.display === 'flex') {
    navLinks.style.display = '';
  };
};