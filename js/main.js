let navOpen = false;

function toggleNavigation() {
  console.log(this);
  const nav = document.querySelector('nav');
  const backgroundOverlay = document.querySelector('.nav__background-overlay');
  if (navOpen) {
    nav.classList.remove('nav--open');
    backgroundOverlay.classList.remove('nav__background-overlay--active');
  } else {
    nav.classList.add('nav--open');
    backgroundOverlay.classList.add('nav__background-overlay--active');
  }
  return (navOpen = !navOpen);
}

function startcarousel() {
  let activeImage = 0;
  const images = document.querySelectorAll('.carousel__container');
  if (images.length < 2) return;
  setInterval(() => {
    images[activeImage].classList.remove('carousel__container--active');

    if (images.length === activeImage + 1) {
      activeImage = 0;
    } else {
      activeImage++;
    }
    images[activeImage].classList.add('carousel__container--active');
  }, 10000);
}

window.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('.nav__button');
  const backgroundOverlay = document.querySelector('.nav__background-overlay');

  navButton.addEventListener('click', toggleNavigation);
  backgroundOverlay.addEventListener('click', toggleNavigation);
});

window.addEventListener('load', startcarousel);
