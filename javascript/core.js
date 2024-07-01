// Variables

const hamburgerJs = document.querySelectorAll(".jsHamburger"),
	nav = document.querySelector(".jsHeaderNav"),
	header = document.querySelector(".jsHeader"),
	shadow = document.querySelector(".jsHeaderShadow"),
	showPhone = document.querySelectorAll(".jsShowPhone");
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
			clickedBtn.innerHTML =
				`								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="btn__icon-black"
								>
									<g id="icons/24x24/phone">
										<path
											id="Vector"
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M18.9707 18.9672C11.4837 18.4749 5.49581 12.487 5.00347 5.00001L8.9707 5.00001C8.97168 5.00001 8.97056 4.99995 8.9707 5.00001C8.97173 5.00044 8.97757 5.003 8.98565 5.01083C9.00361 5.02826 9.02102 5.059 9.0248 5.09707C9.10345 5.89047 9.26646 6.6595 9.50482 7.39481L7.93267 8.96698L8.23816 9.60534C9.5192 12.2822 11.6885 14.4515 14.3654 15.7326L15.0037 16.038L16.5759 14.4659C17.3112 14.7042 18.0802 14.8673 18.8736 14.9459C18.9117 14.9497 18.9425 14.9671 18.9599 14.9851C18.9677 14.9931 18.9703 14.9987 18.9707 14.9997C18.9708 14.9998 18.9707 14.9987 18.9707 14.9997L18.9707 18.9672ZM18.909 20.9674C20.0755 21.0393 20.9707 20.0881 20.9707 19L20.9707 15C20.9707 13.8731 20.0696 13.0547 19.0709 12.9557C18.2352 12.8728 17.4337 12.6758 16.6819 12.3805L16.0723 12.141L14.6071 13.6062C12.8311 12.6123 11.3584 11.1396 10.3645 9.36358L11.8297 7.89839L11.5902 7.2888C11.2949 6.53697 11.0979 5.73554 11.015 4.89978C10.9161 3.90114 10.0976 3.00001 8.9707 3.00001L4.9707 3.00001C3.88265 3.00001 2.9314 3.89524 3.00335 5.06175C3.53031 13.6054 10.3653 20.4404 18.909 20.9674Z"
										/>
									</g>
								</svg>` + clickedBtn.dataset.phone;
		});
	});
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
		})
	);
}

// Functions initialization

hamburgerJs.forEach((item) => {
	item.addEventListener("click", hamburgerToggle);
});
