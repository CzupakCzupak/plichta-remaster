let gallery = new Splide(".gallery__splide-js", {
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

let galleryBar = document.querySelector(".gallery__progress-bar");

console.log();

gallery.on("mounted move", function () {
	var end = gallery.Components.Controller.getEnd() + 1;
	var rate = Math.min((gallery.index + 1) / end, 1);
	galleryBar.style.width = String(100 * rate) + "%";
});

gallery.mount();
