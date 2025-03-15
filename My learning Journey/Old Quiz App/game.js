// Selecting necessary DOM elements
const question = document.getElementById("question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById('loader');
const game = document.getElementById('game');
const scoreText = document.getElementById("score");

// Game variables
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];

// Fetching questions from Open Trivia Database
fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
  .then((res) => res.json()) // Convert response to JSON
  .then((loadedQuestions) => {
    questions = loadedQuestions.results.map(formatQuestion);
    startGame(); // Start the game after formatting the questions
  })
  .catch((err) => {
    console.error("Error fetching questions:", err);
    alert("Failed to load questions. Please try again later.");
  });

// Function to format the questions to match our game structure
function formatQuestion(loadedQuestion) {
  const formattedQuestion = {
    question: loadedQuestion.question,
  };

  // Copy incorrect answers and insert the correct one at a random position
  const answerChoices = [...loadedQuestion.incorrect_answers];
  formattedQuestion.answer = Math.floor(Math.random() * 4) + 1; // Random position (1-4)
  answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);

  // Assign answer choices to properties choice1, choice2, etc.
  answerChoices.forEach((choice, index) => {
    formattedQuestion[`choice${index + 1}`] = choice;
  });

  return formattedQuestion;
}

// Constants for game rules
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

// Function to start the game
const startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions]; // Copy questions array
  getNewQuestion();

  // Show game and hide loader
  game.classList.remove('hidden');
  loader.classList.add('hidden');
};

// Function to load a new question
const getNewQuestion = () => {
  // Check if there are no more questions or max limit reached
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/end.html"); // Redirect to end page
  }

  questionCounter++; // Increment question counter
  updateProgressBar(); // Update progress UI

  // Select a random question
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question; // Display question text

  // Assign answer choices to buttons
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1); // Remove used question
  acceptingAnswers = true; // Allow user to select an answer
};

// Function to update the progress bar
const updateProgressBar = () => {
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
};

// Event listeners for each answer choice
choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return; // If not ready, do nothing

    acceptingAnswers = false; // Prevent clicking twice
    const selectedChoice = e.target; // Get the button clicked
    const selectedAnswer = selectedChoice.dataset["number"]; // Get answer number

    let classToApply = "incorrect";
    if (selectedAnswer == currentQuestion.answer) {
      classToApply = "correct";
      incrementScore(CORRECT_BONUS); // Increase score only when correct
    } else {
      // Find the correct choice and apply the 'correct' class
      const correctChoice = choices.find(
        (choice) => choice.dataset["number"] == currentQuestion.answer
      );
      correctChoice.parentElement.classList.add("correct"); // Highlight correct answer
    }

    // Apply the incorrect/correct class to the clicked choice
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      // Remove correct highlight if the answer was wrong
      choices.forEach((choice) => choice.parentElement.classList.remove("correct"));
      
      getNewQuestion(); // Move to next question
    }, 1000);
  });
});



// Function to increment and update score
const incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
