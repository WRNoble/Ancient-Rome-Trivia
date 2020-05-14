let cards = [
{
	question: "Which river is Julius Caesar famous for crossing?",
 	answer: "RUBICON",
 	hint: "This river begins with the letter R"
},
{
	question: "Who was the first Christian Emperor?",
 	answer: "CONSTANTINE",
 	hint: "This man has a city named after himself."
}, 
{
	question: "Which Roman general defeated Hannibal at the Battle of Zama?",
 	answer: "SCIPIO",
 	hint: "This man survived the battle of Cannae."
}, 
{
	question: "This Roman Emperor wrote Meditations?",
 	answer: "MARCUS AURELIUS",
 	hint: "This emperor was feature in the film 'Gladiator.'"
}, 
{
	question: "The man who led elephants over the Alps to attack Rome?",
 	answer: "HANNIBAL",
 	hint: "This man shares his name with a fictional cannibal."
},
{
	question: "The first Emperor of the Roman Empire?",
 	answer: "AUGUSTUS",
 	hint: "He was the adopted heir of Caesar."
},
{
	question: "This military unit was the backbone of the Roman military",
 	answer: "LEGION",
 	hint: "The word became synonymous with the word 'many'."
},
{
	question: "Which Emperor took the Empire to its territorial heights?",
	answer: "TRAJAN",
	hint: "He was one of the five good emperors of Rome."
},
{
	question: "Which Emperor built a coast-to-coast wall in Britain?",
	answer: "HADRIAN",
	hint: "He reigned after Trajan."
},
{
	question: "Before the Emperors, what kind of government did Rome have?",
	answer: "REPUBLIC",
	hint: "the term in Latin was 'res publica.'"
}
];

let scoreTracker = [];
let wrong = [];
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
		wrong.push(object2)
		console.log(wrong)
		displayQuestion()
	}
})

function displayQuestion() {
		board.innerHTML = cards[0].question
}

displayQuestion()