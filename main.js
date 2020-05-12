let cards = ["Which river is Julius Caesar famous for crossing?", "Which Roman general defeated Hannibal Barca at the Battle of Zama?", "This Roman Emperor wrote Meditations?"];
let answers = ["Rubicon", "Scipio", "Marcus Aurelius"];
let	rightCards = [];
let board = document.querySelector('.board')
console.log(board.outerHTML)

//loop through the cards array

for(let i = 0; i <= cards.length; i++) {
	let question = i
	board.textContent(question)
}

//present the first question and prompt the user for an answer

//compares the input with the answer.

//score trackers prints the length of rightCards array.