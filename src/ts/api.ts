import { IAPIData } from "@/interface/IapiData";
import { IUserData } from "@/interface/ILocalStorage";
import { userScore } from "./functions";

const location = window.location.hostname;
const apiURL =
  "https://script.google.com/macros/s/AKfycbz8vXR3g9KmyXHVlxFcLfcJn6yEYdX96PKEyPf8vFRuhgCfqkhThgegD48Az1fpMOdncg/exec";

export const localStorageKey = "app-user-details";


export function register(username: string) {
  if (localStorage.getItem(localStorageKey) !== null) return;

  const payload = {
    name: username,
    nuid: 1,
    ref: location,
  };

  return new Promise((resolve, reject) => {
    fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status == 200) return res.text();
        throw "Failed to Post";
      })
      .then((res) => {
        const json = JSON.parse(res);
        if (json.data.id == null) return reject("Failed");

        setLocalStorageData({
          id: json.data.id,
          name: username,
          highscore: 0,
          averageScore: 0,
          noOfTimesPlayed: 0,
        })

        resolve(json);
      })
      .catch(reject);
  });
}

export async function updateScore() {  
  if (userScore == 0) return;

  const data = getLocalStorageData();
  if (data == null) return;

  const { averageScore, highscore } = data;

  data.averageScore =
    averageScore != 0 //
      ? Math.round((averageScore + userScore) / 2)
      : userScore;

  if (data.averageScore != 0)
    data.noOfTimesPlayed += 1;

  if (+highscore > +userScore) return setLocalStorageData(data);
  data.highscore = userScore;

  setLocalStorageData(data);

  const payload = {
    id: data.id,
    name: data.name,
    score: userScore,
    ref: location,
  };

  return await new Promise((resolve, reject) => {
    fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        var userData = getLocalStorageData();
        if (data.rank && userData) {
          userData.rank = data.rank;
          setLocalStorageData(userData);
        }
        resolve(data);
      })
      .catch(reject);
  });
}

export async function getLeaderboardScores() {
  const request = await fetch(apiURL);
  const data: IAPIData = await request.json();
  return data.data;
}

function setLocalStorageData(data: IUserData) {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
}

export function getLocalStorageData(): IUserData | null {
  return JSON.parse(localStorage.getItem(localStorageKey)!);
}
