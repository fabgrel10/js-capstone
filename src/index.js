import './scss/app.scss';
import comment from './comment.js';

const cmtBtn = document.getElementById('button-1');
const userName = document.getElementById('input-1');
const userComment = document.getElementById('insight-1');

cmtBtn.addEventListener('click', () => {
  comment.sendComments(userName, userComment);
});

// refreshBtn.addEventListener('click', () => {
//   api.getScore(url).then((data) => { api.displayScores(data); });
// });