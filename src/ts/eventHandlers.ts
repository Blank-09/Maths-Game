import { register } from "./api";
import {
  createQuestion,
  resetQuiz,
  setNoOfCompletedQuestionsTo,
  showRankList,
  showResultBox,
  startTimerFrom,
  timerValue,
  username,
  validateName,
} from "./functions";
import {
  continueBtn,
  exitQuizBtn,
  info_box_div,
  leaderboardBtn,
  leaderboard_div,
  nameInputBtn,
  nameInputText,
  name_box_div,
  quitBtn,
  quiz_box_div,
  replayBtn,
  result_box_div,
  showResultsBtn,
  startBtn,
} from "./htmlElements";

startBtn.onclick = () => {
  const userDataStr = localStorage.getItem("app-user-details");

  let userDataObj;
  if (userDataStr !== null) userDataObj = JSON.parse(userDataStr);

  if (userDataObj && userDataObj.name) info_box_div.classList.add("active");
  else name_box_div.classList.add("active");
};

leaderboardBtn.onclick = () => {
  document.querySelector(".active")?.classList.remove("active");
  leaderboard_div.classList.add("active");
  showRankList();
};

quitBtn.onclick = () => info_box_div.classList.remove("active");
showResultsBtn.onclick = showResultBox;

nameInputBtn.onclick = () => {
  var isValid = validateName();
  if (isValid) register(nameInputText.value);
};

continueBtn.onclick = () => {
  info_box_div.classList.remove("active");
  quiz_box_div.classList.add("active");

  createQuestion();
  setNoOfCompletedQuestionsTo(0);
  startTimerFrom(timerValue);
};

replayBtn.onclick = () => {
  result_box_div.classList.remove("active");
  info_box_div.classList.add("active");
  resetQuiz();
};

exitQuizBtn.onclick = () => {
  result_box_div.classList.remove("active");
  resetQuiz();
};
