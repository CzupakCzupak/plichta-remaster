const hamburgerJs = document.querySelectorAll(".hamburger-js"),
	nav = document.querySelector(".header__nav-js"),
	shadow = document.querySelector(".header__shadow-js"),
	header = document.querySelector(".header-js"),
	hamburgerToggle = () => {
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

if (document.querySelectorAll("a[data-target]")) {
	const scrollingLinks = document.querySelectorAll("a[data-target]");

	scrollingLinks.forEach(function (link) {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			const clickedLink = e.target.closest("a");

			const sectionEl = document.querySelector(`${clickedLink.dataset.target}`);
			const topsy = sectionEl.getBoundingClientRect().top;
			const scrollval = topsy - header.offsetHeight;
			window.scroll(0, sectionEl);

			if (nav.classList.contains("active")) {
				nav.classList.remove("active");
				shadow.classList.remove("active");
			}
		});
	});
}
