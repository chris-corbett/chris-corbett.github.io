const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");

todoInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") insertTodo();
});

document.getElementById("todo-add").addEventListener("click", insertTodo);

document.addEventListener("click", function(event) {
    const target = event.target.closest("#todo-clear");

    if (target) {
        event.target.parentElement.remove();
    }
});


function insertTodo() {
    todoList.innerHTML += `<li>${todoInput.value}<button id="todo-clear">X</button></li>`;
    todoInput.value = "";
}