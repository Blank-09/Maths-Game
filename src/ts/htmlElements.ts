/**
 * Containers Boxes
 */

export const leaderboard_div = //
  document.querySelector<HTMLDivElement>(".leaderboard-container")!;

export const name_box_div = //
  document.querySelector<HTMLDivElement>(".username-input-container")!;

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

// leaderboard Page
export const rankListDiv = //
  leaderboard_div.querySelector(".rank-list")! as HTMLDivElement;

// Register page
export const nameInputText = //
  document.getElementById("nameInput")! as HTMLInputElement;

export const nameInputBtn = //
  document.getElementById("nameInputBtn")! as HTMLButtonElement;

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
