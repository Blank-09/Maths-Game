const apiURL =
  "https://script.google.com/macros/s/AKfycbzdh-sv8lYNXqo8kvSxufU_hiz_i-IIUt8Dr6KojNYFsD5ZCiNYV7ldgbuGLG2PNNPphg/exec";

async function register(username) {
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
          JSON.stringify({ id: json.data.id, username, highscore: 0 })
        );
        resolve("Success");
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}

async function updateScore() {
  var data = JSON.parse(localStorage.getItem("app-user-details"));
  if (data.highscore > userScore) return;
  data.highscore = userScore;

  localStorage.setItem("app-user-details", JSON.stringify(data));

  const payload = {
    id: data.id,
    name: data.username,
    score: userScore,
  };

  fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(payload),
  })
    .then((res) => res.text())
    .then((res) => console.log(res));
}

async function getLeaderboardScores() {
  const request = await fetch(apiURL);
  const data = await request.json();
  return data.data;
}
