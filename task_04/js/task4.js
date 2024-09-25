"use strict"
if (confirm("Почати тестування?")) {
	// Введення даних, позначення величин

	class Banner {
		constructor(bannersList) {
			this.banners = bannersList
		}
		getRandomBanner() {
			const randomBannerIndex = Math.floor(Math.random() * this.banners.length)
			return this.banners[randomBannerIndex]
		}
		renderRandomBanner() {
			const randomBanner = this.getRandomBanner()
			document.write(`<a target="_blank" href="${randomBanner.link} alt="${randomBanner.name}"><img class="image-ban" src="${randomBanner.image}"></a>`)
		}
	}

	// Обчислення результатів

	const banners = [
		{
			name: 'Linkedin',
			image: `img/linkedin.png`,
			link: `https://www.linkedin.com/`
		},
		{
			name: 'Facebook',
			image: `img/Facebook.png`,
			link: `https://www.facebook.com/`
		},
		{
			name: 'Instagram',
			image: `img/Instagram.png`,
			link: `https://www.instagram.com/`
		}
	]

	const banner1 = new Banner(banners)

	// Виведення результатів

	document.write(`<div class="container">`)
	banner1.renderRandomBanner()
	document.write(`</div>`)
}
