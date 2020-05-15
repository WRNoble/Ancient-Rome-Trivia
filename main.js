//Array establishing the questions
let questions = [
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
const totalQuestions = questions.length;
const scoreTracker = [];
const wrong = [];
const points = document.querySelector('.tracker');
const board = document.querySelector('.question-text');
const response = document.querySelector('.response');
const button = document.querySelector('.submit');

//game logic comes last to ensure everything has been declared.

displayQuestion()//calls the first question to the screen

function displayQuestion() {
	board.innerHTML = questions[0].question	;
	document.querySelector('.submit').disabled = false;
}

button.addEventListener('click', function(e) {
	e.preventDefault();
	let userAnswer = document.querySelector('.answer').value.toUpperCase();
	moveQuestion(userAnswer);
})

function moveQuestion(userAnswer) {
	if (userAnswer === questions[0].answer) {
		scoreTracker.unshift(questions.shift());
		response.textContent = "Congratulations, you have answered that question correctly!";
		endGame();
	} else {
		wrong.push(questions.shift());
		response.textContent = "Sorry, you answered that question incorrectly.";
		endGame();
	}
}

function endGame() {
	points.innerHTML = `You have answered ${scoreTracker.length} out of ${totalQuestions} correctly thus far!`;
	document.querySelector('.submit').disabled = true;
		if(questions.length === 0 && scoreTracker.length >= 6) {
			board.textContent = "Venisti, vidi, vicit!"
		} else if (questions.length === 0 && scoreTracker.length <= 5){
			board.textContent = "You did not survive the barbarian invasion."	
		} else {
			displayQuestion()
		}
}