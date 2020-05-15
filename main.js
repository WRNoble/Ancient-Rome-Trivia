//Array establishing the questions
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
//establishing important variables before the logic.
let scoreTracker = [];
let wrong = [];
let points = document.querySelector('.tracker');
let board = document.querySelector('.question-text');
let response = document.querySelector('.response');
let button = document.querySelector('.submit');
//game logic comes last to ensure everything has been declared.
button.addEventListener('click', function(e) {
	e.preventDefault();
	let userAnswer = document.querySelector('.answer').value;
	let input = userAnswer.toUpperCase();
	moveCard(input);
})
//needs functions are found below the event listener
function displayQuestion() {
	board.innerHTML = cards[0].question	;
}

displayQuestion()//calls the first question to the screen

function moveCard(input) {
	if (input === cards[0].answer) {
		let cardInPlay = cards.shift();
		scoreTracker.unshift(cardInPlay);
		points.innerHTML = `You have answered ${scoreTracker.length} out of 10 correctly thus far!`;
		response.textContent = "Congratulations, you have answered that question correctly!";
		win();
	} else {
		response.textContent = "Sorry, you answered that question incorrectly.";
		let wrongAnswer = cards.shift();
		wrong.push(wrongAnswer);
		win();
	}
}

function setTimer() {

}

function win() {
	if(cards.length === 0 && scoreTracker.length >= 6) {
		board.textContent = "Venisti, vidi, vicit!"
		document.querySelector('.submit').disabled = true;
	} else if (cards.length === 0 && scoreTracker.length <= 5){
		board.textContent = "You did not survive the barbarian invasion."
		document.querySelector('.submit').disabled = true;
	} else {
		displayQuestion()
	}
}