// find the list on the page
const toDoList = document.querySelector("#to-do-list");
// listen for a button click from the user
const addItemForm = document.querySelector("#add-item");
// create an array called listItems
const listItems = [];
// add avent listener to the submit button
addItemForm.addEventListener("submit", addNewItem);

// grabs audio files to be played
const addItemAudio = new Audio("./cat-meow.wav");
const clearCompletedAudio = new Audio("./cat_completed.wav");
// targeting the text field so I can reference it in a function
const itemName = document.querySelector(".textField");
// targeting the cat picture so I can reference it in a function
const catPic = document.querySelector("#cat");

// select the bottom-line container
const bottomLine = document.querySelector(".bottom-line");
// select the placeholder
const placeholder = document.querySelector(".placeholder");

// function starts here  - anything declared underneath this point applies to this function only (locally scoped) //
function addNewItem(event) {
  // prevents the page refresh on click
  event.preventDefault();
  // display the bottom line container
  bottomLine.classList.remove("hide");
  // hide the placeholder
  placeholder.classList.add("hide");
  // displays the cat on the bottom left
  catPic.classList.remove("hide");
  catPic.classList.add("bounce");
  // pushes what's been entered in the text field and adding it to the end of the array. ".value" will access the text inside a text field //
  listItems.push(itemName.value);

  // creates a new li somewhere on the page
  const li = document.createElement("li");
  // creates a span which will contain the text of the li
  const span = document.createElement("span");
  // this is placing the text we pushed into the array inside the span
  span.innerText = itemName.value;

  // creating an input
  const checkbox = document.createElement("input");
  // specifying the type of input to be a checkbox
  checkbox.setAttribute("type", "checkbox");
  // adding the checkbox class that will be defaulted to a class of "active"
  checkbox.classList.add("checkbox", "active");
  // add the checkbox and the span inside of a newly created li
  li.append(checkbox, span);

  // adds an li to the to do list
  toDoList.appendChild(li);
  // resets the text field to nothing - the placeholder text will still display because the string is empty
  itemName.value = "";

  // play audio file we grabbed above
  addItemAudio.play();
  // flips the cat picture
  catPic.classList.add("on-submit");
}
// this is where the function ends and all things associated with clicking the "add" button too //

// adds an event listener to the whole document (body of the page) - listen for any click on the page
document.addEventListener("click", function (event) {
  // check if the element that is clicked on has a class of checkbox
  if (event.target.classList.contains("checkbox")) {
    // and run this function if that's the case
    classToggle(event.target);
  }
});
// toggle classes function starts here - to toggle classes between "completed" and "active"
function classToggle(element) {
  // this changes the class of the checkbox element (that we referenced in the checkbox variable)
  element.classList.toggle("completed");
  element.classList.toggle("active");
}
// toggle classes function ends here

const showAllTag = document.querySelector("#show_all");
showAllTag.addEventListener("click", showAll);

//find all elements tagged "completed"
const showCompletedTag = document.querySelector("#show_completed");
// add event listener to this tag
showCompletedTag.addEventListener("click", showCompleted);

//find all elements tagged "active"
const showActiveTag = document.querySelector("#show_active");
// add event listener to this tag
showActiveTag.addEventListener("click", showActive);

// show all function - to set everything in the list to be displayed
function showAll() {
  // select all the li on the page
  const showListItems = document.querySelectorAll("li");
  // this creates a for loop (for every time in this array, do something...) - for each list item, run this loop
  for (let i = 0; i < showListItems.length; ++i) {
    showListItems[i].style.display = "flex";
  }
}
// show all ends here

// hide all function - to set everything in the list to be hidden
function hideAll() {
  // select all the li on the page
  const listItems = document.querySelectorAll("li");
  // this creates a for loop (for every time in this array, do something...) - for each list item, run this loop
  for (let i = 0; i < listItems.length; ++i) {
    listItems[i].style.display = "none";
  }
}
// hide all function ends here

// show completed items function starts here

function showCompleted() {
  // calling the hideAll function so that it hides every li on the page by default
  hideAll();
  // select every checkbox with a class of completed
  const checkboxList = document.querySelectorAll(".checkbox.completed");
  // increment 'i' by 1, while 'i' is smaller than the list length, starting with a value of 0
  for (let i = 0; i < checkboxList.length; i++) {
    // display each element with a class of completed (checkbox parent) on the page
    checkboxList[i].parentNode.style.display = "flex";
  }
  if (checkboxList.length == 0) {
    alert("You haven't completed anything RAWR 🐯");
  }
}
// show completed items function ends here

// show active items function starts here

function showActive() {
  // calling the hideAll function so that it hides every li on the page by default
  hideAll();
  const checkboxList = document.querySelectorAll(".checkbox.active");
  // increment 'i' by 1, while 'i' is smaller than the list length, starting with a value of 0
  for (let i = 0; i < checkboxList.length; i++) {
    // display each element with a class of active (checkbox parent) on the page
    checkboxList[i].parentNode.style.display = "flex";
  }
}

// the clearCompleted function starts here

function clearCompleted() {
  // targets all the elements on the document with a class of "completed" and stores them in a list called "completedElements"
  const completedElements = document.querySelectorAll(".completed");

  for (let i = 0; i < completedElements.length; i++) {
    // remove the current element from the document - we're targeting the parent so it doesn't remove the checkbox only
    completedElements[i].parentNode.remove();
  }

  clearCompletedAudio.play();
}
// the clearCompleted function ends here

const clearCompletedButton = document.querySelector("#clear-complete-btn");
clearCompletedButton.addEventListener("click", clearCompleted);

// 1. search the list for all completed li - go through checkboxes again and check for completed classes
// 2. we want to prevent them from reappearing when you click show all, so better to remove them from the page - https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
