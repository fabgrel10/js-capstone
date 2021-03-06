import {
  getItemsData, getComments, postComments, getLikes, likeRobot,
} from '../api/api.js';

const displaySection = document.getElementById('main-section__display-data');
const robotsTotal = document.querySelector('#nav-robots-total');

function refreshLikes() {
  const totalLikes = document.getElementsByClassName('main-section__item-likes-count');
  const totalLikesArray = Array.from(totalLikes);

  totalLikesArray.forEach((element) => {
    const likeId = element.getAttribute('id');
    const currentSpan = element;
    getLikes().then((data) => {
      data.forEach((e) => {
        if (likeId === e.id) {
          currentSpan.innerHTML = e.likes;
        }
      });
    });
  });
}

function displayComments(itemId) {
  const commentCount = document.getElementById('comment-counter');
  const commentList = document.getElementById('comment-list');
  getComments(`item${itemId}`)
    .then((response) => {
      commentCount.innerHTML = `Comments(${response.length})`;
      response.forEach((comment) => {
        const commentItem = document.createElement('LI');
        commentItem.innerHTML = `
          <div><b>
          ${comment.creation_date} -
          ${comment.username}</b><br>
          <i>${comment.comment}</i>
          </div>
        `;
        commentList.appendChild(commentItem);
      });
    })
    .catch(() => {
      commentCount.innerHTML = 'Comments(0)';
    });
}

function renderItem(itemId, itemName) {
  const itemView = document.getElementById('individual-item');
  itemView.innerHTML = `
  <button class="close-item">X</button>
  <div>
    <img src="https://robohash.org/${itemId}?set=set1&size=180x180">
  </div>
  <h2 class="robot-name">${itemName}</h2>
  <div id="details">

  </div>
  <div id="comment-counter"> </div>
  <ul id="comment-list">

  </ul>
  <input class="inputName" type="text" placeholder="Your name"></input>
  <textarea class="inputComment" placeholder="Your insights"></textarea>
  <button class="add-comment-btn">Add Comment</button>
  `;
  itemView.classList.remove('none');
  itemView.classList.add('absolute');
  const closeBtn = document.getElementsByClassName('close-item');
  closeBtn[0].addEventListener('click', () => {
    itemView.classList.remove('absolute');
    itemView.classList.add('none');
  });
  const addCommentBtn = document.getElementsByClassName('add-comment-btn');
  addCommentBtn[0].addEventListener('click', () => {
    const inputName = document.getElementsByClassName('inputName');
    const inputComment = document.getElementsByClassName('inputComment');
    postComments(itemId, inputName[0], inputComment[0]).then(() => {
      const commentList = document.getElementById('comment-list');
      commentList.innerHTML = '';
      displayComments(itemId);
    });
  });
}

function displayDetails(item) {
  const detailContainer = document.getElementById('details');
  detailContainer.innerHTML = `
  <p><b>City:</b> ${item.address.city}</p>
  <p><b>Brand:</b> ${item.company.name}</p>
  <p><b>Industry:</b> ${item.company.bs}</p>
  <p><b>Specialty:</b> ${item.company.catchPhrase}</p>
  `;
}

function createRobots(data) {
  data.forEach((item) => {
    const robotDiv = document.createElement('div');
    robotDiv.classList.add('main-section__item');
    robotDiv.innerHTML = `
      <div className="main-section__item-container">
        <div class="main-section__item-img">
          <img src="https://robohash.org/${item.id}?set=set2&size=180x180">
        </div>
        <div class="main-section__item-name">
          <h2>${item.name}</h2>
          <button id=${item.id}><i class="fas fa-heart"></i></button>
        </div>
        <div className="main-section__item-likes">
          <p class="main-section__item-likes-count" id=${item.id}>0</p>
        </div>
        <div class="main-section__item-comment-container">
          <button id='bt${item.id}' class="main-section__item-comment-button">Comments</button>
        </div>
      </div>
    `;
    displaySection.appendChild(robotDiv);
    const commentBtn = document.getElementById(`bt${item.id}`);
    commentBtn.addEventListener('click', () => {
      renderItem(item.id, item.name);
      displayComments(item.id);
      displayDetails(item);
    });
  });

  const likeButton = document.querySelectorAll('.main-section__item-name button');

  likeButton.forEach((button) => {
    button.addEventListener('click', (e) => {
      likeRobot(e.target.parentElement.id);
      refreshLikes();
    });
  });
}

function renderRobots() {
  displaySection.innerHTML = '';
  const robots = getItemsData();
  robots.then((data) => {
    robotsTotal.innerHTML = data.length;
    createRobots(data);
  });
}

export default renderRobots;