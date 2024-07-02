// Variables

const hamburgerJs = document.querySelectorAll(".jsHamburger"),
	nav = document.querySelector(".jsHeaderNav"),
	header = document.querySelector(".jsHeader"),
	shadow = document.querySelector(".jsHeaderShadow"),
	showPhone = document.querySelectorAll(".jsShowPhone"),
	footerUp = document.querySelector(".jsFooterUp");
// Hamburger functionality

const hamburgerToggle = () => {
	if (header) {
		nav.classList.toggle("active");
		shadow.classList.toggle("active");
	}
};

if (showPhone) {
	showPhone.forEach((item) => {
		item.addEventListener("click", (e) => {
			const clickedBtn = e.target.closest(".jsShowPhone");
			const phoneText = clickedBtn.querySelector(".jsTextPhone");
			if (phoneText.textContent == "601075872") {
				phoneText.textContent = "Pokaż telefon";
			} else {
				phoneText.textContent = "601075872";
			}
		});
	});
}

if (footerUp) {
	if (window.innerWidth <= 1660) {
		footerUp.style.top = "-24px";
	}
}

// Header shadow when scrolling

window.addEventListener("scroll", () => {
	if (header) {
		if (window.scrollY == 0) {
			header.classList.remove("header__scroll");
		} else {
			header.classList.add("header__scroll");
		}
	}
});

// Remove hamburger on desktop

window.addEventListener("resize", () => {
	if (window.innerWidth >= 1000) {
		if (header) {
			nav.classList.remove("active");
			shadow.classList.remove("active");
		}
	}

	if (footerUp) {
		if (window.innerWidth <= 1660) {
			footerUp.style.top = "-24px";
		} else {
			footerUp.style.top = "278px";
		}
	}
});

// Links Scroll

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
			console.log(nav.classList.contains("active"));
		})
	);
}

// Functions initialization

hamburgerJs.forEach((item) => {
	item.addEventListener("click", hamburgerToggle);
});
