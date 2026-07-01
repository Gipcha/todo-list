const currentDate = document.getElementById("date");
const inputField = document.getElementById("input-field");
const addTaskButton = document.getElementById("add-task-btn");
const tasksContainer = document.getElementById("tasks-container");
let tasks = [];

addTaskButton.addEventListener("click", () => {
  const text = inputField.value;
  const task = createTask(text);
  tasks.push(task);
  renderAllTasks();
  inputField.value = "";
});

function createTask(text) {
  return {
    id: Date.now(),
    text: text,
    done: false,
    reminder: false,
  };
}

function renderTask(task) {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  taskElement.innerHTML = `
  <input type="checkbox" class="task-checkbox">
  <p>${task.text}</p>
  <button class="remind-btn">⏰</button>
  <button class="delete-task-btn">Delete</button>
`;
  tasksContainer.appendChild(taskElement);
  const checkbox = taskElement.querySelector(".task-checkbox");

  checkbox.addEventListener("change", () => {
    const foundTask = tasks.find((t) => t.id === task.id);
    foundTask.done = checkbox.checked;
    taskElement.classList.toggle("done", foundTask.done);
  });
  const deleteBtn = taskElement.querySelector(".delete-task-btn");
  deleteBtn.addEventListener("click", () => {
    tasks = tasks.filter((t) => t.id !== task.id);
    taskElement.remove();
  });
}

function renderAllTasks() {
  tasksContainer.innerHTML = "";
  tasks.forEach((task) => {
    renderTask(task);
  });
}
