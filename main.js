let cards = [
{
	question: "Which river is Julius Caesar famous for crossing?",
 	answer: "RUBICON"
},
{
	question: "The first Christian Emperor?",
 	answer: "CONSTANTINE"
}, 
{
	question: "Which Roman general defeated Hannibal Barca at the Battle of Zama?",
 	answer: "SCIPIO"
}, 
{
	question: "This Roman Emperor wrote Meditations?",
 	answer: "MARCUS AURELIUS"
}, 
{
	question: "The name of the general who led elephants over the Alps to attack Rome?",
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
	answer: "Trajon"
},
{
	question: "Which Emperor became famous for building a wall stretching coast to coast in Britain?",
	answer: "Hadrian"
}
];

let playerAnswers = [];
let scoreTracker = [];
let board = document.querySelector('.board');

let button = document.querySelector(".submit");
button.addEventListener('click', function(e) {
	e.preventDefault()
	let userAnswer = document.querySelector('.answer').value
	let answer2 = userAnswer.toUpperCase();
	if (answer2 === cards[0].answer) {
		console.log(answer2 + " is correct!")
	}

})






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
	
