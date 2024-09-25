"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	const shootingGallery = {
		field: [0, 1, 1, 0, 0, 1, 0, 1, 0, 1],
		shoot: function (position) {
			if (this.field[position - 1] === 1) {
				this.field[position - 1] = 0
				alert("Ваш постріл влучний!")
			} else alert("Ви не влучили!")
			let continueShooting = confirm('Продовжуємо гру?')
			if (continueShooting) this.shoot(getShootUserPosition(this.field))
			else alert('До побачення!')
		},
		toString() {
			return this.field.join(", ")
		},
	}

	// Крок 1. Обчислення результатів

	function getShootUserPosition(array) {
		let userPosition = parseInt(prompt(`Введіть позицію пострілу від 1 до ${array.length}`))
		if (userPosition >= 1 && userPosition <= array.length) return userPosition
		else {
			alert("Некоректна позиція пострілу")
			return getShootUserPosition(array)
		}
	}
	shootingGallery.shoot(getShootUserPosition(shootingGallery.field))

	// крок 2. Виведення результатів

	document.write(`<div class="container">`)
	document.write(`<p>${shootingGallery}</p>`)
	document.write(`</div>`)
}
