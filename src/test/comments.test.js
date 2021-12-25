/**
 * @jest-environment jsdom
 */
// import { commentApiMock, commentsTest } from '../__mocks__/helpers.js';
import {
  getItemsData, getComments, postComments, getLikes, likeRobot, dataAPI, commentAPI
} from '../__mocks__/api.js';

import {
  displayDetails, addComment, displayComments
} from '../helpers/helpers.js';


describe('display details of each item', () => {
  const detailsContainer = document.createElement("DIV");
  // detailsContainer.setAttribute("id", "details");
  displayDetails(dataAPI[0], detailsContainer);
  test('Display robot\'s city', () => {
    expect(detailsContainer.outerHTML).toContain(dataAPI[0].address.city);
  });
  test('Display robot\'s brand', () => {
    expect(detailsContainer.outerHTML).toContain(dataAPI[0].company.name);
  });
  test('Display robot\'s industry', () => {
    expect(detailsContainer.outerHTML).toContain(dataAPI[0].company.bs);
  });
  test('Display robot\'s specialty', () => {
    expect(detailsContainer.outerHTML).toContain(dataAPI[0].company.catchPhrase);
  });
  test('Robot 1 city is different of robot 2', () => {
    expect(detailsContainer.outerHTML).not.toContain(dataAPI[1].address.city);
  });
  test('Robot 1 brand is different of robot 2', () => {
    expect(detailsContainer.outerHTML).not.toContain(dataAPI[1].company.name);
  });
  test('Robot 1 industry is different of robot 2', () => {
    expect(detailsContainer.outerHTML).not.toContain(dataAPI[1].company.bs);
  });
  test('Robot 1 specialty is different of robot 2', () => {
    expect(detailsContainer.outerHTML).not.toContain(dataAPI[1].company.catchPhrase);
  });
});

describe('Create and display comments', () => {
  const inputName = document.createElement("INPUT");
  const inputComment = document.createElement("TEXTAREA");
  const commentList = document.createElement("DIV");
  const commentCount = document.createElement("DIV");
  inputName.value = "Juan";
  inputComment.value = "Robots are awesome!";
  addComment (1, postComments, getComments, inputName, inputComment, commentList, commentCount);
  test('Robot 1 specialty is different of robot 2', () => {
    expect(commentAPI).toContain("Robots are awesome!");
  });
});
