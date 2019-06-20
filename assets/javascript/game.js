var won = 0;
var losses = 0;
var guessesLeft = 5;
//var guess = 0;
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
    //var guessesLeft
    var playerGuess = event.key;
    console.log("player " + playerGuess);
    guessesArray.push(playerGuess);

    console.log("comp " + genLetter);
    //Now we need to see if the guess by the player matches the computer
    //If true, then we increment the wins by 1, and resets attempts and clears the array
    //storing the letters guessed

    if (genLetter === playerGuess) {
        randomLetter();
        won++;
        guessesLeft = 5;
        guessesArray= [];
        playerGuess = "";
    }
    //Now we need to check if the answer is incorrect and adjust losses, guesses left and regnerate new letters

    if (genLetter !== playerGuess) {
        //This increments the guesses left

        guessesLeft--;

    }
    //Now we have to reset everything if the players guess =10
    //we increment the lossess, empty the guesses array, and
    //reset the attempts to 10.
    if (guessesLeft == 0) {
        randomLetter();
        losses++;
        //guessesArray.length = 0;
        guessesLeft = 5;
        guessesArray = [];
        playerGuess = "";

    }



    console.log("wins " + won);
    console.log("losses " + losses);
    console.log("guesses left " + guessesLeft);
    console.log("players guess " + playerGuess);

    //This OUPUTS TO THE HTML

    //guessesArray.push(playerGuess);
    console.log("array " + guessesArray);
    //This replaces the contents of the html id with the contents of players guesses array
    document.getElementById('guess').innerHTML = guessesArray;

    document.getElementById('won').innerHTML = won;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessLeft').innerHTML = guessesLeft;
};
