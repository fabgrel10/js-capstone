let commentAPI = {};
let likeAPI = {};
const dataAPI = 
  [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
  ];

async function getItemsData() {
  return dataAPI;
}

const postComments = async (itemId, username, comment) => {
  /* eslint-disable-next-line no-unused-vars */
  const newComment = {
    username: username,
    comment: comment,
    creation_date: '2021-12-24'
  }
  if (commentAPI.hasOwnProperty(itemId)) {
    commentAPI.itemId.push(newComment);
  } else {
    commentAPI.itemId = [];
    commentAPI.itemId.push(newComment);
  }
};

const getComments = async (itemId) => {
  if (commentAPI.hasOwnProperty(itemId)) {
    return commentAPI.itemId;
  };
};

// async function likeRobot(robotId) {
//   const response = await fetch(`${involvementAPIUrl}/${appId}/likes/`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       item_id: robotId,
//     }),
//   });
//   const status = await response.status;
//   return status;
// }

// async function getLikes() {
//   const likedItems = await fetch(`${involvementAPIUrl}/${appId}/likes/`)
//     .then((response) => response.json())
//     .then((data) => data);

//   const totalLikes = document.getElementsByClassName('main-section__item-likes-count');
//   const totalLikesArray = Array.from(totalLikes);

//   totalLikesArray.forEach((element) => {
//     const likeId = element.getAttribute('id');
//     const currentSpan = element;
//     likedItems.forEach((e) => {
//       if (likeId === e.item_id) {
//         currentSpan.innerHTML = e.likes;
//       }
//     });
//   });
// }

export {
  getItemsData, getComments, postComments, commentAPI, likeAPI, dataAPI
};

// export {
//   getItemsData, getLikes, likeRobot, getComments, postComments, commentAPI, likeAPI, dataAPI
// };

