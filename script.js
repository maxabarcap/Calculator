const add = function(a,b) {
    return a+b;}

const substract = function (a,b) {
    return a-b;}

const multiply = function(a,b) {
    return a*b;}

const divide = function(a,b) {
    return a/b;}

const operate = function(operator,a,b) {
    if (operator == "+") {
        return add(a,b)}
    else if (operator == "-") {
        return substract(a,b)}
    else if (operator == "*") {
        return multiply(a,b)}
    else if (operator == "/") 
        {return divide(a,b)}    }

let displayValue = "";
let displayBox = document.querySelector(".display");
displayBox.innerHTML = displayValue;

const buttons = document.querySelectorAll(".btn")
buttons.forEach(button => button.addEventListener('click', function() {
    displayValue += button.innerHTML;
    displayBox.innerHTML = displayValue
    console.log(displayValue)} ) )

const clear = document.querySelectorAll(".clear")
clear.forEach(button => button.addEventListener('click', function() {
    displayValue = "";
    displayBox.innerHTML = displayValue} ) )  

