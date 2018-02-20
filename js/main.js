let navOpen = false;

function toggleNavigation() {
	const navContainer = document.querySelector(".nav__container");
	if (navOpen) {
		navContainer.classList.remove("nav__container--open");
		navContainer.classList.add("nav__container--closed");
	} else {
		navContainer.classList.remove("nav__container--closed");
		navContainer.classList.add("nav__container--open");
	}
	return (navOpen = !navOpen);
}

function startcarousel() {
	let activeImage = 0;
	const images = document.querySelectorAll(".carousel__container");
  if(images.length < 2) return
	setInterval(() => {
		images[activeImage].classList.remove("carousel__container--active");

		if (images.length === activeImage + 1) {
			activeImage = 0;
		} else {
			activeImage++;
		}
		images[activeImage].classList.add("carousel__container--active");
	}, 10000);
	;
}

window.addEventListener("DOMContentLoaded", () => {
	const navButton = document.querySelector(".nav__button");

	navButton.addEventListener("click", toggleNavigation);
});

window.addEventListener("load", startcarousel);
