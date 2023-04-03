/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = "Lucas"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = myName;

// Step 3: declare and instantiate a variable to hold the current year
const d = new Date();
let year = d.getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.getElementById('year').innerHTML = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPhoto = document.querySelector("img");

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
myPhoto.setAttribute("src", "images/photo.jpeg")



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favFoods = [" Lasagna", " Pizza", " Cookies"]

// Step 2: place the values of the favorite foods variable into the HTML file
document.getElementById('food').innerHTML = favFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
const extraFood =  " Chocolate"

// Step 4: add the variable holding another favorite food to the favorite food array
favFoods.push(extraFood);

// Step 5: repeat Step 2
document.getElementById('food').innerHTML = favFoods;

// Step 6: remove the first element in the favorite foods array
favFoods.shift();

// Step 7: repeat Step 2
document.getElementById('food').innerHTML = favFoods;

// Step 8: remove the last element in the favorite foods array
favFoods.pop();

// Step 7: repeat Step 2
document.getElementById('food').innerHTML = favFoods;


