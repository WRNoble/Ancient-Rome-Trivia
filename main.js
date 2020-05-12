let cards = [
{question: "Which river is Julius Caesar famous for crossing?"},
{question: "The first Christian Emperor?"}, 
{question: "Which Roman general defeated Hannibal Barca at the Battle of Zama?"}, 
{question: "This Roman Emperor wrote Meditations?"}, 
{question: "The name of the general who led elephants over the Alps to attack Rome?"},
{question: "The first Emperor of the Roman Empire?"},
{question: "This military unit was the backbone of the Roman military"}
];

let answers = [
{answer: "RUBICON"},
{answer: "CONSTANTINE"}, 
{answer: "SCIPIO"}, 
{answer: "MARCUS AURELIUS"}, 
{answer: "HANNIBAL"},
{answer: "AUGUSTUS"},
{answer: "LEGION"}
];

let playerAnswers = [];
let scoreTracker = [];
let board = document.querySelector('.board');
let userAnswer = document.querySelector('.answer').value.toUpperCase;
let button = document.querySelector(".submit");
button.addEventListener('click', function(value) {
	.preventDefault()
	playerAnswers.push(userAnswer)
})
console.log(userAnswer)





//loop through the cards array

for(let i = 0; i < cards.length; i++) {
	board.innerHTML = cards[i].question  //present the first question and prompt the user for an answer
	break
	if (userAnswer === answers) {
		cards.pop(i).question
		scoreTracker.push(i)
	} else {

	}
	// for(let j = 0; j < answers.length; i++){
	// 	if (userAnswer === answers[j]) {
	// 		//push question into scoreTracker array
	// 	} else {
	// 		//
	// 	}
	// }
}
								//compares the input with the answer.



//score trackers prints the length of rightCards array.

//for(let i = 0; i < scoreTracker.length; i++) {}
	
