const gallery = new Splide(".jsGallerySplide", {
	gap: 16,
	fixedWidth: 660,
	perMove: 2,
	type: "loop",
	pagination: false,
	breakpoints: {
		1200: {
			perMove: 1,
		},
		768: {
			fixedWidth: false,
			arrows: false,
		},
	},
});

const galleryBar = document.querySelector(".jsGalleryBar");

gallery.on("mounted move", function () {
	const end = gallery.Components.Controller.getEnd() + 1;
	const rate = Math.min((gallery.index + 1) / end, 1);
	galleryBar.style.width = String(100 * rate) + "%";
});

gallery.mount();
