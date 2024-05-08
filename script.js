
var displayContent=""; 

let display = document.getElementById("display"); 


const sevenKey = document.getElementById("sevenKey"); 
sevenKey.addEventListener("click", () => {
    addSymbolToTheDisplay(7)}
    ); 
const eightKey = document.getElementById("eightKey"); 
eightKey.addEventListener("click", () => {
    addSymbolToTheDisplay(8)}
    ); 
const nineKey = document.getElementById("nineKey"); 
nineKey.addEventListener("click", () => {
    addSymbolToTheDisplay(9)}
    ); 
const divideKey = document.getElementById("divideKey"); 
divideKey.addEventListener("click", () => {
    addSymbolToTheDisplay("/")}
    ); 

const fourKey = document.getElementById("fourKey"); 
fourKey.addEventListener("click", () => {
    addSymbolToTheDisplay(4)}
    );  
const fiveKey = document.getElementById("fiveKey"); 
fiveKey.addEventListener("click", () => {
    addSymbolToTheDisplay(5)}
    ); 
 
const sixKey = document.getElementById("sixKey"); 
sixKey.addEventListener("click", () => {
    addSymbolToTheDisplay(6)}
    );  
const multiplyKey = document.getElementById("multiplyKey"); 
multiplyKey.addEventListener("click", () => {
    addSymbolToTheDisplay("*")}
    ); 

const oneKey = document.getElementById("oneKey"); 
oneKey.addEventListener("click", () => {
    addSymbolToTheDisplay(1)}
    );  
const twoKey = document.getElementById("twoKey"); 
twoKey.addEventListener("click", () => {
    addSymbolToTheDisplay(2)}
    ); 
 
const threeKey = document.getElementById("threeKey"); 
threeKey.addEventListener("click", () => {
    addSymbolToTheDisplay(3)}
    ); 
const clearKey = document.getElementById("clearKey"); 
clearKey.addEventListener("click", () => {
    displayContent =""; 
    display.textContent = displayContent; 
});

const substractKey = document.getElementById("substractKey"); 
substractKey.addEventListener("click", () => {
    addSymbolToTheDisplay("-")}
    ); 
const zeroKey = document.getElementById("zeroKey"); 
zeroKey.addEventListener("click", () => {
    addSymbolToTheDisplay(0)}
    );  
const addKey = document.getElementById("addKey"); 
addKey.addEventListener("click", () => {
    addSymbolToTheDisplay("+")}
    ); 
const backKey = document.getElementById("backKey"); 
backKey.addEventListener("click", () => {
    let str = displayContent.split('').slice(0, -1);
    displayContent =str.join('');
    display.textContent = displayContent;
    });

const equalKey = document.getElementById("equalKey"); 
equalKey.addEventListener("click", () => { 
    refreshDisplay(); 
}); 
const dotKey = document.getElementById("dotKey"); 
dotKey.addEventListener("click", () => {
    let number1 = retrieveNumber1and2AndOperatorAndRemainingDisplayFromDisplay()[0]; 
    let number2 = retrieveNumber1and2AndOperatorAndRemainingDisplayFromDisplay()[1];
    if(isTypingNumber1() && !hasAPoint(number1)){
        addSymbolToTheDisplay("."); 
    }
    if(isTypingNumber2() && !hasAPoint(number2)){
        addSymbolToTheDisplay("."); 
    }
});

function addSymbolToTheDisplay(keySymbol){
    displayContent+= keySymbol; 
    display.textContent = displayContent; 
}

