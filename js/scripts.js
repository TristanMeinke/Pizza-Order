//Business Logic

var pizzaSize;
var textOfSize;

var valueOfSize;

var pizzaSauce;
var textOfSauce;

var toppingSelections = [];
var checkboxInput;

var pizzaCost;
var costBySize;
var costInToppings;

var pizzaToppings;
var size;
var sauce;
var orderPrice;
var pizzaOrder;

function Pizza(size, sauce, toppings, price){
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
  this.price = price;
}

function evaluateCost(checkboxInput) {
  costBySize = document.getElementById("selectSize");
  valueOfSize = parseInt(costBySize.options[costBySize.selectedIndex].value);
  costInToppings = toppingSelections.length * 2;
  pizzaCost = valueOfSize + costInToppings;
  return pizzaCost;
}

function customerSelections(checkboxInput) {
  toppingSelections = [];
  for (var i = 0; i < checkboxInput.length; i++)
  {
    if (checkboxInput[i].checked && checkboxInput[i] !== undefined)
    {
      toppingSelections.push(checkboxInput[i].value);
    }
  }
  return toppingSelections;
}

function getPizzaSize() {
  pizzaSize = document.getElementById("selectSize");
  textOfSize = pizzaSize.options[pizzaSize.selectedIndex].text;
  return textOfSize;
}

function getPizzaSauce() {
  pizzaSauce = document.getElementById("selectSauce");
  textOfSauce = pizzaSauce.options[pizzaSauce.selectedIndex].text;
  return textOfSauce;
}

//User Interface Logic

$(document).ready(function() {
  $("form#userChoices").submit(function(event) {
    event.preventDefault();
    checkboxInput = document.getElementsByTagName("input");
    pizzaToppings = customerSelections(checkboxInput);
    size = getPizzaSize();
    sauce = getPizzaSauce();
    orderPrice = evaluateCost(checkboxInput);
    pizzaOrder = new Pizza(size, sauce, pizzaToppings, orderPrice);
  });
});
