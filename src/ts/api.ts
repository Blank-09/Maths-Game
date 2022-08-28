import { IAPIData } from "@/interface/IapiData";
import { IUserData } from "@/interface/ILocalStorage";
import { userScore } from "./functions";

const apiURL =
  "https://script.google.com/macros/s/AKfycbzdh-sv8lYNXqo8kvSxufU_hiz_i-IIUt8Dr6KojNYFsD5ZCiNYV7ldgbuGLG2PNNPphg/exec";

export async function register(username: string) {
  if (localStorage.getItem("app-user-details") !== null) return;

  const payload = {
    name: username,
    nuid: 1,
  };

  return new Promise((resolve, reject) => {
    fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.text())
      .then((res) => {
        const json = JSON.parse(res);
        if (json.data.id == null) return reject("Failed");

        localStorage.setItem(
          "app-user-details",
          JSON.stringify({ id: json.data.id, name: username, highscore: 0 })
        );

        resolve(json);
      })
      .catch(reject);
  });
}

export async function updateScore() {
  var userDataStr = localStorage.getItem("app-user-details");
  var data: IUserData;

  if (!userDataStr) return;
  data = JSON.parse(userDataStr);

  if (data.highscore > userScore) return;
  data.highscore = userScore;

  localStorage.setItem("app-user-details", JSON.stringify(data));

  const payload = {
    id: data.id,
    name: data.name,
    score: userScore,
  };

  return await new Promise((resolve, reject) => {
    fetch(apiURL, {
      method: "POST",
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
}

export async function getLeaderboardScores() {
  const request = await fetch(apiURL);
  const data: IAPIData = await request.json();
  return data.data;
}
