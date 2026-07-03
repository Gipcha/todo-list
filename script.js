const currentDate = document.getElementById("date");
const inputField = document.getElementById("input-field");
const addTaskButton = document.getElementById("add-task-btn");
const tasksContainer = document.getElementById("tasks-container");
const allButton = document.getElementById("all-tasks");
const doneButton = document.getElementById("done-tasks");
const undoneButton = document.getElementById("undone-tasks");
let tasks = [];
let currentFilter = "all";

addTaskButton.addEventListener("click", () => {
  const text = inputField.value;
  const task = createTask(text);
  tasks.push(task);
  renderAllTasks();
  inputField.value = "";
});

doneButton.addEventListener("click", () => {
  currentFilter = "done";
  renderAllTasks();
});

allButton.addEventListener("click", () => {
  currentFilter = "all";
  renderAllTasks();
});

undoneButton.addEventListener("click", () => {
  currentFilter = "undone";
  renderAllTasks();
});

async function loadTasks() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status:${response.status}`);
    }
    const data = await response.json();
    const newTasks = data.slice(0, 10).map((item) => {
      return {
        text: item.title,
        done: item.completed,
        reminder: false,
      };
    });
    tasks = newTasks;
    renderAllTasks();
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

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
  filterTasks().forEach((task) => {
    renderTask(task);
  });
}

function filterTasks() {
  if (currentFilter === "all") {
    return tasks;
  }
  if (currentFilter === "done") {
    return tasks.filter((task) => task.done === true);
  }
  if (currentFilter === "undone") {
    return tasks.filter((task) => task.done === false);
  }
  return tasks;
}

loadTasks();
