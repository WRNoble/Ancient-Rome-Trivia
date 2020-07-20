//Array establishing the questions
let questions = [
  {
    question: "Which river is Julius Caesar famous for crossing?",
    answer: "RUBICON",
  },
  {
    question: "Who was the first Christian Emperor?",
    answer: "CONSTANTINE",
    answerTwo: "PHILIP",
    answerThree: "PHILLIP",
  },
  {
    question: "Which Roman general defeated Hannibal at the Battle of Zama?",
    answer: "SCIPIO",
    answerTwo: "SCIPIO AFRICANUS",
  },
  {
    question: "This Roman Emperor wrote Meditations?",
    answer: "MARCUS AURELIUS",
  },
  {
    question: "The man who led elephants over the Alps to attack Rome?",
    answer: "HANNIBAL",
  },
  {
    question: "The first Emperor of the Roman Empire?",
    answer: "AUGUSTUS",
    answerTwo: "OCTAVIAN",
  },
  {
    question: "This military unit was the backbone of the Roman military",
    answer: "LEGION",
  },
  {
    question: "Which Emperor took the Empire to its territorial heights?",
    answer: "TRAJAN",
  },
  {
    question: "Which Emperor built a coast-to-coast wall in Britain?",
    answer: "HADRIAN",
  },
  {
    question: "Before the Emperors, what kind of government did Rome have?",
    answer: "REPUBLIC",
  },
];
//establishing important variables.
const totalQuestions = questions.length;
const scoreTracker = [];
const wrong = [];
const points = document.querySelector(".tracker");
const board = document.querySelector(".question-text");
const response = document.querySelector(".response");
const button = document.querySelector(".submit");

//game logic comes last to ensure everything has been declared.

displayQuestion(); //calls the first question to the screen

function displayQuestion() {
  board.innerHTML = questions[0].question;
  document.querySelector(".submit").disabled = false;
}

button.addEventListener("click", function (e) {
  e.preventDefault();
  let userAnswer = document.querySelector(".answer").value.toUpperCase();
  moveQuestion(userAnswer);
});

//Main function which takes user input and compares it to the answers in the array.
function moveQuestion(userAnswer) {
  if (userAnswer === questions[0].answer) {
    scoreTracker.unshift(questions.shift());
    response.textContent =
      "Congratulations, you have answered that question correctly!";
    endGame();
  } else if (userAnswer === questions[0].answerTwo) {
    scoreTracker.unshift(questions.shift());
    response.textContent =
      "Congratulations, you have answered that question correctly!";
    endGame();
  } else if (userAnswer === questions[0].answerThree) {
    scoreTracker.unshift(questions.shift());
    response.textContent =
      "Congratulations, you have answered that question correctly!";
    endGame();
  } else {
    wrong.push(questions.shift());
    response.textContent = "Sorry, you answered that question incorrectly.";
    endGame();
  }
}
//function determines if game is over and render correct message, if game is not over then it triggers the displayQuestion function
function endGame() {
  points.innerHTML = `You have answered ${scoreTracker.length} out of ${totalQuestions} correctly thus far!`;
  document.querySelector(".submit").disabled = true;
  if (questions.length === 0 && scoreTracker.length >= 6) {
    board.textContent = "Venisti, vidi, vicit!";
  } else if (questions.length === 0 && scoreTracker.length <= 5) {
    board.textContent = "You did not survive the barbarian invasion.";
  } else {
    displayQuestion();
  }
}
