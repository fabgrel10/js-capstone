const likeApiMock = [
  {
    id: 1,
    name: 'Bender',
    likes: 0,
  },
  {
    id: 2,
    name: 'Fry',
    likes: 10,
  },
  {
    id: 3,
    name: 'Leela',
    likes: 20,
  },

];

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

const commentApiMock = (id, name, userComment) => {
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

export { likeApiMock, commentsTest, commentApiMock };