import { getLikes } from './api/api';
import renderRobots from './helpers/helpers';

import './scss/app.scss';

window.addEventListener('load', () => {
  renderRobots();
  getLikes();
});
