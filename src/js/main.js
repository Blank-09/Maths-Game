// Containers
const leaderboardDiv = document.querySelector(".leaderboard-container");
const name_box = document.querySelector(".username-input-container");
const info_box = document.querySelector(".instructions-container");
const quiz_box = document.querySelector(".quiz-box");
const result_box = document.querySelector(".result-box");

// Start Page
const startBtn = document.getElementById("startBtn");
const leaderboardBtn = document.getElementById("leaderboardBtn");

// leaderboard Page
const rankListDiv = leaderboardDiv.querySelector(".rank-list");

// Register page
const nameInputText = document.getElementById("nameInput");
const nameInputBtn = document.getElementById("nameInputBtn");

// Instructions page
const quitBtn = document.getElementById("quitBtn");
const continueBtn = document.getElementById("continueBtn");

/* Quiz Page */

// timeline
const timeLeftNoText = document.getElementById("timeLeftNoText");
const timeLeftText = document.getElementById("timeLeftText");
const timeLine = document.getElementById("timeLine");

// questions
const question = document.getElementById("questions");
const operands = question.querySelectorAll("p");

// options
const optionsList = document.getElementById("optionList");
const options = optionsList.querySelectorAll(".option");

// Points
const pointsNoText = document.getElementById("pointsNoText");
const showResultsBtn = document.getElementById("showResultsBtn");

// Result Box
const highScoreText = document.getElementById("highScoreText");
const completeText = document.getElementById("completeText");
const scoreText = document.getElementById("scoreText");
const replayBtn = document.getElementById("replayBtn");
const exitQuizBtn = document.getElementById("exitQuizBtn");

// Global Variables
let que_count = 0;
let counter;
let counterLine;
let timerValue = 15; // Set time
let widthValue = 0;
let userScore = 0;
let correctAnswer;
let username;

// Click events
startBtn.onclick = () => {
  var userDataStr = localStorage.getItem("app-user-details");
  var userDataObj = JSON.parse(userDataStr);

  if (userDataObj && userDataObj.name) info_box.classList.add("active");
  else name_box.classList.add("active");
};

leaderboardBtn.onclick = showLeaderBoard;
quitBtn.onclick = () => info_box.classList.remove("active");
showResultsBtn.onclick = showResultBox;

nameInputBtn.onclick = () => {
  var isValid = validateName();
  if (isValid) {
    localStorage.setItem(
      "app-user-details",
      JSON.stringify({ name: username })
    );
  }
};

continueBtn.onclick = () => {
  info_box.classList.remove("active");
  quiz_box.classList.add("active");

  createQuestion();
  setNoOfCompletedQuestionsTo(0);
  startTimerFrom(timerValue);
};

replayBtn.onclick = () => {
  result_box.classList.remove("active");
  info_box.classList.add("active");

  resetQuiz();
};

exitQuizBtn.onclick = () => {
  result_box.classList.remove("active");
  resetQuiz();
};

// Functions
function resetQuiz() {
  que_count = widthValue = userScore = 0;
  timeLeftText.innerText = "Time Left";
  showResultsBtn.style.display = "";

  clearTimer();
  clearSelectedOptions();
}

function validateName() {
  const inputText = nameInputText.value.trim();
  if (inputText == "") {
    nameInputText.value = "";
    return false;
  }

  username = inputText;
  name_box.classList.remove("active");
  info_box.classList.add("active");
  return true;
}

function randomNumber() {
  return Math.floor(Math.random() * 20 + 1);
}

function generateRandomOptions(answer) {
  return Math.floor(Math.random() * answer + Math.floor(answer / 2));
}

function createQuestion() {
  var n1 = (operands[0].innerText = randomNumber());
  var n2 = (operands[1].innerText = randomNumber());

  answer = n1 * n2;
  var randomPosition = Math.floor(Math.random() * 4);

  options.forEach((option, i) => {
    option.innerText =
      randomPosition == i ? answer : generateRandomOptions(answer);
    option.setAttribute("onclick", "optionSelected(this)");
  });
}

function optionSelected(option) {
  clearTimer();

  let userAnswer = option.innerText;

  if (userAnswer != answer) {
    option.classList.add("wrong");
    showResultsBtn.style.display = "block";
    return showCorrectAnswer();
  }

  userScore++;
  createQuestion();
  setNoOfCompletedQuestionsTo(++que_count);
  startTimerFrom(timerValue);
}

function startTimerFrom(time) {
  startTimeLine(time);
  timeLeftNoText.innerText = addZeroToSingleDigit(time);

  counter = setInterval(() => {
    timeLeftNoText.innerText = addZeroToSingleDigit(--time);

    if (time == 0) {
      timeLeftText.innerText = "Time Out";
      clearTimer();
      showCorrectAnswer();
      showResultsBtn.style.display = "block";
    }
  }, 1000);
}

function addZeroToSingleDigit(num) {
  return num < 9 ? "0" + num : num;
}

function clearTimer() {
  clearInterval(counter);
  clearInterval(counterLine);
}

function showCorrectAnswer() {
  options.forEach((option) => {
    if (option.innerText == answer) option.classList.add("correct");
    option.classList.add("disabled");
  });
}

function clearSelectedOptions() {
  options.forEach((option) => {
    option.classList.remove("correct", "wrong", "disabled");
  });
}

function startTimeLine(startTime) {
  const ONE_SEC_TO_MILLI_SEC = 1000;
  const DISTANCE = 100; // 100%
  const FTP = 20;
  const INCREMENT_TIME = DISTANCE / (startTime * FTP);
  const TIMEOUT = ONE_SEC_TO_MILLI_SEC / FTP;

  let time = 0;
  counterLine = setInterval(() => {
    time += INCREMENT_TIME;

    if (time > 100) clearInterval(counterLine);
    else timeLine.style.width = time + "%";
  }, TIMEOUT);
}

function showResultBox() {
  info_box.classList.remove("active");
  quiz_box.classList.remove("active");
  result_box.classList.add("active");

  scoreText.innerText = `You got ${userScore} Points`;
  changeResultText();
}

function setNoOfCompletedQuestionsTo(num) {
  pointsNoText.innerText = num;
}

function changeResultText() {
  // TODO: Adding different text for different situations
  completeText.innerText = `You've completed The Quiz`;
}

function leaderboardListTemplate(index, username, score) {
  return `<div class="list">
    <div class="rank">
      <svg width="25" height="25">
        <use xlink:href="#shield"></use>
      </svg>
      <span>${index}</span>
    </div>
    <div class="name">${username}</div>
    <div class="score">${score}</div>
  </div>`;
}

async function showRankList() {
  const rankList = await getLeaderboardScores();
  rankListDiv.innerHTML = "";

  rankList.forEach(({ name, score }, i) => {
    rankListDiv.innerHTML += leaderboardListTemplate(i + 1, name, score);
  });
}

function showLeaderBoard() {
  document.querySelector(".active").classList.remove("active");
  leaderboardDiv.classList.add("active");
  showRankList();
}
