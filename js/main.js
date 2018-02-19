let navOpen = false;

function toggleNavigation() {
  const navContainer = document.querySelector('.nav__container');
  if (navOpen) {
    navContainer.classList.remove('nav__container--open');
    navContainer.classList.add('nav__container--closed');
  } else {
    navContainer.classList.remove('nav__container--closed');
    navContainer.classList.add('nav__container--open');
  }
  return (navOpen = !navOpen);
}

function startCarosel() {
  let activeImage = 0;
  const images = document.querySelectorAll('.carosel__container');

  setInterval(() => {
    images[activeImage].classList.remove('carosel__container--active');

    if (images.length === activeImage + 1) {
      activeImage = 0;
    } else {
      activeImage++;
    }
    images[activeImage].classList.add('carosel__container--active');
  }, 10000);
  ß;
}

window.addEventListener('DOMContentLoaded', () => {
  const navButton = document.querySelector('.nav__button');

  navButton.addEventListener('click', toggleNavigation);
});

window.addEventListener('load', startCarosel);
