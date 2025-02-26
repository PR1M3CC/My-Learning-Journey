const question = document.getElementById("question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById('loader');
const game = document.getElementById('game')
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
  .then((res) => res.json()) // Convert response to JSON
  .then((loadedQuestions) => {
    questions = loadedQuestions.results.map(formatQuestion);
    startGame(); // Start the game after formatting
  })
  .catch(console.error); // Log errors

function formatQuestion(loadedQuestion) {
  const formattedQuestion = {
    question: loadedQuestion.question,
  };

  // Copy incorrect answers & insert correct one at random position
  const answerChoices = [...loadedQuestion.incorrect_answers];
  formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
  answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);

  // Assign answers to choice1, choice2, choice3, choice4
  answerChoices.forEach((choice, index) => {
    formattedQuestion[`choice${index + 1}`] = choice;
  });

  return formattedQuestion;
}

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
  game.classList.remove('hidden')
  loader.classList.add('hidden')
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("/end.html"); // Go to the score page
  }
  questionCounter++; // Increase question count
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex]; // Pick a random question
  question.innerHTML = currentQuestion.question; // Display question

  choices.forEach((choice) => {
    const number = choice.dataset["number"]; // Get the choice number (1,2,3,4)
    choice.innerHTML = currentQuestion["choice" + number]; // Set button text
    //  Example:
    //      choice1 = "<script>";  // choice['choice1']
    //      choice2 = "<javascript>";  // choice['choice2']
  });

  availableQuestions.splice(questionIndex, 1); // Remove used question
  acceptingAnswers = true; // Now the user can click an answer
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return; // If not ready, do nothing

    acceptingAnswers = false; // Prevent clicking twice
    const selectedChoice = e.target; // Get the button clicked
    const selectedAnswer = selectedChoice.dataset["number"]; // Get answer number

    let classToApply = "incorrect";
    if (selectedAnswer == currentQuestion.answer) {
      classToApply = "correct";
    }
    if (classToApply == "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion(); // Move to next question
    }, 1000);
  });
});

incrementScore = function (num) {
  score += num;
  scoreText.innerText = score;
};
