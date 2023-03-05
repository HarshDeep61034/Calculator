let currentNum = "";
let previousNum = "";
let operator = "";
let prevop = "";
let content = "";
// Dom Elements
const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        numberHandler(e.target.textContent);
    })
})

const previousDisplay = document.getElementById('disp-1');
const currentDisplay = document.getElementById('disp-2');

function numberHandler(num){
    if(currentNum.length > 12){
        alert("Max 12 Numbers can be Inputed!");
    }
    currentNum += num;
    currentDisplay.textContent = currentNum;
}

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        operatorHandler(e.target.textContent);
    })
})

function operatorHandler(op){
    operator = op;
    if(previousNum !== ""){       
     calculater()
    }
    else{
        previousNum = currentNum;
        previousDisplay.textContent = previousNum + op;
        currentNum = "";
        currentDisplay.textContent = "";
    }
    
    prevop = op;
}
function calculater(){
    currentNum = parseFloat(currentNum);
    previousNum = parseFloat(previousNum);
    if(prevop === "+"){
        previousNum += currentNum;
    }
    else if(prevop === "-"){
        previousNum -= currentNum;
    }
    else if(prevop === "/"){
        previousNum /= currentNum;
    }
    else if(prevop === "*"){
        previousNum *= currentNum;
    } 
    currentNum.toString();
    previousNum.toString();
    currentNum = "0";
    previousDisplay.textContent = previousNum;
    currentDisplay.textContent = "";
}
const dot = document.getElementsByClassName('dot')[0];
dot.addEventListener('click', (e)=>{
    dothandler(e.target.textContent);
})

function dothandler(dt){
    currentNum += dt;
    currentDisplay.textContent = currentNum;
    
}
const equalEl = document.getElementById('equal');
equalEl.addEventListener('click', ()=>{
    calculate()
})

function calculate(){
    currentNum = parseFloat(currentNum);
    previousNum = parseFloat(previousNum);
    if(operator === "+"){
        currentNum += previousNum;
    }
    else if(operator === "-"){
        currentNum = previousNum-currentNum;
    }
    else if(operator === "/"){
        currentNum = previousNum/currentNum;
    }
    else if(operator === "*"){
        currentNum *= previousNum;
    }
    currentNum = Math.round(currentNum *1000000)/1000000
    currentNum.toString();
    previousNum.toString();
    currentDisplay.textContent = currentNum;
    previousDisplay.textContent = "";
}


const clear = document.getElementById('clear');
clear.addEventListener('click', ()=>{
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
    currentNum = "";
    previousNum = "";
    operator = "";
})