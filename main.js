let cards = ["Which river is Julius Caesar famous for crossing?", "Which Roman general defeated Hannibal Barca at the Battle of Zama?", "This Roman Emperor wrote Meditations?"];
let answers = ["Rubicon", "Scipio", "Marcus Aurelius"];
let wrongCards = [];
let scoreTracker = [];
let board = document.querySelector('.board');
let userAnswer = document.querySelector('.class');




//loop through the cards array

for(let i = 0; i < cards.length; i++) {
	board.innerHTML = cards[i]  //present the first question and prompt the user for an answer
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

//for(let i = 0; i <= scoreTracker.length; i++)
	
