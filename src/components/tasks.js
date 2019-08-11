// tasks.js

import taskTemplate from './task.js';
import editTaskTemplate from './task-edit.js';

const getTasksTemplate = (count) => {
  let template = editTaskTemplate;
  let i = 0;
  do {
    template += taskTemplate;
    i += 1;
  } while (i < count);

  return template;
};

const tasksTemplate = getTasksTemplate(3);

export default tasksTemplate;
