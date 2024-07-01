const label = document.querySelectorAll(".jsCtaLabel"),
	form = document.querySelector(".jsForm"),
	textarea = document.querySelector(".jsCtaTextarea"),
	phone = document.querySelector(".jsCtaPhone"),
	email = document.querySelector(".jsCtaEmail"),
	animation = document.querySelector(".jsCtaAnimation"),
	animationOff = document.querySelector(".jsDisableAnimation");

if (label) {
	label.forEach((item) =>
		item.addEventListener("click", (e) => {
			const clickedLabel = e.target.closest(".jsCtaLabel"),
				ctaCheckbox = clickedLabel.querySelector(".jsCtaCheckbox"),
				ctaHidden = clickedLabel.querySelector(".jsCtaHidden");

			if (ctaHidden.value == "checked") {
				ctaHidden.value = "";
			} else {
				ctaHidden.value = "checked";
			}
			clickedLabel.classList.toggle("active");
			ctaCheckbox.classList.toggle("active");
		})
	);
}

// FORM VALIDATION

if (form) {
	form.addEventListener("submit", (e) => {
		// Mail validation
		let errorTab = [];

		if (
			!String(email.value)
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
		) {
			const emailError = "Nie prawidłowy adres e-mail";
			errorTab.push(emailError);
		}

		// Phone validation
		if (phone.value != "") {
			if (
				!String(phone.value)
					.toLowerCase()
					.match(/^[0-9]{9}$/)
			) {
				const phoneError = "Nieprawidłowy numer telefonu (9 cyfr,bez przerw)";
				errorTab.push(phoneError);
			}
		} else {
			const phoneError = "Nieprawidłowy numer (9cyfr)";
			errorTab.push(phoneError);
		}

		// Message validation

		if (textarea.value.length <= 1) {
			const textareaError =
				"Podaj poprawną treść wiadomości. Co najmniej 2 znaki.";
			errorTab.push(textareaError);
		}

		const activeCheckbox = document.querySelector(".jsCtaCheckbox.active");
		if (!activeCheckbox) {
			const checkboxError = "Wybierz przynajmniej jedną z form komunikacji";
			errorTab.push(checkboxError);
		}

		if (errorTab.length != 0) {
			window.alert(errorTab.join("\n"));
		} else {
			animation.classList.add("active");
		}
		e.preventDefault();
		form.reset();
		const activeLabels = document.querySelectorAll(".jsCtaLabel.active");
		activeLabels.forEach((item) => {
			item.classList.remove("active");
			item.querySelector(".jsCtaHidden").value = "";
			item.querySelector(".jsCtaCheckbox").classList.remove("active");
		});
	});
}

animationOff.addEventListener("click", () => {
	animation.classList.remove("active");
});
