export default function rankListTemplate(
  index: number,
  username: string,
  score: number
) {
  return `
  <div class="list-item">
    <div class="rank">
      <svg width="25" height="25">
        <use xlink:href="#shield"></use>
      </svg>
      <span>${index}</span>
    </div>
    <div class="name">${username}</div>
    <div class="score">${score}</div>
  </div>`.replaceAll(/\s+/g, " ");
}
