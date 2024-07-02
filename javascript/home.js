const dropdowns = document.querySelectorAll(".jsDropdown"),
	dropdownValues = document.querySelectorAll(".jsDropdownValue"),
	clearBtn = document.querySelector(".jsClearFilters"),
	filterBtn = document.querySelector(".jsFilterBtn"),
	vechicleCount = document.querySelector(".jsVechicleCount"),
	products = document.querySelectorAll(".jsProduct"),
	body = document.body;

let activeProducts = document.querySelectorAll(".jsProduct.active");
filteringSubmit();
productCount();

// Dropdowns functionality

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
						sortDropdown.classList.remove("active");

						clickedDropdown.classList.add("active");
					}
				}
			} else {
				const newValue = e.target.closest(".jsDropdownItem").dataset.value;
				filterValue = e.target.closest(".jsDropdownItem").dataset.custom;

				dropdownValue.dataset.custom = filterValue;
				dropdownValue.textContent = newValue;

				const activeValue = document.querySelectorAll(
					'.jsDropdownValue[data-custom=""]'
				);
				activeProducts = document.querySelectorAll(".jsProduct.active");
				if (activeValue.length != 4) {
					clearBtn.classList.add("active");
				} else if (products.length == activeProducts.length) {
					clearBtn.classList.remove("active");
				}

				clickedDropdown.classList.remove("active");
				filteringSubmit();
			}
		});
	});
}

// Clearing filters when used

if (clearBtn) {
	clearBtn.addEventListener("click", clearFilters);
}

function clearFilters() {
	const dropdownReset = document.querySelectorAll(
		".jsDropdownValue[data-initial]"
	);

	dropdownReset.forEach((item) => {
		item.textContent = item.dataset.initial;
		item.dataset.custom = "";
	});

	clearBtn.classList.remove("active");

	products.forEach((item) => item.classList.add("active"));

	productCount();
	filteringSubmit();
}

// Filtering functionality

