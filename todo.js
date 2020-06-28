const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCAL_STORAGE = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LOCAL_STORAGE, JSON.stringify(toDos));
}

function paintToDo(text) {
  const list = document.createElement("li");
  const deleteButton = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  deleteButton.innerText = "\u{2705}";
  deleteButton.addEventListener("click", deleteToDo);
  span.innerText = text;
  list.appendChild(deleteButton);
  list.appendChild(span);
  list.id = newId;
  toDoList.appendChild(list);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadTodos() {
  const loadedToDos = localStorage.getItem(TODOS_LOCAL_STORAGE);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadTodos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
