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

const displayEl = document.getElementsByClassName('display')[0];

function clear(){
    displayEl.innerHTML = "h";
}