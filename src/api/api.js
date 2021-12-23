const customAPIUrl = 'https://jsonplaceholder.typicode.com/users/';
const involvementAPIUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'y4TwwmDxqwj3mg9nZSqM';

async function getItemsData() {
  const response = await fetch(customAPIUrl);
  const data = await response.json();
  return data;
}

const postComments = async (itemId, username, comment) => {
  /* eslint-disable-next-line no-unused-vars */
  const postResult = await fetch(`${involvementAPIUrl}/${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: `item${itemId}`,
      username: username.value,
      comment: comment.value,
    }),
  });
  username.value = '';
  comment.value = '';
};

const getComments = async (param) => {
  const commentsList = await fetch(`${involvementAPIUrl}/${appId}/comments?item_id=${param}`);
  return commentsList.json();
};

async function likeRobot(robotId) {
  const response = await fetch(`${involvementAPIUrl}/${appId}/likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: robotId,
    }),
  });
  const status = await response.status;
  return status;
}

async function getLikes() {
  const likedItems = await fetch(`${involvementAPIUrl}/${appId}/likes/`)
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

export {
  getItemsData, getLikes, likeRobot, getComments, postComments,
};
