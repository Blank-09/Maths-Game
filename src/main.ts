import "./ts/eventHandlers";

import Tooltip from "bootstrap/js/dist/tooltip";

document
  .querySelectorAll('[data-bs-toggle="tooltip"]')
  .forEach((tooltipEle) => new Tooltip(tooltipEle));