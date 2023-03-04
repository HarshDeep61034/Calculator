// Functions
function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function operator(x, a, b){
    if(x === "+"){
        return add(a,b);
    }
    else if(x === "-"){
        return subtract(a,b);
    }
    else if(x === "*"){
        return multiply(a,b);
    }
    else if(x === "/"){
        return divide(a,b);
    }
}

// Accessing  DOM Elements
const displayEl = document.getElementsByClassName('display')[0];
const clearEl = document.getElementById('clear');

// clearing Display Function
clearEl.addEventListener('click', ()=>{
    displayEl.textContent = "0";
})

// Display function
var value = "";
function display(clicked_id){
    value = value+clicked_id;
    displayEl.textContent = value;
}