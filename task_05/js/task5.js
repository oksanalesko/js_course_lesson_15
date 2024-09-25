"use strict"
if (confirm("Почати тестування?")) {
	// Введення даних, позначення величин

	class DanceTeacher {
		constructor(girlsList, boysList) {
			this.girlsList = girlsList
			this.boysList = boysList
		}
		getRandomGirlName() {
			const girlName = Math.floor(Math.random() * this.girlsList.length)
			return this.girlsList[girlName]
		}
		getRandomBoyName() {
			const boyName = Math.floor(Math.random() * this.boysList.length)
			return this.boysList[boyName]
		}
		showDancePair() {
			// Щоб виводилось гарно у контейнер, використала innerHTML замість document.write )))
			const container = document.querySelector('.container')
			container.innerHTML += `<p>Пара для танців: ${this.getRandomGirlName()} та ${this.getRandomBoyName()}</p>`
		}
		run() {
			// Встановлюємо лічильник, щоб не виводити безкінечно
			let counter = 0
			let runInterval = setInterval(() => {
				counter++
				this.showDancePair()
				// Перериваємо, коли виведеться 10 разів
				if(counter >= 10) clearInterval(runInterval)
			}, 5000)
		}
	}

	// Обчислення результатів

	const girlNames = [
		"Олена",
		"Анастасія",
		"Катерина",
		"Марія",
		"Вікторія",
		"Софія",
		"Анна",
		"Тетяна",
		"Юлія",
		"Оксана",
	]
	const boyNames = [
		"Олександр",
		"Андрій",
		"Дмитро",
		"Іван",
		"Михайло",
		"Максим",
		"Богдан",
		"Тарас",
		"Юрій",
	]

	const danceTeacher1 = new DanceTeacher(girlNames, boyNames)

	// Виведення результатів

	document.write(`<div class="container">`)
	danceTeacher1.run()
	document.write(`</div>`)
}
