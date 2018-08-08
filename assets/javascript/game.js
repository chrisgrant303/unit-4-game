$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19);
    $('#numberToMatch').text(Random);

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    var greenCrystalNum = Math.floor(Math.random() * 11 + 1)
    var blueCrystalNum = Math.floor(Math.random() * 11 + 1)
    var redCrystalNum = Math.floor(Math.random() * 11 + 1)
    var yellowCrystalNum = Math.floor(Math.random() * 11 + 1)

    $('#userWins').text(wins);
    $('#userLosses').text(losses);

    function gameWin() {
        alert("You win the game!");
        wins++;
        $('#userWins').text(wins);
        reset();
    }

    function gameLose() {
        alert("Loser!");
        losses++;
        $('#userLosses').text(losses);
        reset();
    }

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#numberToMatch').text(Random);
        greenCrystalNum = Math.floor(Math.random() * 11 + 1);
        blueCrystalNum = Math.floor(Math.random() * 11 + 1);
        redCrystalNum = Math.floor(Math.random() * 11 + 1);
        yellowCrystalNum = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }

    $('#greenCrystal').on('click', function () {
        userTotal = userTotal + greenCrystalNum;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal === Random) {
            gameWin();
        } else if (userTotal > Random) {
            gameLose();
        }
    })

    $('#blueCrystal').on('click', function () {
        userTotal = userTotal + blueCrystalNum;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal === Random) {
            gameWin();
        } else if (userTotal > Random) {
            gameLose();
        }
    })

    $('#redCrystal').on('click', function () {
        userTotal = userTotal + redCrystalNum;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal === Random) {
            gameWin();
        } else if (userTotal > Random) {
            gameLose();
        }
    })

    $('#yellowCrystal').on('click', function () {
        userTotal = userTotal + yellowCrystalNum;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal === Random) {
            gameWin();
        } else if (userTotal > Random) {
            gameLose();
        }
    })




})