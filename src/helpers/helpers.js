import { getItemsData, getComments } from '../api/api';

const displaySection = document.getElementById('main-section__display-data');

function renderItem(itemId, itemName) {
  const itemView = document.getElementById('individual-item');
  itemView.innerHTML = `
  <button class="close-item">X</button>
  <div>
    <img src="https://robohash.org/${itemId}?set=set2&size=180x180">
  </div>
  <h2 class="robot-name">${itemName}</h2>
  <ul id="comment-list">

  </ul>
  <input type="text" placeholder="Your name"></input>
  <textarea placeholder="Your insights"></textarea>
  <button class="add-comment">Comment</button>
  `;
  itemView.classList.remove("none");
  itemView.classList.add("absolute");
  const closeBtn = document.getElementsByClassName("close-item");
  closeBtn[0].addEventListener('click', () => {
    itemView.classList.remove("absolute");
    itemView.classList.add("none");
  })
}

function displayComments (itemId) {
  getComments(`item${itemId}`).then((response) => {
    const commentList = document.getElementById("comment-list")
    response.forEach((comment) => {
      console.log(comment);
      const commentItem = document.createElement('LI');
      commentItem.innerHTML = `
        <div>
        ${comment.creation_date} : 
        ${comment.username} <br>
        ${comment.comment}
        </div>
      `;
      commentList.appendChild(commentItem);
    });
  });
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
          <button><i class="fas fa-heart"></i></button>
        </div>
        <div className="main-section__item-likes">
          <p class="main-section__item-likes-count">sssss</p>
        </div>
        <button id='bt${item.id}' class='commentBtn'>Comment</button>
      </div>
    `;
    displaySection.appendChild(robotDiv);
    const commentBtn = document.getElementById(`bt${item.id}`);
    commentBtn.addEventListener('click', () => {
      renderItem(item.id, item.name);
      displayComments(item.id);
    })
  });
}

function renderRobots() {
  const robots = getItemsData();
  robots.then((data) => {
    createRobots(data);
  });
}

export default renderRobots;