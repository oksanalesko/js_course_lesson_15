"use strict"
if (confirm("Почати тестування?")) {
	// Крок 0. Введення даних, позначення величин

	const auto = {
		brand: "Volkswagen",
		tankSize: 50,
		litersNum: 40,
		seatsNum: 7,
		passengersNum: 6,
		getRefueling: function (liters) {
			const availableTankCapacity = this.tankSize - this.litersNum
			if (liters <= availableTankCapacity) {
				this.litersNum += liters
				alert(`Заправка бака успішна, у баці є ${this.litersNum} л з ${this.tankSize} л ємності`)
			} else alert("Бак переповниться!")
		},
		showPassengersNum: function () {
			return `Кількість пасажирів: ${this.passengersNum}`
		},
		addPassengers: function (passNum) {
			const availableSeats = this.seatsNum - this.passengersNum
			if (passNum <= availableSeats) {
				this.passengersNum += passNum
				alert(`Ласкаво просимо в салон авто! Залишилось ${availableSeats} вільних місць`)
			} else alert("Немає місця для стількох пасажирів")
		},
		decreasePassengers: function (passNum) {
			if (this.passengersNum === 0) alert("Салон не містить пасажирів для висадки")
			else if (passNum <= this.passengersNum) {
				this.passengersNum -= passNum
				alert(`Висадка успішна! В салоні залишилось ${this.passengersNum} пасажирів`)
			} else alert(`В салоні немає стільки пасажирів для висадки, є ${this.passengersNum} пасажирів`)
		},
	}

	// Крок 1. Обчислення результатів

	auto.getRefueling(15)
	auto.addPassengers(1)
	auto.decreasePassengers(4)

	// крок 2. Виведення результатів

	document.write(`<div class="container">`)
	document.write(`<p>${auto.showPassengersNum()}</p>`)
	document.write(`</div>`)
}
