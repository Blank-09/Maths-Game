import { getLocalStorageData, register } from "./api";
import {
  createQuestion,
  resetQuiz,
  setNoOfCompletedQuestionsTo,
  showRankList,
  showResultBox,
  showUserDetails,
  startTimerFrom,
  timerValue,
  validateName,
} from "./functions";
import {
  continueBtn,
  exitQuizBtn,
  info_box_div,
  leaderboardBtn,
  leaderboard_div,
  registerNameInputBtn,
  register_box_div,
  quitBtn,
  quiz_box_div,
  rankListExitBtn,
  replayBtn,
  result_box_div,
  showResultsBtn,
  startBtn,
  start_div,
  userDetailsBtn,
  userDetailsExitBtn,
  registerDivExitBtn,
  user_detail_div,
  updateNameBtn,
  update_name_div,
  usernameInputBtn,
  usernameExitBtn,
  registerNameInputBox,
  usernameInputBox,
  registerLoadingDiv,
  usernameLoadingDiv,
} from "./htmlElements";

// Start Page

startBtn.onclick = () => {
  start_div.classList.remove("active");

  const dataObj = getLocalStorageData();

  if (dataObj && dataObj.name) info_box_div.classList.add("active");
  else register_box_div.classList.add("active");
};

leaderboardBtn.onclick = () => {
  start_div.classList.remove("active");
  leaderboard_div.classList.add("active");

  if (navigator.onLine) showRankList();
  else leaderboard_div.querySelector(".loading")?.classList.add("offline");
};

userDetailsBtn.onclick = () => {
  const dataObj = getLocalStorageData();

  if (!(dataObj && dataObj.name))
    return register_box_div.classList.add("active");

  start_div.classList.remove("active");
  user_detail_div.classList.add("active");

  showUserDetails(dataObj);
};

// Leaderboard Page

rankListExitBtn.onclick = () => {
  leaderboard_div.classList.remove("active");
  start_div.classList.add("active");
};

updateNameBtn.onclick = () => {
  update_name_div.classList.add("active");
  user_detail_div.classList.remove("active");

  const json = getLocalStorageData();
  if (json && json.name) showUserDetails(json);
};

// User Settings Page

userDetailsExitBtn.onclick = () => {
  user_detail_div.classList.remove("active");
  start_div.classList.add("active");
};

// Register Page

registerDivExitBtn.onclick = () => {
  register_box_div.classList.remove("active");
  start_div.classList.add("active");
};

registerNameInputBtn.onclick = () => {
  var isValid = validateName(registerNameInputBox);

  if (!isValid) {
    registerNameInputBox.placeholder = "Invalid Name";
    registerNameInputBox.value = "";
    return;
  }

  registerLoadingDiv.classList.add("active");

  var res = register(registerNameInputBox.value);
  if (!res) return console.log("You've already Registered");

  res
    .then(() => {
      register_box_div.classList.remove("active");
      info_box_div.classList.add("active");
      registerLoadingDiv.classList.remove("active");
    })
    .catch((err) => {
      registerLoadingDiv.classList.add("offline");
      console.error(err);
    });
};

// Update Name Page
usernameExitBtn.onclick = () => {
  update_name_div.classList.remove("active");
  user_detail_div.classList.add("active");
};

usernameInputBtn.onclick = () => {
  var isValid = validateName(usernameInputBox);

  if (!isValid) {
    usernameInputBox.placeholder = "Invalid Name";
    usernameInputBox.value = "";
    return;
  }

  usernameLoadingDiv.classList.add("active");

  var res = register(usernameInputBox.value);
  if (!res) return console.log("You've already Registered");

  res
    .then(() => {
      update_name_div.classList.remove("active");
      user_detail_div.classList.add("active");
      usernameLoadingDiv.classList.remove("active");
    })
    .catch((err) => {
      usernameLoadingDiv.classList.add("offline");
      console.error(err);
    });
};

// Instructions Page

quitBtn.onclick = () => {
  info_box_div.classList.remove("active");
  start_div.classList.add("active");
};

continueBtn.onclick = () => {
  info_box_div.classList.remove("active");
  quiz_box_div.classList.add("active");

  createQuestion();
  setNoOfCompletedQuestionsTo(0);
  startTimerFrom(timerValue);
};

// Quiz Page

showResultsBtn.onclick = showResultBox;

// Result Page

replayBtn.onclick = () => {
  result_box_div.classList.remove("active");
  info_box_div.classList.add("active");
  resetQuiz();
};

exitQuizBtn.onclick = () => {
  result_box_div.classList.remove("active");
  start_div.classList.add("active");
  resetQuiz();
};

// Checking for network Status

window.ononline = () => {
  console.log("Online");
};

window.onoffline = () => {
  console.log("Offline");
};
