const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    headerEl.classList.add('header-scrolled');
  } else {
    headerEl.classList.remove('header-scrolled');
  }
});

const slider = document.querySelector('#slider');
let tx = 0;

const slideForward = () => {
  if (tx > -50) {
    tx -= 25;
  }
  slider.style.transform = `translateX(${tx}%)`;
}

const slideBackward = () => {
  if (tx < 0) {
    tx += 25;
  }
  slider.style.transform = `translateX(${tx}%)`;
}