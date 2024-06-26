const hamburgerJs = document.querySelectorAll(".hamburger-js"),
	nav = document.querySelector(".header__nav-js"),
	shadow = document.querySelector(".header__shadow-js"),
	header = document.querySelector(".header-js");

const hamburgerToggle = () => {
	nav.classList.toggle("active");
	shadow.classList.toggle("active");
};

hamburgerJs.forEach((item) => {
	item.addEventListener("click", hamburgerToggle);
});

window.addEventListener("scroll", () => {
	if (window.scrollY == 0) {
		header.classList.remove("header__scroll");
	} else {
		header.classList.add("header__scroll");
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth >= 1000) {
		nav.classList.remove("active");
		shadow.classList.remove("active");
	}
});
