const dropdowns = document.querySelectorAll(".jsDropdown"),
	dropdownValues = document.querySelectorAll(".jsDropdownValue"),
	clearFilters = document.querySelector(".jsClearFilters"),
	filterBtn = document.querySelector(".jsFilterBtn"),
	vechicleCount = document.querySelector(".jsVechicleCount"),
	products = document.querySelectorAll(".jsProduct");

filteringSubmit();
productCount();

if (dropdowns) {
	dropdowns.forEach((item) => {
		item.addEventListener("click", (e) => {
			const clickedDropdown = e.target.closest(".jsDropdown"),
				dropdownValue = clickedDropdown.querySelector(".jsDropdownValue");
			if (!e.target.closest(".jsDropdownItem")) {
				if (e.target.closest(".jsDropdown")) {
					if (clickedDropdown.classList.contains("active")) {
						clickedDropdown.classList.remove("active");
					} else {
						dropdowns.forEach((item) => {
							item.classList.remove("active");
						});

						clickedDropdown.classList.add("active");
					}
				}
			} else {
				const newValue = e.target.closest(".jsDropdownItem").dataset.value,
					filterValue = e.target.closest(".jsDropdownItem").dataset.custom;

				dropdownValue.dataset.custom = filterValue;
				dropdownValue.textContent = newValue;

				const activeValue = document.querySelectorAll(
					'.jsDropdownValue[data-custom=""]'
				);

				if (activeValue.length != 4) {
					clearFilters.classList.add("active");
				} else {
					clearFilters.classList.remove("active");
				}

				clickedDropdown.classList.remove("active");
				filteringSubmit();
			}
		});
	});
}

clearFilters.addEventListener("click", () => {
	const dropdownReset = document.querySelectorAll(
		".jsDropdownValue[data-initial]"
	);

	dropdownReset.forEach((item) => {
		item.textContent = item.dataset.initial;
		item.dataset.custom = "";
	});

	clearFilters.classList.remove("active");
	filteringSubmit();
});

filterBtn.addEventListener("click", () => {
	let getAllFilters = document.querySelectorAll(`.jsDropdownValue[data-custom]`);
	let filters = [];
	getAllFilters.forEach((item) => {
		if (item.dataset.custom != "") {
			filters.push(item.dataset.custom);
		} else {
			filters.push("");
		}
	});
	let query = "";
	let result;
	console.log(filters[0] != "");
	if (filters[0] != "") {
		query = query.concat("", `[data-gearbox='${filters[0]}']`);
	}
	if (filters[1] != "") {
		query = query.concat("", `[data-gearbox='${filters[1]}']`);
	}
	if (filters[2] != "") {
		query = query.concat("", `[data-fuel='${filters[2]}']`);
	}
	if (filters[3] != "") {
		query = query.concat("", `[data-location='${filters[3]}']`);
	}
	const filteredProducts = document.querySelectorAll(`${query}`);
	products.forEach((item) => {
		item.classList.remove("active");
	});
	filteredProducts.forEach((item) => {
		item.classList.add("active");
	});
	productCount();
});

function filteringSubmit() {
	const newFilter = document.querySelectorAll(
		'.jsDropdownValue[data-custom=""]'
	);
	if (newFilter.length != 4) {
		filterBtn.disabled = false;
	} else {
		filterBtn.disabled = true;
	}
}

function productCount() {
	const quantity = document.querySelectorAll(".jsProduct.active");
	vechicleCount.textContent = quantity.length;
}

const body = document.body;

body.addEventListener("click", (e) => {
	if (!e.target.closest(".jsDropdown")) {
		dropdowns.forEach((item) => {
			item.classList.remove("active");
		});
	}
});

function changeActiveClass(e) {
	if (!e.target.closest(".filter-btn")) {
		filterButtons.forEach((item) => {
			item.classList.remove("active");
		});
		return;
	}
}
