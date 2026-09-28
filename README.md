# 📝 To-Do List

A task management application built with vanilla JavaScript.

The application allows users to create and manage tasks, filter them by status,
store data between sessions, and load initial data from an external REST API.
## 🔗 Live Demo

[View Live Demo](https://gipcha.github.io/todo-list/)

## ✨ Features

- Create and delete tasks
- Mark tasks as completed or active
- Filter tasks by status: All / Done / Undone
- Select a date for a task
- Store tasks in LocalStorage
- Load initial task data from JSONPlaceholder
- Display toast notifications
- Responsive interface

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API
- REST API
- JSON
- LocalStorage
- Git

## 📸 Preview

![To-Do List preview](./assets/screenshot.png)

## 🔧 Implementation

The application uses JavaScript to manage task state and update the DOM dynamically.

On the initial visit, task data is requested from JSONPlaceholder using the Fetch API.
After that, user-created data is persisted in LocalStorage so tasks remain available
between browser sessions.

Filtering is handled on the client side without reloading the page.

## ▶️ Run Locally

Clone the repository:

```bash
git clone https://github.com/Gipcha/todo-list.git
```

Navigate to the project directory:

```bash
cd todo-list
```

Then open `index.html` in your browser.
