/**
 * @jest-environment jsdom
 */
import { commentApiMock, commentsTest } from '../__mocks__/helpers.js';

describe('Add a new comment to API', () => {
  test('Add a new comment', () => {
    expect(commentApiMock(2, 'userName', 'comment').length).toBe(3);
  });

  test('Get count of comments', () => {
    const commentsArr = [{
      id: '1',
      name: 'Kate',
      userComment: 'new Comment',
    }, {
      id: '2',
      name: 'Mike',
      userComment: 'new Comment',
    },
    ];
    expect(commentsTest(commentsArr).length).toBe(2);
  });
});