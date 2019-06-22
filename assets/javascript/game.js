var won = 0;
var losses = 0;
var guessesLeft = 10;
var letters = "abcdefghijklmnopqrstuvwxyz";
var genLetter;
var guessesArray = [];


//This is the random letter generater

function randomLetter() {

    genLetter = letters[Math.floor(Math.random() * 26)];

    // THis doesn't work... ranletter = letters.substr(Math.floor(Math.random()*26), 1);
}

randomLetter();

//This gets the player input key
document.onkeyup = function (event) {

    var playerGuess = event.key;
    console.log("player " + playerGuess);
    guessesArray.push(playerGuess);

    console.log("computer: " + genLetter);

    //Now we need to see if the guess by the player matches the computer
    //If true, then we increment the wins by 1, Number of guesses, 
    // and clears the array that contains the guesses, along with the players guess.

    if (genLetter === playerGuess) {
        randomLetter();
        won++;
        guessesLeft = 10;
        guessesArray = [];
        playerGuess = "";
    }
    //Now we need to check if the answer is incorrect and adjust losses, guesses left, and regnerate new letters

    if (genLetter !== playerGuess) {

        guessesLeft--;

    }
    //Now we have to reset everything if the players guess = 10.
    //First we regenerate a new letter for the computer, then
    //we increment the lossess, reset the attempts to 10,
    // empty the guesses array, and clear the players guess.

    if (guessesLeft == 0) {

        randomLetter();
        losses++;
        guessesLeft = 10;
        guessesArray = [];
        playerGuess = "";

    }

    //if (playerGuess === guessesArray.find(playerGuess)); {
    //   guessesLeft--;
    //    alert('Carefull!!  You already guessed this letter!  You just lost a guess.  Be Careful!!');
    // }
    console.log("wins: " + won);
    console.log("losses: " + losses);
    console.log("guesses left: " + guessesLeft);
    console.log("players guess: " + playerGuess);
    console.log("array: " + guessesArray);


    //This OUPUTS TO THE HTML

    //This writes the outputs from the javascript, to the HTML document.
    document.getElementById('guess').innerHTML = guessesArray;
    document.getElementById('won').innerHTML = won;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessLeft').innerHTML = guessesLeft;
};
