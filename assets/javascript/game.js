/// We need to create our initial variables, similar to the other assignements so far
// Work in Progress, need better definition of variables and values

let wins = 0;
let losses = 0;
let guesses = null;
let guessesLeft = null;
let guessedCrystals = [];

/// This first function will define the random range of numbers I can do my randomization math in
var lowEnd = 19;
var highEnd = 120;
var computerChoices = [];
while (lowEnd <= highEnd) {
    computerChoices.push(lowEnd++);
}

/// Now that the range has been identified, the random number selector is run and picks from within the defined range

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
$('#computerChoice').append(computerGuess);

///

/// Conjunction Function