function isTypingNumber1(){
    let number1 = retrieveNumber1and2AndOperatorAndRemainingDisplayFromDisplay()[0]; 
    let number2 = retrieveNumber1and2AndOperatorAndRemainingDisplayFromDisplay()[1]; 
    if (number1 !== undefined && number2 == undefined){
        return true; 
    } else {
        return false; 
    }
}
function isTypingNumber2(){
    let number1 = retrieveNumber1and2AndOperatorAndRemainingDisplayFromDisplay()[0]; 
    let number2 = retrieveNumber1and2AndOperatorAndRemainingDisplayFromDisplay()[1];
    if (number1 !== undefined && number2 !== undefined){
        return true; 
    } else {
        return false; 
    }
}
function hasAPoint(number){
    let numberArray = String(number).split('');
    console.log(numberArray);
    console.log(numberArray.includes(".")); 
    if(numberArray.includes(".")){
        return true ; 
    } else {
        return false; 
    }
}

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7","8","9","."]; 
function isANumber(character){
    if (numbers.indexOf(character)!== -1){
        return true; 
    } else {
        return false; 
    }
}

const operators = ["+", "-", "/", "*"]; 
function isAnOperator(character){
    if (operators.indexOf(character)!== -1){
        return true; 
    } else {
        return false; 
    }
}

function areStocked(number, string){
    if (number !== undefined && string !== undefined){
        return true; 
    } else {
        return false; 
    }
}

function areStockedArray(array){
    let n1 = array[0]; 
    let n2 = array[1]; 
    let str = array[2]; 
    if (areStocked(n1, str) && n2 !== undefined){
        return true; 
    } else {
        return false; 
    }
}

function isTheLastCharacter(array, character){
    if (character === array[array.length - 1]){
        return true; 
    } else {
        return false; 
    }
}
function hasELement (array){
    if(array[0] !== undefined){
        return true; 
    } else {
        return false; 
    }
}

function retrieveNumber1and2AndOperatorAndRemainingDisplayFromDisplay(){
    let displayContentArray = displayContent.split('');
    let number1; 
    let number2; 
    let operator;  
    let hubString="";
    var analyzedChar = displayContentArray[0];
    while (hasELement(displayContentArray)){ 
        if (isANumber(analyzedChar)){
            hubString += analyzedChar; 
            if(isTheLastCharacter(displayContentArray, analyzedChar) && areStocked(number1, operator)){
                number2 = parseFloat(hubString); 
            } else if ( isTheLastCharacter(displayContentArray, analyzedChar)){
                number1 = parseFloat(hubString);
            }
        } else if (isAnOperator(analyzedChar)){
            if (areStocked(number1, operator)){
                number2 = parseFloat(hubString);
                break;                 
            } else {
            operator = analyzedChar;
            number1 = parseFloat(hubString); 
            hubString = ""; 
            }
        } 
        displayContentArray.shift()
        analyzedChar = displayContentArray[0];    
    }
    return([number1, number2, operator, displayContentArray]); 
}

function refreshDisplay(){
    if(areStockedArray(retrieveNumber1and2AndOperatorAndRemainingDisplayFromDisplay())){
        showResult(); 
    }
}


function showResult(){
    let remainOfTheDisplayContent = retrieveNumber1and2AndOperatorAndRemainingDisplayFromDisplay()[3]; 
    let resultOfTheCalcul = operate(retrieveNumber1and2AndOperatorAndRemainingDisplayFromDisplay()); 
    if (hasELement(remainOfTheDisplayContent)){
    displayContent = resultOfTheCalcul+ remainOfTheDisplayContent.join('');
    displayContent = displayContent.toString();
    display.textContent= displayContent; 

    } else {
    displayContent = resultOfTheCalcul.toString();
    display.textContent= displayContent;
    }
}

function add(number1, number2){
    return number1 + number2; 
}

function substract(number1, number2){
    return number1 - number2; 
}

function multiply(number1, number2){
    return number1*number2; 
}

function divide (number1, number2){
    if (number2 == 0){
        return 1234567890; 
    } else {
    return number1/number2; 
    }
}

function operate(array){
    let result; 
    let number1 = array[0]; 
    let number2 = array[1]; 
    let operator = array[2]; 
    switch(operator){
        case "+": 
            result = add(number1, number2); 
            break; 
        case "-": 
            result = substract(number1, number2); 
            break; 
        case "*": 
            result = multiply(number1, number2); 
            break; 
        case "/": 
            result = divide(number1, number2); 
            break;
    }    
    return result 
}




