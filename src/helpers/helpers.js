import { getItemsData, getLikes, likeRobot } from '../api/api';

const displaySection = document.getElementById('main-section__display-data');

function createRobots(data) {
  console.log(getLikes());
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
      </div>
    `;
    displaySection.appendChild(robotDiv);
  });

  const likeButton = document.querySelectorAll('.main-section__item-name button');

  likeButton.forEach((button) => {
    button.addEventListener('click', (e) => {
      likeRobot(e.target.parentElement.id);
    });
    getLikes();
  });
}

function renderRobots() {
  const robots = getItemsData();
  robots.then((data) => {
    createRobots(data);
  });
}

export default renderRobots;