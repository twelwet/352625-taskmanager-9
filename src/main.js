// main.js

import {getMenuTemplate} from './components/menu.js';
import {getSortListTemplate} from './components/sort-list.js';
import {getSearchTemplate} from './components/search.js';
import {getFiltersTemplate} from './components/filters.js';
import {getTaskTemplate} from './components/task.js';
import {getEditTaskTemplate} from './components/task-edit.js';
import {getLoadMoreBtnTemplate} from './components/load-more-btn.js';

const render = (template, container, placeToPaste = `afterBegin`) => container.insertAdjacentHTML(placeToPaste, template);

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

render(getMenuTemplate(), menuContainer, `beforeEnd`);
render(getSearchTemplate(), searchContainer);
render(getFiltersTemplate(), filtersContainer);
render(getSortListTemplate(), boardContainer);
render(getTaskTemplate(), tasksContainer);
render(getTaskTemplate(), tasksContainer);
render(getTaskTemplate(), tasksContainer);
render(getEditTaskTemplate(), tasksContainer);
render(getLoadMoreBtnTemplate(), boardContainer, `beforeEnd`);
