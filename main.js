const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const completeList = document.getElementById("complete-list");

let todos = ["Buy milk", "Learn React"];
let completes = ["Learn JavaScript"];

window.onload = function () {
  loadTodos();
};

todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") insertTodo();
});

document.getElementById("todo-add").addEventListener("click", insertTodo);

document.addEventListener("click", function (event) {
  const target = event.target.closest("#todo-clear");

  if (target) {
    complete(event);
  }
});

function complete(event) {
  const todo = event.target.parentElement;
  completes.push(todo);
  todo.remove();
  completeList.innerHTML += `<li>${todo.firstChild.nodeValue}</li>`;
}

function insertTodo() {
  todoList.innerHTML += `<li>${todoInput.value}<button id="todo-clear" class="btn-remove">X</button></li>`;
  todoInput.value = "";
}

function loadTodos() {
  todos.forEach((todo) => insertTodos(todo));
  completes.forEach((todo) => insertComplete(todo));
}

function insertTodos(item) {
  todoList.innerHTML += `<li>${item}<button id="todo-clear" class="btn-remove">X</button></li>`;
}

function insertComplete(item) {
  completeList.innerHTML += `<li>${item}</li>`;
}
