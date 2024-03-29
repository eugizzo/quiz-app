// generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// keep track of the number of guesses
let guesses = 0;

function checkGuess() {
    // get the user's guess from the input field
    const guess = Number(document.getElementById("guess").value);

    // increment the number of guesses
    guesses++;

    // check if the guess is correct
    if (guess === randomNumber) {
        document.getElementById("result").innerHTML = "Congratulations, you guessed the number in " + guesses + " guesses!";
    } else if (guess < randomNumber) {
        document.getElementById("result").innerHTML = "Too low! Guess again.";
    } else {
        document.getElementById("result").innerHTML = "Too high! Guess again.";
    }
}