if (filterBtn) {
	filterBtn.addEventListener("click", () => {
		let getAllFilters = document.querySelectorAll(
			`.jsDropdownValue[data-custom]`
		);
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
		if (filters[0] != "") {
			query = query.concat("", `[data-model='${filters[0]}']`);
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
		if (query == "") {
			// query = "[data-location][data-fuel][data-gearbox][data-model]";
			clearFilters();
			return;
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
}

// Disable/Enable submit btn

function filteringSubmit() {
	const newFilter = document.querySelectorAll(
		'.jsDropdownValue[data-custom=""]'
	);
	activeProducts = document.querySelectorAll(".jsProduct.active");
	if (newFilter.length == 4 && products.length == activeProducts.length) {
		filterBtn.disabled = true;
	} else if (newFilter.length != 4) {
		filterBtn.disabled = false;
	} else if (products.length != activeProducts.length) {
		filterBtn.disabled = false;
	}
}

// Count products in the listing

function productCount() {
	const quantity = document.querySelectorAll(".jsProduct.active");
	vechicleCount.textContent = quantity.length;
}

// Close list when focus change

body.addEventListener("click", (e) => {
	if (!e.target.closest(".jsDropdown") && !e.target.closest(".jsSortDropdown")) {
		dropdowns.forEach((item) => {
			item.classList.remove("active");
		});
		sortDropdown.classList.remove("active");
	}
});

// Sorting functionality

const sortDropdown = document.querySelector(".jsSortDropdown"),
	originalListOrder = document.querySelectorAll(".jsProduct.active"),
	listingParent = document.querySelector(".jsListingParent");

sortDropdown.addEventListener("click", (e) => {
	dropdowns.forEach((item) => {
		item.classList.remove("active");
	});

	const parent = e.target.closest(".jsSortDropdown"),
		clickedItem = e.target.closest(".jsDropdownItem"),
		dropdownValue = parent.querySelector(".jsDropdownValue");
	if (clickedItem) {
		dropdownValue.textContent = clickedItem.textContent;
		const sortingNumber = clickedItem.dataset.number;
		// originalListOrder.appendChild(productsJs[0]);
		// let clone = productsJs[0].cloneNode(true);
		// const newEl = originalListOrder[0];
		// console.log(newEl.getAttribute("data-fuel"));
		let sortingTab = [];
		switch (parseInt(sortingNumber)) {
			case 0:
				originalListOrder.forEach((item) => {
					listingParent.appendChild(item);
				});
				break;
			case 1:
				originalListOrder.forEach((item) => {
					sortingTab.push(parseInt(item.dataset.price));
				});
				sortingTab = sortingTab.sort(function (a, b) {
					return a - b;
				});
				sortingTab.forEach((item) => {
					const newEl = document.querySelector(`[data-price="${item}"]`);
					listingParent.appendChild(newEl);
				});
				break;
			case 2:
				originalListOrder.forEach((item) => {
					sortingTab.push(parseInt(item.dataset.price));
				});
				sortingTab = sortingTab
					.sort(function (a, b) {
						return a - b;
					})
					.reverse();
				sortingTab.forEach((item) => {
					const newEl = document.querySelector(`[data-price="${item}"]`);
					listingParent.appendChild(newEl);
				});
				break;
			case 3:
				originalListOrder.forEach((item) => {
					sortingTab.push(parseInt(item.dataset.year));
				});
				sortingTab = sortingTab
					.sort(function (a, b) {
						return a - b;
					})
					.reverse();
				sortingTab.forEach((item) => {
					const newEl = document.querySelector(`[data-year="${item}"]`);
					listingParent.appendChild(newEl);
				});
				break;
			case 4:
				originalListOrder.forEach((item) => {
					sortingTab.push(parseInt(item.dataset.year));
				});
				sortingTab = sortingTab.sort(function (a, b) {
					return a - b;
				});
				sortingTab.forEach((item) => {
					const newEl = document.querySelector(`[data-year="${item}"]`);
					listingParent.appendChild(newEl);
				});
				break;
			case 5:
				originalListOrder.forEach((item) => {
					sortingTab.push(parseInt(item.dataset.mileage));
				});
				sortingTab = sortingTab.sort(function (a, b) {
					return a - b;
				});
				sortingTab.forEach((item) => {
					const newEl = document.querySelector(`[data-mileage="${item}"]`);
					listingParent.appendChild(newEl);
				});
				break;
			case 6:
				originalListOrder.forEach((item) => {
					sortingTab.push(parseInt(item.dataset.mileage));
				});
				sortingTab = sortingTab
					.sort(function (a, b) {
						return a - b;
					})
					.reverse();
				sortingTab.forEach((item) => {
					const newEl = document.querySelector(`[data-mileage="${item}"]`);
					listingParent.appendChild(newEl);
				});
				break;
			case 7:
				originalListOrder.forEach((item) => {
					sortingTab.push(parseInt(item.dataset.id));
				});
				sortingTab = sortingTab.sort(function (a, b) {
					return a - b;
				});

				sortingTab.forEach((item) => {
					const newEl = document.querySelector(`[data-id="${item}"]`);
					listingParent.appendChild(newEl);
				});
				break;
			case 8:
				originalListOrder.forEach((item) => {
					sortingTab.push(parseInt(item.dataset.id));
				});
				sortingTab = sortingTab
					.sort(function (a, b) {
						return a - b;
					})
					.reverse();
				sortingTab.forEach((item) => {
					const newEl = document.querySelector(`[data-id="${item}"]`);
					listingParent.appendChild(newEl);
				});
				break;
		}
	}
	if (parent.classList.contains("active")) {
		parent.classList.remove("active");
	} else {
		parent.classList.add("active");
	}

	// swapProducts();

	// Jesli bedziemy zmieniac kolejnosc appendem
	// Jesli bedziemy robić clonami
	// parentjs.appendChild(clone);
});

function swapProducts() {
	// productsJs.sort((a, b) => a - b);
	// let reversedArray = [];
	// for (let i = productsJs.length - 1; i >= 0; i--) {
	// 	const valueAtIndex = productsJs[i];
	// 	reversedArray.push(valueAtIndex);
	// }
	// console.log(reversedArray);
	// Klonowanie
	// productCount();
}

// swapProducts();
