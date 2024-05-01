// SLIDESHOW FUNCTIONS

let slideIndex = 1;
function showSlideshow(mediaQuery) {
	if (mediaQuery.matches) {
		hideAllImages();
		showDivs(slideIndex);
	} else {
		showAllImages();
	}
}

const x = document.getElementsByClassName("process-block");
const dots = document.getElementsByClassName("slide-indicator");

let mediaQuery = window.matchMedia("(max-width: 800px)");
showSlideshow(mediaQuery);
mediaQuery.addListener(showSlideshow);

// Called when you click a dot on the slideshow
function currentDiv(n) {
	showDivs(slideIndex = n);
}

// Displays the slide in the slideshow passed in, hides all other slides
function showDivs(n) {
	let i;
	if (n > x.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = x.length }
	// Hides all slides
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" indicator-solid", "");
	}
	// Displays selected slide
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " indicator-solid";
}

function hideAllImages() {
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
}

function showAllImages() {
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "block";
	}
}

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