const label = document.querySelectorAll(".cta__label-js");

label.forEach((item) =>
	item.addEventListener("click", (e) => {
		const clickedLabel = e.target.closest(".cta__label-js"),
			ctaCheckbox = clickedLabel.querySelector(".cta__checkbox-js"),
			ctaHidden = clickedLabel.querySelector(".cta__hidden-js");

		if (ctaHidden.value == "checked") {
			ctaHidden.value = "";
		} else {
			ctaHidden.value = "checked";
		}
		clickedLabel.classList.toggle("active");
		ctaCheckbox.classList.toggle("active");
	})
);
