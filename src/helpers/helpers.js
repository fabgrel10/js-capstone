import getItemsData from '../api/api';

const displaySection = document.getElementById('main-section__display-data');

function createRobots(data) {
  data.forEach((item) => {
    const robotDiv = document.createElement('div');
    robotDiv.classList.add('main-section__item');
    robotDiv.innerHTML = `
      <div class="main-section__item-img">
        <img src="https://robohash.org/${item.id}?set=set2&size=180x180">
      </div>
      <h2>${item.name}</h2>
      <div class="main-section__item-likes">
        <p>likes</p>
        <i class="fa-solid fa-heart"></i>
      </div>
    `;
    displaySection.appendChild(robotDiv);
  });
}

function renderRobots() {
  const robots = getItemsData();
  robots.then((data) => {
    createRobots(data);
  });
}

export default renderRobots;