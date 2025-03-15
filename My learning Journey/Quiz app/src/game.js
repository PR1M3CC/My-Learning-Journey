// Collecting necessary DOM elements
const loader = document.getElementById("loader");
const progressText = document.getElementById("progressText");
const gameContainer = document.getElementById("gameContainer");
const progressBar = document.getElementById("progressBar");
const scoreCounter = document.getElementById("scoreText");
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

// Defining Rules for the game
const maxQuestions = 10;
const Bonus = 10;

// Declaring variables for the game
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];

// Fetching questions from Open Trivia Database
function fetchQuestions(attempts = 3) {
  fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
    .then(function (response) {
      if (!response.ok) {
        return Promise.reject("Error: " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      if (data.results.length === 0) {
        return Promise.reject("No questions received.");
      }

      // Store questions and show the game
      questions = data.results;
      loader.style.display = "none";
      gameContainer.style.display = "block";
      displayQuestion();
    })
    .catch(function (error) {
      console.error("Fetch error:", error);

      if (attempts > 1) {
        console.log("Retrying... Attempts left:", attempts - 1);
        setTimeout(function () {
          fetchQuestions(attempts - 1);
        }, 2000);
      } else {
        showErrorMessage();
      }
    });
}

// Function to show an error message
function showErrorMessage() {
  loader.style.display = "none";
  gameContainer.style.display = "flex";
  gameContainer.style.flexDirection = "column";
  gameContainer.innerHTML = `<h1 style="color:red; text-align:center;">Failed to load questions. Please try again later.</h1>
  <a
          class="bg-blue-50 p-2 border-blue-400 border-2 w-[180px] text-center self-center mt-3 hover:bg-blue-300 transition-colors duration-500 hover:text-white text-blue-500 font-semibold text-lg"
          href="game.html"
          >Retry</a
        >`;
}

// Function to display the first question
function displayQuestion() {
  if (questions.length === 0 || questionCounter >= maxQuestions) {
    localStorage.setItem("mostRecentScore", score);
    window.location.href = "end.html"; // Redirect to end page
    return;
  }

  // Get a random question
  const questionIndex = Math.floor(Math.random() * questions.length);
  currentQuestion = questions[questionIndex]; // Select the question

  // Remove used question from the array
  questions.splice(questionIndex, 1); // This removes the selected question

  // Display the question
  question.innerHTML = currentQuestion.question;

  // Create an array of all answers (correct + incorrect)
  let answers = [
    currentQuestion.correct_answer,
    ...currentQuestion.incorrect_answers,
  ];

  // Shuffle the answers randomly
  answers.sort(() => Math.random() - 0.5);

  // Reset background colors before assigning new answers
  choices.forEach((choice) => {
    choice.style.backgroundColor = ""; // Reset to default
    choice.style.color = ""; // Reset to default
  });

  // Assign answers to choices
  choices.forEach((choice, index) => {
    choice.innerHTML = answers[index]; // Set text inside choice
    if (choice.innerText === currentQuestion.correct_answer) {
      choice.dataset.correct = "true";
    } else {
      choice.dataset.correct = "false";
    }
    acceptingAnswers = true;
  });
  questionCounter++;
  updateProgressBar();
}
// Function to update the progress bar
const updateProgressBar = () => {
  progressText.innerText = `Question ${questionCounter}/${maxQuestions}`;
  progressBar.style.width = `${(questionCounter / maxQuestions) * 100}%`;
};
// Add event listeners to choices
choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    if (!acceptingAnswers) {
      return;
    }
    acceptingAnswers = false;

    // Check if the selected choice is correct
    const isCorrect = choice.dataset.correct === "true";
    // Change background color based on correctness
    if (isCorrect) {
      choice.style.backgroundColor = "green"; // Correct answer turns green
      choice.style.color = "white";
      scoreCounter.innerText = Number(scoreCounter.innerText) + Bonus;
      score += Bonus;
    } else {
      choice.style.backgroundColor = "red"; // Incorrect answer turns red
      choice.style.color = "white";
    }

    // Also highlight the correct answer
    choices.forEach((c) => {
      if (c.dataset.correct === "true") {
        c.style.backgroundColor = "green";
        c.style.color = "white";
      }
    });
    // Move to the next question after a short delay
    setTimeout(() => {
      displayQuestion(); // Load next question
    }, 1000);
  });
});

// Call fetchQuestions to start fetching questions
fetchQuestions();
