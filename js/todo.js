const todoShow = document.querySelector("#todo-show");
const todoImg = todoShow.querySelector("#todo_img");
const todoBtn = todoImg.querySelector("button");
const todoShowClick = todoShow.querySelector("#todo-show__click");
const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

function todoClick() {
  todoImg.classList.remove("hidden");
}
todoShowClick.addEventListener("click", todoClick);

function btnClose() {
  todoImg.classList.add("hidden");
}
todoBtn.addEventListener("click", btnClose);

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const list = event.target.parentElement;
  list.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(list.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const listItem = document.createElement("li");
  listItem.id = newTodo.id;
  const listSpan = document.createElement("span");
  listSpan.innerText = newTodo.text;
  const listBtn = document.createElement("button");
  listBtn.innerText = "✔️";
  listBtn.addEventListener("click", deleteTodo);
  listItem.appendChild(listSpan);
  listItem.appendChild(listBtn);
  todoList.appendChild(listItem);
}

function todoFormSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", todoFormSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
