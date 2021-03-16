
    // What is the user doing:
    // 1. Typing a shopping item in the input box
    // 2. Clicking on the Add Item button

    // What must we do with JS:

    // WRITE WHAT FUNCTIONS EACH OF THESE STEPS REQUIRE
    // 1. listen for a button click from the user
    var addItemBtn = document.querySelector('#add-item-btn')
    
    // 4. find the list on the page
    var shoppingList = document.querySelector('.shopping-list')
    // creating empty shopping item array
    var shoppingItems = []
    addItemBtn.addEventListener('click', function (event) {
      // 1. a) prevent the page refresh on click
      event.preventDefault()
      // 2. find the item from the input
      // 3. store the item in a variable
      var itemName = document.querySelector('.item')
      // add item name to the array of shopping items
      shoppingItems.push(itemName.value)
      // 5. add item to the list
      shoppingList.innerHTML += '<li>' + itemName.value + '</li>'
      itemName.value = ''
    })
    var sortButton = document.querySelector('#sort-btn')
    sortButton.addEventListener('click', function (event) {
      event.preventDefault()
      // 1.) sort the array
      shoppingItems.sort()
      // 2.) display the contents of the array
      // clear shopping list
      shoppingList.innerHTML = ''
      for (var i = 0; i < shoppingItems.length; i++) {
        shoppingList.innerHTML += '<li>' + shoppingItems[i] + '</li>'
      }
    })
