const hamburgerJs = document.querySelectorAll(".jsHamburger"),
	nav = document.querySelector(".jsHeaderNav"),
	header = document.querySelector(".jsHeader"),
	shadow = document.querySelector(".jsHeaderShadow");

const hamburgerToggle = () => {
	if (header) {
		nav.classList.toggle("active");
		shadow.classList.toggle("active");
	}
};

window.addEventListener("scroll", () => {
	if (header) {
		if (window.scrollY == 0) {
			header.classList.remove("header__scroll");
		} else {
			header.classList.add("header__scroll");
		}
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth >= 1000) {
		if (header) {
			nav.classList.remove("active");
			shadow.classList.remove("active");
		}
	}
});

const scrollingLinks = document.querySelectorAll(".jsScroll");
if (scrollingLinks) {
	scrollingLinks.forEach((item) =>
		item.addEventListener("click", (e) => {
			const clickedLink = e.target.closest(".jsScroll"),
				targetedSection = clickedLink.dataset.target;
			if (clickedLink.dataset.target != "") {
				if (targetedSection == "top") {
					window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
				} else {
					e.preventDefault();
					const sectionEl = document.querySelector(`#${targetedSection}`);
					if (header) {
						window.scroll({
							top: sectionEl.offsetTop - header.offsetHeight,
							left: 0,
							behavior: "smooth",
						});

						if (nav.classList.contains("active")) {
							nav.classList.remove("active");
							shadow.classList.remove("active");
						}
					} else {
						window.scroll({
							top: sectionEl.offsetTop,
							left: 0,
							behavior: "smooth",
						});
					}
				}
			}
		})
	);
}

hamburgerJs.forEach((item) => {
	item.addEventListener("click", hamburgerToggle);
});
