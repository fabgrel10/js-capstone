import { getLikes, postComments, getComments } from './api/api.js';
import { renderRobots } from './helpers/helpers.js';

import './scss/app.scss';

window.addEventListener('load', () => {
  renderRobots(getLikes, postComments, getComments);
  getLikes();
});
