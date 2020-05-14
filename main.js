let cards = [
{
	question: "Which river is Julius Caesar famous for crossing?",
 	answer: "RUBICON"
},
{
	question: "Who was the first Christian Emperor?",
 	answer: "CONSTANTINE"
}, 
{
	question: "Which Roman general defeated Hannibal at the Battle of Zama?",
 	answer: "SCIPIO"
}, 
{
	question: "This Roman Emperor wrote Meditations?",
 	answer: "MARCUS AURELIUS"
}, 
{
	question: "The man who led elephants over the Alps to attack Rome?",
 	answer: "HANNIBAL"
},
{
	question: "The first Emperor of the Roman Empire?",
 	answer: "AUGUSTUS"
},
{
	question: "This military unit was the backbone of the Roman military",
 	answer: "LEGION"
},
{
	question: "Which Emperor took the Empire to its territorial heights?",
	answer: "TRAJAN"
},
{
	question: "Which Emperor built a coast-to-coast wall in Britain?",
	answer: "HADRIAN"
},
{
	question: "Before the Emperors, what kind of government did Rome have?",
	answer: "REPUBLIC"
}
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
//timer.addEventListener('click', )