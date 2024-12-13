const header = document.getElementById('capsalera');

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    header.classList.add('capsaleraTransparent');
    header.classList.remove('capsaleraColor');
  } else {
    
    header.classList.remove('capsaleraTransparent');
    header.classList.add('capsaleraColor');
  }
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); 
}