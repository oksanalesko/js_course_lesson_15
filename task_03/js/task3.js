"use strict"
if (confirm("Почати тестування?")) {
	// Введення даних, позначення величин

	class MultiChecker {
		constructor(testedNum) {
			this.testedNum = testedNum
			this.correctAnswerNum = 0
			this.incorrectAnswerNum = 0
		}
		getGeneratedExample() {
			this.exampleNumber = Math.floor(Math.random() * 11)
			return `${this.testedNum} помножити на ${this.exampleNumber}`
		}
		getCorrectAnswer() {
			return this.exampleNumber * this.testedNum
		}
		checkedUsersAnswers(usersAnswer) {
			if (parseInt(usersAnswer) === this.getCorrectAnswer()) this.correctAnswerNum++
			else this.incorrectAnswerNum++
		}
		renderTestRes() {
			document.write(`<div class="container">`)
			document.write(`<ul class="task-list">`)
			document.write(`<li class="task-item">Правильних відповідей: ${this.correctAnswerNum}</li>`)
			document.write(`<li class="task-item">Неправильних відповідей: ${this.incorrectAnswerNum}</li>`)
			document.write(`</ul>`)
			document.write(`</div>`)
		}
	}

	// Обчислення результатів

	const multiChecker7 = new MultiChecker(7)

	function getUserAnswers(obj, count) {
		for (let i = 0; i < count; i++) {
			let userAnswer
			do {
				userAnswer = parseInt(prompt(`Напишіть відповідь: ${obj.getGeneratedExample()}`))
			} while (isNaN(userAnswer));
			multiChecker7.checkedUsersAnswers(userAnswer)
		}
	}
	getUserAnswers(multiChecker7, 10)

	// Виведення результатів

	multiChecker7.renderTestRes()
}
