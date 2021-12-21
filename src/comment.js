export default (() => {
  const createComment = (userName, userComment) => {
    const newComment = {};
    newComment.username = userName;
    newComment.comment = userComment;
  }

  const sendComments = async (userName, userComment) => {
    
  };

  const getComments = async (url) => {
    const comment = await fetch(url);
    return comment.json();
  };

  const displayComments = ((comments) => {
    const commentArray = comments.result;
    const commentDetail = commentArray.map((b) => `
      <li class="list-group-item">${b.user} : ${b.comment}</li>
    `).join('');
    document.getElementById('comments-list').innerHTML = `${commentDetail}`;
  });

  return {
    sendComments,
    getComments,
    displayComments,
  };
})();

