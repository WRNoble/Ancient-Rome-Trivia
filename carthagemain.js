let cards = [
{}
];

let scoreTracker = [];
let points = document.querySelector(".tracker");
let board = document.querySelector('.question-text');
let response = document.querySelector('.response');
let button = document.querySelector(".submit");

button.addEventListener('click', function(e) {
	e.preventDefault()
	let userAnswer = document.querySelector('.answer').value
	let answer2 = userAnswer.toUpperCase();
	if (answer2 === cards[0].answer) {
		let object = cards.shift()
		scoreTracker.unshift(object)
		let pointTracker = scoreTracker.length
		points.innerHTML = `You have answered ${pointTracker} out of 10 correctly thus far!`
		response.textContent = "Congratulations, you have answered that question correctly!"
		for(let i = 0; i <= cards.length; i++)
			if(cards.length === 0) {
				board.textContent = "Venisti, vidi, vicit"
			} else {
				displayQuestion()
			}
	} else {
		response.textContent = "Sorry, you answered that question incorrectly."
		let object2 = cards.shift()
		cards.push(object2)
		displayQuestion()
	}
})

function displayQuestion() {
		board.innerHTML = cards[0].question
}

displayQuestion()