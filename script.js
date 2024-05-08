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
    return number1/number2; 
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
var displayContent=""; 
/*var number1; 
var number2; 
var operator;
*/ 
let display = document.getElementById("display"); 

function addSymbolToTheDisplay(keySymbol){
    displayContent+= keySymbol; 
    display.textContent = displayContent; 
}



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
const backKey = document.getElementById("backKey"); 
backKey.addEventListener("click", () => {
    console.log("avant back");
    console.log(typeof displayContent);
    let str = displayContent.toString().split('').slice(0, -1);
    displayContent = str;
    displayContent =str.join('');
    display.textContent = displayContent;
    console.log("après back");
    console.log(typeof displayContent);
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

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7","8","9"]; 
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
                number2 = parseInt(hubString); 
            } 
        } else if (isAnOperator(analyzedChar)){
            if (areStocked(number1, operator)){
                number2 = parseInt(hubString);
                break;                 
            } else {
            operator = analyzedChar;
            number1 = parseInt(hubString); 
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
    /*display.textContent= resultOfTheCalcul;*/
    if (hasELement(remainOfTheDisplayContent)){
    displayContent = resultOfTheCalcul+ remainOfTheDisplayContent.join('');
    displayContent = displayContent.toString();
    display.textContent= displayContent; 

    } else {
    displayContent = resultOfTheCalcul;
    displayContent = displayContent.toString();
    display.textContent= displayContent;
    }
}



const equalKey = document.getElementById("equalKey"); 
equalKey.addEventListener("click", () => { 
    refreshDisplay(); 
}); 


