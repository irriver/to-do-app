/* ------------------------ Get Selectors ------------------------- */

const form = document.querySelector(".js-form"),
  //querySelector->the first one, querySelectorAll->all in array
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

/* ---------------------- Define Constants ----------------------- */

const USER_LOCAL_STORAGE = "currentUser", //key for storing in local
  SHOWING_CLASS_NAME = "showing"; //class name for attribute

/* --------------------------- Functions --------------------------*/

function saveName(text) {
  localStorage.setItem(USER_LOCAL_STORAGE, text);
}

function handleSubmit(event) {
  event.preventDefault(); //defalt 'submit': result->Document, refresh
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CLASS_NAME);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CLASS_NAME); //hide
  greeting.classList.add(SHOWING_CLASS_NAME);
  greeting.innerText = `Hello, ${text}!`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

/* --------------------------- Main --------------------------- */

function init() {
  loadName();
}

init();
