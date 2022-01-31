"use strict"

function filterCoffeeByName(event) {
    event.preventDefault();
    let tempArray = [];

    for (let i = 0; i < coffees.length; i++) {

        if (coffees[i].name.toLowerCase().includes(inputValue.value.toLowerCase()) === true && roastSelection.value === 'all') {
            tempArray.push({'name' : coffees[i].name, 'roast' : coffees[i].roast});
        }

        else if (coffees[i].name.toLowerCase().includes(inputValue.value.toLowerCase()) === true && coffees[i].roast === roastSelection.value) {
            tempArray.push({'name' : coffees[i].name, 'roast' : coffees[i].roast});
        }
    }
    coffeeList.innerHTML = printArray(tempArray);
}

// console.log(printArray(coffees))
// Clears the inner html of div, prints out each element of the array as a string. returns the updated div html text
function printArray(myArray) {

    coffeeList.innerHTML = '';
    for (let i = 0; i < myArray.length; i++) {
        coffeeList.innerHTML += "<div class='coffeeBox col-5 '>" + myArray[i].name + " " + "<span class='roastFont'>" + myArray[i].roast + "</span>" + "</div>";
    }
    return coffeeList.innerHTML;
}










// function renderCoffee(coffee) {
//     var html = '<tr class="coffee">';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }

// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (roastSelection.value === 'all') {
            printArray(coffees);
        }
        else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
            coffeeList.innerHTML = printArray(filteredCoffees);
        }
    });
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

var coffeeList = document.querySelector('.coffee-list');
let inputValue = document.querySelector('#name-input');


submitButton.addEventListener('click', updateCoffees);
inputValue.addEventListener('keyup', filterCoffeeByName);

printArray(coffees);

tbody.innerHTML = renderCoffees(coffees);


