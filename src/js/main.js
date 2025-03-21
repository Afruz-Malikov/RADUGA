document.addEventListener("DOMContentLoaded", () => {
	init();
	setSize();
	map();
	about();
	project();
});
function setSize() {
	const windowWidth = window.innerWidth;

	if (windowWidth > 999) return;

	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty(`--vh`, `${vh}px`);
}

async function init() {
	if (document.querySelector(".nav-lang-dropdown")) {
		window.addEventListener(`click`, (e) => {
			if (document.querySelector(`details[open]`)) {
				let target = e.target.closest(`details[open]`);

				if (!target && e.target.tagName !== `BUTTON`) {
					document.querySelectorAll(`details[open]`).forEach((item) => {
						item.removeAttribute(`open`);
					});
				}
			}
		});
	}

	if (document.querySelector(".nav__btn")) {
		const menuBtn = document.querySelector(".nav__btn");
		const navMenu = document.querySelector(".nav__bottom");

		const body = document.querySelector("body");

		if (menuBtn && navMenu) {
			menuBtn.addEventListener("click", (e) => {
				e.preventDefault();
				body.classList.toggle("open");
				menuBtn.classList.toggle("open");
				if (navMenu) navMenu.classList.toggle("open");
			});

			window.addEventListener("resize", () => {
				if (window.innerWidth > 999) {
					menuBtn.classList.remove("open");
					body.classList.remove("open");
					if (navMenu) navMenu.classList.remove("open");
				}
			});
		}
	}
}
function map() {
	const pins = document.querySelectorAll(".pin");
	pins.forEach((pin) => {
		pin.addEventListener("mouseover", () => {
			const pinId = pin.getAttribute("data-pin");
			const desc = document.querySelector(`.desc.${pinId}`);
			const slice = document.querySelectorAll(`.map-slice.${pinId}`);
			console.log(slice);
			if (desc) {
				desc.classList.add("active");
				slice.forEach((item) => item.classList.add("active"));
			}
		});

		pin.addEventListener("mouseout", () => {
			const pinId = pin.getAttribute("data-pin");
			const desc = document.querySelector(`.desc.${pinId}`);
			const slice = document.querySelectorAll(`.map-slice.${pinId}`);
			if (desc) {
				desc.classList.remove("active");
				slice.forEach((item) => item.classList.remove("active"));
			}
		});
	});
}

function about() {
	document.querySelectorAll(".about__card").forEach((card, index) => {
		setTimeout(() => {
			card.classList.add("active");
		}, index * 150);
	});
}

function project() {
	const tabs = document.querySelectorAll(".projects__tabs .btn");
	const tabsInner = document.querySelector(".projects__tabs-inner");
	const tabsContent = {
		1: `<div class="projects__tabs-card">
			<picture>
				<source srcset="./images/project-1.avif" />
				<img src="./images/project-1.png" alt="Project 1" />
			</picture>
			<h1>Запуск приложения для доставки продуктов (релиз в 2025 году)</h1>
		</div>
		<div class="projects__tabs-card">
			<picture>
				<source srcset="./images/project-2.avif" />
				<img src="./images/project-2.png" alt="Project 1" />
			</picture>
			<h1>Открытие гипермаркета в городе Асан с площадью 1000 м²</h1>
		</div>`,
		2: `<div class="projects__tabs-card">
			<picture>
				<source srcset="./images/project-2.avif" />
				<img src="./images/project-2.png" alt="Project 1" />
			</picture>
			<h1>Tab-2 title</h1>
		</div>
		<div class="projects__tabs-card">
			<picture>
				<source srcset="./images/project-1.avif" />
				<img src="./images/project-1.png" alt="Project 1" />
			</picture>
			<h1>Tab-2 title</h1>
		</div>`,
	};
	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			const target = tab.dataset.tab;
			tabs.forEach((t) => t.classList.remove("active"));
			tab.classList.add("active");
			tabsInner.innerHTML = tabsContent[target] || "Пусто";
		});
	});
}
