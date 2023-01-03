let str = document.querySelector("#userName");
let submitButton = document.querySelector("#submitButton");
let resultUpper = document.querySelector("#resultUpper");
let resultLower = document.querySelector("#resultLower")
let resultSarc = document.querySelector("#resultSarcastic")
let resultCens = document.querySelector("#resultCensor")

const toUpper = function(){
    return str.value.toUpperCase();
}

const toSarcastic = function(){
    let result = "";
    for (i=0; i < str.value.length; i++) {
    result += i % 2 == 0 ? str.value.charAt(i).toUpperCase() : str.value.charAt(i);
    }
    return result; 
}

let stringToLowerCase = function(){
    return str.value.toLowerCase();
}

let stringToCensor = function(){
    //let strArr = str.split('');
    let val = '';
    for(let i = 0; i<str.value.length; i++){
        if(i === 0 || i === str.value.length-1){
            val += str.value[i];
        }else{
            val += "*";
        }
    }
    return val;
}

let stringManipulations = function(event){
    event.preventDefault();
    console.log(toUpper());
    resultUpper.textContent = toUpper();
    resultLower.textContent = stringToLowerCase();
    resultSarc.textContent = toSarcastic();
    resultCens.textContent = stringToCensor();
}

submitButton.addEventListener("click", stringManipulations);