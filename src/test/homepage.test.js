/**
 * @jest-environment jsdom
 */

import { likeApiMock } from '../__mocks__/helpers.js';

describe('Retrieves likes from API', () => {
  test('count items from API', () => {
    expect(likeApiMock.length).toBe(3);
  });

  test('name from item 1', () => {
    expect(likeApiMock[0].name).toBe('Bender');
  });

  test('count likes from item 3', () => {
    expect(likeApiMock[2].likes).toBe(20);
  });
});
