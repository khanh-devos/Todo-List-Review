import Data from "./__mock__/mockData.js";

export const addNew = (description) => {
  const data = new Data();
  const tasks = data.getData();
  const newTask = {
    index: tasks.length + 1,
    description,
    completed: false,
  };

  if (newTask.description.length > 0) {
    tasks.push(newTask);
    data.setData(tasks);
  }

  if (newTask.description.length > 0) {
    const check = data.getData();
    return check[check.length - 1];
  }
  throw new Error("task cannot be an empty string");
};

export const deleteTasks = (checks) => {
  // const checks = document.querySelectorAll('input[type="checkbox"]');
  const data = new Data();
  const checkeds = [];
  checks.forEach((e) => {
    if (e.checked) checkeds.push(e.name);
  });

  if (checkeds.length > 0) {
    data.deleteArrOfIndex(checkeds);
  }

  // for testing
  if (checkeds.length > 0) {
    const checkTasks = data.getData();
    return checkTasks;
  }
  throw new Error("no task completed");
};
