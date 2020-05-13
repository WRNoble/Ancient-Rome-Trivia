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
	question: "Which Roman general defeated Hannibal at the Battle of Zama?",
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
	answer: "TRAJAN"
},
{
	question: "Which Emperor became famous for building a wall stretching coast to coast in Britain?",
	answer: "HADRIAN"
},
{
	question: "Before the Emperors took control what kind of government did Rome have?",
	answer: "REPUBLIC"
}
];

let scoreTracker = [];
let points = document.querySelector(".tracker");
let board = document.querySelector('.board');
let response = document.querySelector('.response');
let timer = document.querySelector('.timer')
//let victory = document.querySelector('.victory');
//let next = document.querySelector('.next');


let button = document.querySelector(".submit");

button.addEventListener('click', function(e) {
	e.preventDefault()
	let userAnswer = document.querySelector('.answer').value
	let answer2 = userAnswer.toUpperCase();
	if (answer2 === cards[0].answer) {
		console.log(answer2 + " is correct!")
		let object = cards.shift()
		scoreTracker.unshift(object)
		console.log(scoreTracker)
		let pointTracker = scoreTracker.length
		points.innerHTML = `You have answered ${pointTracker} out of 10 correctly thus far!`
		response.textContent = "Congratulations, you have answer that question correctly!"
		console.log(cards) 
		for(let i = 0; i <= cards.length; i++)
			if(cards.length === 0) {
				board.textContent = "Venisti, vidi, vicit"
			} else {
				displayQuestion()
			}
	} else {
		console.log("Sorry, that is incorrect.")
		response.textContent = "Sorry, you answered that question incorrectly."
		let object2 = cards.shift()
		cards.push(object2)
		console.log(cards)
		console.log(scoreTracker)
		displayQuestion()
	}

})

function displayQuestion() {
		board.innerHTML = cards[0].question

}

displayQuestion()

//timer.addEventListener('click', )