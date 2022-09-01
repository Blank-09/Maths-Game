import { IUserData } from "@/interface/ILocalStorage";
import rankListTemplate from "../template/rankListTemplate";
import { getLeaderboardScores, updateScore } from "./api";
import {
  averageScoreText,
  completeText,
  highscoreText,
  highScoreText,
  info_box_div,
  leaderboardLoadingDiv,
  noOfTimesPlayedText,
  operands,
  options,
  pointsNoText,
  quiz_box_div,
  rankListDiv,
  rankText,
  result_box_div,
  scoreText,
  showResultsBtn,
  timeLeftNoText,
  timeLeftText,
  timeLine,
  usernameText,
} from "./htmlElements";

let que_count = 0;

let counter: NodeJS.Timer;
let counterLine: NodeJS.Timer;
let correctAnswer: string;

export let userScore = 0;
export let username: string;
export const timerValue = 15; // Set time

export function createQuestion() {
  var n1 = (operands[0].innerText = randomNumber());
  var n2 = (operands[1].innerText = randomNumber());

  var answer = +n1 * +n2;
  var randomPosition = Math.floor(Math.random() * 4);
  correctAnswer = String(answer);

  options.forEach((option, i) => {
    option.innerText = String(
      randomPosition == i ? answer : generateRandomOptions(answer)
    );
    option.onclick = function () {
      // @ts-ignore
      optionSelected(this);
    };
  });
}

export function optionSelected(option: HTMLElement) {
  clearTimer();

  let userAnswer = option.innerText;

  if (userAnswer != correctAnswer) {
    option.classList.add("wrong");
    showResultsBtn.style.display = "block";
    updateScore();
    return showCorrectAnswer();
  }

  userScore++;
  createQuestion();
  setNoOfCompletedQuestionsTo(++que_count);
  startTimerFrom(timerValue);
}

export function resetQuiz() {
  que_count = userScore = 0;
  timeLeftText.innerText = "Time Left";
  showResultsBtn.style.display = "";

  clearTimer();
  clearSelectedOptions();
}

export function setNoOfCompletedQuestionsTo(num: number | string) {
  pointsNoText.innerText = num.toString();
}

export async function showRankList() {
  const rankList = await getLeaderboardScores();
  rankListDiv.innerHTML = "";

  leaderboardLoadingDiv.style.display = "none";

  rankList.forEach(({ name, score }, i) => {
    rankListDiv.innerHTML += rankListTemplate(i + 1, name, score);
  });
}

export function showResultBox() {
  info_box_div.classList.remove("active");
  quiz_box_div.classList.remove("active");
  result_box_div.classList.add("active");

  scoreText.innerText = `You got ${userScore} Points`;
  changeResultText();

  var dataStr = localStorage.getItem("app-user-details");
  if (!dataStr) return;

  var data: IUserData = JSON.parse(dataStr);
  highScoreText.innerText = String(data.highscore);
}

export function showUserDetails(obj: IUserData) {
  usernameText.innerText = obj.name;

  rankText.innerText = String(obj.rank ?? "--");
  highscoreText.innerText = String(obj.highscore);
  averageScoreText.innerText = String(obj.averageScore);
  noOfTimesPlayedText.innerText = String(obj.noOfTimesPlayed);
}

export function startTimerFrom(time: number) {
  startTimeLine(time);
  timeLeftNoText.innerText = addZeroToSingleDigit(time);

  counter = setInterval(() => {
    timeLeftNoText.innerText = addZeroToSingleDigit(--time);

    if (time == 0) {
      timeLeftText.innerText = "Time Out";
      showResultsBtn.style.display = "block";

      clearTimer();
      showCorrectAnswer();
    }
  }, 1000);
}

export function validateName(inputTextBox: HTMLInputElement): boolean {
  const inputText = inputTextBox.value.trim();
  return inputText != "";
}

// local functions
function addZeroToSingleDigit(num: number) {
  return String(num <= 9 ? "0" + num : num);
}

function changeResultText() {
  // TODO: Adding different text for different situations
  completeText.innerText = `You've completed The Quiz`;
}

function clearTimer() {
  clearInterval(counter);
  clearInterval(counterLine);
}

function clearSelectedOptions() {
  options.forEach((option) => {
    option.classList.remove("correct", "wrong", "disabled");
  });
}

function randomNumber() {
  return String(Math.floor(Math.random() * 20 + 1));
}

function generateRandomOptions(answer: number) {
  return Math.floor(Math.random() * answer + Math.floor(answer / 2));
}

function showCorrectAnswer() {
  options.forEach((option) => {
    if (option.innerText == correctAnswer) option.classList.add("correct");
    option.classList.add("disabled");
  });
}

function startTimeLine(startTime: number) {
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
