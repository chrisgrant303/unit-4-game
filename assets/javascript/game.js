/// We need to create our initial variables, similar to the other assignements so far
// Work in Progress, need better definition of variables and values

let wins = 0;
let losses = 0;
let guesses = null;
let guessedCrystals = [];

/// This second designation will define the random range of numbers for the final score
var lowEndTotal = 19;
var highEndTotal = 120;
var computerChoices = [];
while (lowEndTotal <= highEndTotal) {
    computerChoices.push(lowEndTotal++);
}

/// Now that the range has been identified, the random number selector is run and picks from within the defined range
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
$('#computerChoice').append(computerGuess);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// This following designations will define the random range of numbers for the value of the crystals, including the randomizer
/// RED CRYSTAL VALUE DESIGNATOR
var lowEndCrystals = 1;
var highEndCrystals = 12;
var redCrystalChoices = [];
while (lowEndCrystals <= highEndCrystals) {
    redCrystalChoices.push(lowEndCrystals++);
}
var redCrystal = redCrystalChoices[Math.floor(Math.random() * redCrystalChoices.length)];
console.log("Red Crystal Value= " + redCrystal);
///


/// BLUE CRYSTAL VALUE DESIGNATOR
var lowEndCrystals = 1;
var highEndCrystals = 12;
var blueCrystalChoices = [];
while (lowEndCrystals <= highEndCrystals) {
    blueCrystalChoices.push(lowEndCrystals++);
}
var blueCrystal = blueCrystalChoices[Math.floor(Math.random() * blueCrystalChoices.length)];
console.log("Blue Crystal Value= " + blueCrystal);
///


/// GREEN CRYSTAL VALUE DESIGNATOR
var lowEndCrystals = 1;
var highEndCrystals = 12;
var greenCrystalChoices = [];
while (lowEndCrystals <= highEndCrystals) {
    greenCrystalChoices.push(lowEndCrystals++);
}
var greenCrystal = greenCrystalChoices[Math.floor(Math.random() * greenCrystalChoices.length)];
console.log("Green Crystal Value= " + greenCrystal);
///


/// YELLOW CRYSTAL VALUE DESIGNATOR
var lowEndCrystals = 1;
var highEndCrystals = 12;
var yellowCrystalChoices = [];
while (lowEndCrystals <= highEndCrystals) {
    yellowCrystalChoices.push(lowEndCrystals++);
}
var yellowCrystal = yellowCrystalChoices[Math.floor(Math.random() * yellowCrystalChoices.length)];
console.log("Yellow Crystal Value= " + yellowCrystal);
///
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Conjunction Function

// I need to write the mechanics now that will deliver the randomized value on click for each crystal into the sum of 'userCount' and increment

$('#greenCrystal').on('click', function () {
    $('#userCount').html(greenCrystal)
});