function start() {
    function guess(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var number = guess(1, 20);
    
    var guessedNumber = prompt("I thought of a number between 1 and 20. Try to figure out what it is!");
    
    var end = true;
    
    
    while (end) {
        if (number == guessedNumber) {
            alert("Correct!");
            end = false;
        } else if (guessedNumber < number) {
            alert("Too small!");
            guessedNumber = prompt("Please try again!");
        } else if (guessedNumber > number) {
            alert("Too high!");
            guessedNumber = prompt("Please try again!");
        } else if (guessedNumber == "McDumfly") {
            console.log(number);
            guessedNumber = prompt("Please try again!");
        } else if (guessedNumber == "exit") {
        } else {
            guessedNumber = prompt("Please try again!");
        }
    }
}
    


