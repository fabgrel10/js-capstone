const customAPIUrl = 'https://jsonplaceholder.typicode.com/users/';
const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'y4TwwmDxqwj3mg9nZSqM';
const retrieveLikes = `${involvementUrl}/${appId}/likes/`;

async function getItemsData() {
  const response = await fetch(customAPIUrl);
  const data = await response.json();
  return data;
}

async function likeRobot(robotId) {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y4TwwmDxqwj3mg9nZSqM/likes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: robotId,
    }),
  });
  const status = await response.status;
  console.log(status);
  return status;
}

async function getLikes() {
  const likedItems = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y4TwwmDxqwj3mg9nZSqM/likes/')
    .then((response) => response.json())
    .then((data) => data);

  const totalLikes = document.getElementsByClassName('main-section__item-likes-count');
  const totalLikesArray = Array.from(totalLikes);

  totalLikesArray.forEach((element) => {
    const likeId = element.getAttribute('id');
    const currentSpan = element;
    likedItems.forEach((e) => {
      if (likeId === e.item_id) {
        currentSpan.innerHTML = e.likes;
      }
    });
  });
}

export { getItemsData, getLikes, likeRobot };