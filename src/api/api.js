const robotUrl = 'https://jsonplaceholder.typicode.com/users/';
const appUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0arUq6XAeBjZlic2FZXD/';

async function getItemsData() {
  const response = await fetch(robotUrl);
  const data = await response.json();
  return data;
}

const postComments = async (itemId, username, comment) => {
  const postResult = await fetch(`${appUrl}comments`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: `item${itemId}`,
      username: username.value,
      comment: comment.value
    }),
  });
  username.value = '';
  comment.value = '';
};

const getComments = async (param) => {
  const commentsList = await fetch(`${appUrl}comments?item_id=${param}`);
  return commentsList.json();
};

export { getItemsData, getComments, postComments };