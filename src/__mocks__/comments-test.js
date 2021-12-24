
let involmentAPI = {};

const commentsTest = (commentsArr) => {
  document.body.innerHTML = '<ul id ="comments-ul"> </ul>';
  const commentsUl = document.getElementById('comments-ul');

  const commentList = document.createElement('li');
  const commentArr = Array.from(document.querySelectorAll('#comments-ul li'));
  commentsArr.forEach((element) => {
    commentList.innerHTML = `${element.name}: ${element.comment}`;
    commentsUl.appendChild(commentList);
    commentArr.push(commentList);
  });
  return commentArr;
};

// const postComments = async (itemId, username, comment) => {
//   /* eslint-disable-next-line no-unused-vars */
//   const comment = {
//     username: username,
//     comment: comment,
//     creation_date: '2021-12-23'
//   }
//   if (involmentAPI.hasOwnProperty(itemId)) {
//     involmentAPI.itemId.push(comment);
//   } else {
//     involmentAPI.itemId = [];
//     involmentAPI.itemId.push(comment);
//   }
// };

// const getComments = async (itemId) => {
  
//   return commentsList.json();
// };

const apiMock = (id, name, userComment) => {
  const commentsArr = [{
    id: '1',
    name: 'Kate',
    userComment: 'new Comment 1',
  }, {
    id: '2',
    name: 'Mike',
    userComment: 'new Comment 2',
  },
  ];
  const comment = {
    id,
    name,
    userComment,
  };
  commentsArr.push(comment);
  commentsTest(commentsArr);
  return commentsArr;
};

export { apiMock, commentsTest };