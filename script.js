const add = function(a,b) {
    return Math.round((parseFloat(a)+parseFloat(b))*1000000000)/1000000000;}

const substract = function (a,b) {
    return Math.round((a-b)*1000000000)/1000000000;}

const multiply = function(a,b) {
    return Math.round(a*b*1000000000)/1000000000;}

const divide = function(a,b) {
    if (b==0) {
        return "nice try"}
    else {
        return Math.round(a/b*1000000000)/1000000000;}}

const operate = function(operator,a,b) {
    if (operator == "+") {
        return add(a,b)}
    else if (operator == "-") {
        return substract(a,b)}
    else if (operator == "*") {
        return multiply(a,b)}
    else if (operator == "/") 
        {return divide(a,b)}    }

let lastResult = "0";
let savedOperand = "";
let operandOne = "";
let isLastKeyOp = false;
let isLastKeyEq = false;

let displayValue = "0";
let displayBox = document.querySelector(".display");
displayBox.innerHTML = displayValue;

const buttons = document.querySelectorAll(".btn")
buttons.forEach(button => button.addEventListener('click', function() {
    if (isLastKeyOp == false) {
        if (displayValue == 0) {
            displayValue = button.innerHTML;
            displayBox.innerHTML = displayValue
            console.log(displayValue)
        }
        else if (displayValue == 'nice try') {
            displayValue = button.innerHTML;
            displayBox.innerHTML = displayValue
            console.log(displayValue)
        }
        else {
            displayValue += button.innerHTML;
            displayBox.innerHTML = displayValue
            console.log(displayValue)}
        }
    else {
        displayValue = button.innerHTML;
        displayBox.innerHTML = displayValue;
        isLastKeyOp = false
        console.log(displayValue)
    }
    isLastKeyEq = false
} ) )

const operator = document.querySelectorAll(".ope") 
operator.forEach(button => button.addEventListener('click', function() {
    if (operandOne == "") {
        savedOperand = button.innerHTML;
        operandOne = displayValue;
        isLastKeyOp = true;

    }
    else {
        if (isLastKeyEq == false) {
            calculate()
            savedOperand = button.innerHTML
            operandOne = lastResult
            isLastKeyOp = true
        }
        else {
            operandOne = displayValue
            savedOperand = button.innerHTML
            isLastKeyOp = true
        }
    }
    isLastKeyEq = false;
} ) )

const clear = document.querySelectorAll(".clear")
clear.forEach(button => button.addEventListener('click', function() {
    displayValue = "0";
    lastResult = "0";
    savedOperand = "";
    operandOne = "";
    isLastKeyOp = false;
    isLastKeyEq = false;
    displayBox.innerHTML = displayValue} ) )  

const calculate = function () {
   lastResult = operate(savedOperand,operandOne,displayValue)
   displayValue = lastResult
   displayBox.innerHTML = displayValue
}

const equal = document.querySelectorAll(".equal")
equal.forEach(button => button.addEventListener('click', function() {
    if (savedOperand != "") {
        if (isLastKeyEq == false) {
            calculate()
            isLastKeyEq = true
            isLastKeyOp = false
        }
    }
    isLastKeyOp = false
} ) )