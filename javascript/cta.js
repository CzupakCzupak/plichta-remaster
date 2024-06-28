const label = document.querySelectorAll(".jsCtaLabel"),
	submit = document.querySelector(".jsCtaSubmit"),
	textarea = document.querySelector(".jsCtaTextarea"),
	phone = document.querySelector(".jsCtaPhone"),
	email = document.querySelector(".jsCtaEmail");

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

submit.addEventListener("click", (e) => {
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
		const phoneError = "Numer wymagany (9 cyfr)";
		errorTab.push(phoneError);
	}

	// Message validation

	if (textarea.value.length <= 1) {
		const textareaError = "Podaj poprawną treść wiadomości. Co najmniej 2 znaki.";
		errorTab.push(textareaError);
	}

	const activeCheckbox = document.querySelector(".jsCtaCheckbox.active");
	if (!activeCheckbox) {
		const checkboxError = "Wybierz przynajmniej jedną forme komunikacji";
		errorTab.push(checkboxError);
	}

	console.log(errorTab.toString());
	if (errorTab.length != 0) {
		window.alert(errorTab.join("\n"));
	}
	e.preventDefault();
});

// const animation = document.querySelector(".popup__container"),
// 	popupExit = document.querySelector(".popup__exit");

// popupExit.addEventListener("click", () => {
// 	animation.classList.remove("active");
// });

// const playAnimation = () => {
// 	animation.classList.add("active");
// 	animation.style.maxHeight = "100vh";
// };
