/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
console.log(menuItems)
/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/



const menuMaker = (array) => {
  const menu = document.createElement('div')
  const listParent = document.createElement('ul')
  const listItem1 = document.createElement('li')
  const listItem2 = document.createElement('li')
  const listItem3 = document.createElement('li')
  const listItem4 = document.createElement('li')
  const listItem5 = document.createElement('li')
  const listItem6 = document.createElement('li')

  menu.appendChild(listParent)
  listParent.appendChild(listItem1)
  listParent.appendChild(listItem2)
  listParent.appendChild(listItem3)
  listParent.appendChild(listItem4)
  listParent.appendChild(listItem5)
  listParent.appendChild(listItem6)

  listItem1.textContent = array[0]
  listItem2.textContent = array[1]
  listItem3.textContent = array[2]
  listItem4.textContent = array[3]
  listItem5.textContent = array[4]
  listItem6.textContent = array[5]


  menu.classList.add('menu')

  const menuBtn = document.querySelector('.menu-button');

  menuBtn.addEventListener('click', () => {
    menu.classList.toggle("menu--open")
  })


  return menu;
}

const header = document.querySelector('.header');

header.appendChild(menuMaker(menuItems));