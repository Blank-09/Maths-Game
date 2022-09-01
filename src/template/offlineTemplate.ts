export default function offlineTemplate() {
  return `
<div class="loading" role="status">
  <div class="spinner-border"></div>
  <div class="status-text">
    <svg style="color: #fd3939" width="80" height="80">
      <use xlink:href="#warning"></use>
    </svg>
    <br />
    Oops! You're Offline
  </div>
</div>`;
}
