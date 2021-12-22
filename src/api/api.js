const robotUrl = 'https://jsonplaceholder.typicode.com/users/';
const appUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0arUq6XAeBjZlic2FZXD/';

async function getItemsData() {
  const response = await fetch(robotUrl);
  const data = await response.json();
  return data;
}

const getComments = async (param) => {
  const commentsList = await fetch(`${appUrl}comments?item_id=${param}`);
  return commentsList.json();
};

export { getItemsData, getComments };