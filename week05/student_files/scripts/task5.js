/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let newDate = new Date();
// Step 2: Declare another variable to hold the day of the week
let dayOfWeek = newDate.getDay();
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
dayOfWeek = days[newDate.getDay()];
// Step 4: Declare a variable to hold a message that will be displayed
let message;
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek >= 1&& dayOfWeek <= 5){
	message = 'Hang in there!';
}
  
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
	message = 'Woohoo! It is the weekend!';
}
console.log(message);
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let anotherMessage
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
	case 0:
	  anotherMessage = 'It is Sunday today'
	  break;
	case 1:
	  anotherMessage = 'It is Monday today'
	  break;
	case 2:
	  anotherMessage = 'It is Tuesday today'
	  break;
	case 3:
	  anotherMessage = 'It is Wednesday today'
	  break;
	case 4:
	  anotherMessage = 'It is Thursday today'
	  break;
	case 5:
	  anotherMessage = 'It is Friday today'
	  break;
	case 6:
	  anotherMessage = 'It is Saturday today'
	  break;
	default:
	  anotherMessage = 'Invalid day of week'
	  break;
  }
console.log(anotherMessage);
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById("message1").innerHTML = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message2").innerHTML = anotherMessage;


/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let temples = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(temples) {
	const templeSection = document.getElementById("temples");
	temples.forEach((temple) => {
	  const templeArticle = document.createElement("article");
	  const templeName = document.createElement("h3");
	  templeName.textContent = temple.templeName;
	  const location = document.createElement("h4");
	  location.textContent = temple.location;
	  const dedicated = document.createElement("h4");
	  dedicated.textContent = temple.dedicated;
	  const image = document.createElement("img");
	  image.src = temple.imageUrl;
	  image.alt = temple.templeName;
	  templeArticle.appendChild(templeName);
	  templeArticle.appendChild(location);
	  templeArticle.appendChild(dedicated);
	  templeArticle.appendChild(image);
	  templeSection.appendChild(templeArticle);
	});
  }
  

// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
	const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
	const temples = await response.json();
	return temples;
  }
  
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
async function init() {
	temples = await getTemples();
	// Call the output function here, passing in the templeList array
	output(temples);
  }
  
  init();
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
	const templeSection = document.getElementById('temples');
	templeSection.innerHTML = '';
  }
  
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy() {
	reset();
  
	const sortBySelect = document.getElementById('sortBy');
	const sortByValue = sortBySelect.value;
  
	switch (sortByValue) {
	  case 'templeNameAsc':
		temples.sort((a, b) => a.templeName.localeCompare(b.templeName));
		break;
	  case 'templeNameDesc':
		temples.sort((a, b) => b.templeName.localeCompare(a.templeName));
		break;
	  case 'locationAsc':
		temples.sort((a, b) => a.location.localeCompare(b.location));
		break;
	  case 'locationDesc':
		temples.sort((a, b) => b.location.localeCompare(a.location));
		break;
	  case 'dedicatedAsc':
		temples.sort((a, b) => a.dedicated.localeCompare(b.dedicated));
		break;
	  case 'dedicatedDesc':
		temples.sort((a, b) => b.dedicated.localeCompare(a.dedicated));
		break;
	}
  
	output(temples);
  }
  

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById('sortBy').addEventListener('change', sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
