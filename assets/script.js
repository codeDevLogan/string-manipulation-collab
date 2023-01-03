let str = document.querySelector("#username");

let stringToLowerCase = function(){
    return str.toLowerCase();
}

let stringToSarcasm = function(){
    for(let i = 1; i<str.length; i++){
        str[i] = "*";
    }
    return str;
}