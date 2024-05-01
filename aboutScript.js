// NAVBAR FUNCTIONALITY

const navWrapper = document.getElementsByClassName("nav-link-wrapper");
const navToggle = document.getElementsByClassName("nav-toggle");
const navMenu = document.getElementsByClassName("nav-menu");

let navVisible = false;

navToggle[0].addEventListener("click", () => {
	toggleNav()
});

navMenu[0].addEventListener("click", () => {
	toggleNav()
});

function toggleNav() {
	if (navVisible) {
		navMenu[0].classList.remove("nav-active");
		navWrapper[0].classList.remove("nav-active");
		navVisible = false;
	} else {
		navMenu[0].classList.add("nav-active");
		navWrapper[0].classList.add("nav-active");
		navVisible = true;
	}
}