const currentDate = document.getElementById("date");
const inputField = document.getElementById("input-field");
const addTaskButton = document.getElementById("add-task-btn");
const tasksContainer = document.getElementById("tasks-container");

addTaskButton.addEventListener("click", () => {
  const text = inputField.value;
  const task = {
    text: text,
    done: false,
    reminder: false,
  };
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  taskElement.innerHTML = `
  <input type="checkbox" class="task-checkbox">
  <p>${task.text}</p>
  <button class="remind-btn">⏰</button>
  <button class="delete-task-btn">Delete</button>
`;
  tasksContainer.appendChild(taskElement);
  inputField.value = "";
});
