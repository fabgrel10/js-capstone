/**
 * @jest-environment jsdom
 */

import { apiMock } from '../__mocks__/helpers.js';

describe('count items from API', () => {
  test('count items from API', () => {
    expect(apiMock.length).toBe(3);
  });

  test('name from item 1', () => {
    expect(apiMock[0].name).toBe('Bender');
  });

  test('count likes from item 3', () => {
    expect(apiMock[2].likes).toBe(20);
  });
});
