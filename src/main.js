// main.js

import menuTemplate from './components/menu.js';
import sortListTemplate from './components/sort-list.js';
import searchTemplate from './components/search.js';
import filtersTemplate from './components/filters.js';
import tasksTemplate from './components/tasks.js';
import loadMoreBtnTemplate from './components/load-more-btn.js';
import {render} from './utils.js';

const searchNode = document.createElement(`section`);
searchNode.classList.add(`main__search`, `search`, `container`);

const filtersNode = document.createElement(`section`);
filtersNode.classList.add(`main__filter`, `filter`, `container`);

const boardNode = document.createElement(`section`);
boardNode.classList.add(`board`, `container`);

const taskBoardNode = document.createElement(`section`);
taskBoardNode.classList.add(`board__tasks`);

const mainElement = document.querySelector(`.main`);

mainElement.appendChild(searchNode);
mainElement.appendChild(filtersNode);
mainElement.appendChild(boardNode);

const menuContainer = mainElement.querySelector(`.main__control`);
const searchContainer = mainElement.querySelector(`.main__search`);
const filtersContainer = mainElement.querySelector(`.main__filter`);
const boardContainer = document.querySelector(`.board`);

boardContainer.appendChild(taskBoardNode);

const tasksContainer = boardContainer.querySelector(`.board__tasks`);

render(menuTemplate, menuContainer, `beforeEnd`);
render(searchTemplate, searchContainer, `afterBegin`);
render(filtersTemplate, filtersContainer, `afterBegin`);
render(sortListTemplate, boardContainer, `afterBegin`);
render(tasksTemplate, tasksContainer, `afterBegin`);
render(loadMoreBtnTemplate, boardContainer, `beforeEnd`);
