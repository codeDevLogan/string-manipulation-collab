const toUpper = function(userInput){
    return String.prototype.toUpperCase(userInput);
}

const toSarcastic = function(userInput){
    let result = "";
    for (i=0; i < userInput.length; i++) {
    result += i % 2 == 0 ? userInput.charAt(i).toUpperCase() : userInput.charAt(i);
    }
    return result; 
}