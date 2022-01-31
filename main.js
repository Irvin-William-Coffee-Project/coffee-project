"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
	{id: 1, name: 'Light City', roast: 'light'},
	{id: 2, name: 'Half City', roast: 'light'},
	{id: 3, name: 'Cinnamon', roast: 'light'},
	{id: 4, name: 'City', roast: 'medium'},
	{id: 5, name: 'American', roast: 'medium'},
	{id: 6, name: 'Breakfast', roast: 'medium'},
	{id: 7, name: 'High', roast: 'dark'},
	{id: 8, name: 'Continental', roast: 'dark'},
	{id: 9, name: 'New Orleans', roast: 'dark'},
	{id: 10, name: 'European', roast: 'dark'},
	{id: 11, name: 'Espresso', roast: 'dark'},
	{id: 12, name: 'Viennese', roast: 'dark'},
	{id: 13, name: 'Italian', roast: 'dark'},
	{id: 14, name: 'French', roast: 'dark'},
];
function filterCoffeeByName(event) {
	event.preventDefault();
	let tempArray = [];

	for (let i = 0; i < coffees.length; i++) {

		if (coffees[i].name.toLowerCase().includes(inputValue.value.toLowerCase()) === true && roastSelection.value === 'all') {
			tempArray.push({'name': coffees[i].name, 'roast': coffees[i].roast});
		} else if (coffees[i].name.toLowerCase().includes(inputValue.value.toLowerCase()) === true && coffees[i].roast === roastSelection.value) {
			tempArray.push({'name': coffees[i].name, 'roast': coffees[i].roast});
		}
	}
	coffeeList.innerHTML = printArray(tempArray);
}


// Clears the inner html of div, prints out each element of the array as a string. returns the updated div html text
function printArray(myArray) {

	coffeeList.innerHTML = '';
	for (let i = 0; i < myArray.length; i++) {
		coffeeList.innerHTML += "<div class='coffeeBox col-5 '>" + myArray[i].name + " " + "<span class='roastFont'>" + myArray[i].roast + "</span>" + "</div>";
	}
	return coffeeList.innerHTML;
}




function updateCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	let selectedRoast = roastSelection.value;
	let filteredCoffees = [];
	coffees.forEach(function (coffee) {
		if (roastSelection.value === 'all') {
			printArray(coffees);
		} else if (coffee.roast === selectedRoast) {
			filteredCoffees.push(coffee);
			coffeeList.innerHTML = printArray(filteredCoffees);
		}
	});
}

//add new coffee function
let newCoffee = [];
let oldCoffeesPlusNewCoffees = [];
function addCoffee(e) {
	e.preventDefault();

	newCoffee.push({'id': coffees.length + 1, 'name': submitNameInput.value, 'roast': submitRoastSelection.value});

	localStorage.setItem('localStorage',JSON.stringify(newCoffee));

	oldCoffeesPlusNewCoffees = coffees.concat(newCoffee);
	console.log(oldCoffeesPlusNewCoffees);

	printArray(oldCoffeesPlusNewCoffees);
}

//search
let searchButton = document.querySelector('#search');
let roastSelection = document.querySelector('#roast-selection');

//submit
let submitButton = document.querySelector('#submit');
let submitRoastSelection = document.querySelector('#submit-roast-type');
let submitNameInput = document.querySelector("#submit-name-input");


let coffeeList = document.querySelector('.coffee-list');
let inputValue = document.querySelector('#name-input');


searchButton.addEventListener('click', updateCoffees);
submitButton.addEventListener('click', addCoffee);
inputValue.addEventListener('keyup', filterCoffeeByName);

// add coffees from local storage to main coffee array

function getLocalStorage() {

	newCoffee = JSON.parse(localStorage.getItem('localStorage')) || [];

	oldCoffeesPlusNewCoffees = coffees.concat(newCoffee);
	printArray(oldCoffeesPlusNewCoffees);
}


getLocalStorage();


