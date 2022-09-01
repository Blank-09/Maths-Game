/**
 * Containers Boxes
 */

export const start_div = //
  document.querySelector<HTMLDivElement>(".start-container")!;

export const user_detail_div = //
  document.querySelector<HTMLDivElement>(".user-details")!;

export const leaderboard_div = //
  document.querySelector<HTMLDivElement>(".leaderboard-container")!;

export const register_box_div = //
  document.querySelector<HTMLDivElement>(".register-container")!;

export const update_name_div = //
  document.querySelector<HTMLDivElement>(".update-container")!;

export const info_box_div = //
  document.querySelector<HTMLDivElement>(".instructions-container")!;

export const quiz_box_div = //
  document.querySelector<HTMLDivElement>(".quiz-box")!;

export const result_box_div = //
  document.querySelector<HTMLDivElement>(".result-box")!;

// Start Section
export const startBtn = //
  document.getElementById("startBtn")! as HTMLButtonElement;

export const leaderboardBtn = //
  document.getElementById("leaderboardBtn")! as HTMLButtonElement;

export const userDetailsBtn = //
  start_div.querySelector(".user")! as HTMLDivElement;

// User Details section
export const userDetailsExitBtn = //
  user_detail_div.querySelector("#userDetailsExitBtn")! as HTMLElement;

export const usernameText = //
  user_detail_div.querySelector("#usernameText")! as HTMLDivElement;

export const highscoreText = //
  user_detail_div.querySelector("#highscoreText")! as HTMLDivElement;

export const averageScoreText = //
  user_detail_div.querySelector("#averageScoreText")! as HTMLDivElement;

export const noOfTimesPlayedText = //
  user_detail_div.querySelector("#noOfTimesPlayedText")! as HTMLDivElement;

export const rankText = //
  user_detail_div.querySelector("#rankText")! as HTMLSpanElement;

export const updateNameBtn = //
  user_detail_div.querySelector("#updateNameBtn")! as HTMLButtonElement;

// leaderboard Page
export const rankListDiv = //
  leaderboard_div.querySelector(".rank-list > .list")! as HTMLDivElement;

export const leaderboardLoadingDiv = //
  leaderboard_div.querySelector(".loading")! as HTMLDivElement;

export const rankListExitBtn = //
  leaderboard_div.querySelector("#rankListExitBtn")! as HTMLElement;

// Register page
export const registerNameInputBox = //
  document.getElementById("registerNameInputBox")! as HTMLInputElement;

export const registerNameInputBtn = //
  document.getElementById("registerNameInputBtn")! as HTMLButtonElement;

export const registerDivExitBtn = //
  document.getElementById("registerDivExitBtn")! as HTMLButtonElement;

export const registerLoadingDiv = //
  register_box_div.querySelector(".loading")! as HTMLDivElement;

// Update page
export const usernameInputBox = //
  document.getElementById("usernameInputBox")! as HTMLInputElement;

export const usernameInputBtn = //
  document.getElementById("usernameInputBtn")! as HTMLButtonElement;

export const usernameExitBtn = //
  document.getElementById("usernameDivExitBtn")! as HTMLButtonElement;

  export const usernameLoadingDiv = //
  update_name_div.querySelector(".loading")! as HTMLDivElement;

// Instructions page
export const quitBtn = //
  document.getElementById("quitBtn")! as HTMLButtonElement;

export const continueBtn = //
  document.getElementById("continueBtn")! as HTMLButtonElement;

/* Quiz Box */

// timeline
export const timeLeftNoText = //
  document.getElementById("timeLeftNoText")! as HTMLDivElement;

export const timeLeftText = //
  document.getElementById("timeLeftText")! as HTMLDivElement;

export const timeLine = //
  document.getElementById("timeLine")! as HTMLDivElement;

// questions
export const question = //
  document.getElementById("questions")! as HTMLDivElement;

export const operands = question.querySelectorAll<HTMLParagraphElement>("p")!; //

// options
export const optionsList = //
  document.getElementById("optionList")! as HTMLUListElement;

export const options = optionsList.querySelectorAll<HTMLLIElement>(".option")!; //

// Points
export const pointsNoText = //
  document.getElementById("pointsNoText")! as HTMLDivElement;

export const showResultsBtn = //
  document.getElementById("showResultsBtn")! as HTMLButtonElement;

// Result Box
export const highScoreText = //
  document.getElementById("highScoreText")! as HTMLDivElement;

export const completeText = //
  document.getElementById("completeText")! as HTMLDivElement;

export const scoreText = //
  document.getElementById("scoreText")! as HTMLDivElement;

export const replayBtn = //
  document.getElementById("replayBtn")! as HTMLButtonElement;

export const exitQuizBtn = //
  document.getElementById("exitQuizBtn")! as HTMLButtonElement;
