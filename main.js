
    // What is the user doing:
    // 1. Typing a to do list item in the input box
    // 2. Clicking on the Add button

    // What must we do with JS:

    // WRITE WHAT FUNCTIONS EACH OF THESE STEPS REQUIRE

    // 1. listen for a button click from the user
    var addItemBtn = document.querySelector('#submit-btn')
    
    // 4. find the list on the page
    var toDoList = document.querySelector('#to-do-list')

    // creating empty shopping item array
    var listItems = []
    addItemBtn.addEventListener('click', function (event) {
// prevent the page refresh on click
      event.preventDefault()

      // 2. find the item from the input
      // 3. store the item in a variable
      var itemName = document.querySelector('.textField')

      // add item name to the array of shopping items
      listItems.push(itemName.value)



      // 5. add item to the list
      toDoList.innerHTML += '<li>' + itemName.value + '</li>'
      itemName.value = ''
    })

    // play audio on button click
    var audio = new Audio("https://soundcloud.com/nokia-design-team/cat");

document.onclick = function() {
  audio.play();
}

// cross off list item if the user completes the task and ticks the box
// display all items if user clicks on "all"
// display completed items if user clicks on "completed"
// display active items if user clicks on "active"


