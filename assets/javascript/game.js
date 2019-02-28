
var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNum;
var crystals = {};

startGame();

function startGame() {
    randomNum = Math.floor(Math.random() * 101) + 19;

    crystals = {
        blueCrystal: Math.floor(Math.random() * 12) + 1,
        greenCrystal: Math.floor(Math.random() * 12) + 1,
        purpleCrystal: Math.floor(Math.random() * 12) + 1,
        tealCrystal: Math.floor(Math.random() * 12) + 1,
    }

    $("#randomNum").html(randomNum);

}


$("#blueCrystal").on("click", function () {
    var crystalValBlue = (crystals.blueCrystal);
    totalScore += crystalValBlue;
    $("#totalScore").html(totalScore);

    if (totalScore === randomNum) {
        wins++;
        alert("You Won, Keep Playing!");
        totalScore = 0;
        $("#wins").html(wins);
        startGame();
    }

    else if (totalScore > randomNum) {
        losses++
        alert("You Lost, Try Again!")
        totalScore = 0;
        $("#losses").html(losses);
        startGame();
    }
});

$("#greenCrystal").on("click", function () {
    var crystalValGreen = (crystals.greenCrystal);
    totalScore += crystalValGreen;
    $("#totalScore").html(totalScore);

    if (totalScore === randomNum) {
        wins++;
        alert("You Won, Keep Playing!");
        totalScore = 0;
        $("#wins").html(wins);
        startGame();
    }

    else if (totalScore > randomNum) {
        losses++
        alert("You Lost, Try Again!")
        totalScore = 0;
        $("#losses").html(losses);
        startGame();
    }
});

$("#purpleCrystal").on("click", function () {
    var crystalValPurple = (crystals.purpleCrystal);
    totalScore += crystalValPurple;
    $("#totalScore").html(totalScore);

    if (totalScore === randomNum) {
        wins++;
        alert("You Won, Keep Playing!");
        totalScore = 0;
        $("#wins").html(wins);
        startGame();
    }

    else if (totalScore > randomNum) {
        losses++
        alert("You Lost, Try Again!")
        totalScore = 0;
        $("#losses").html(losses);
        startGame();
    }
});

$("#tealCrystal").on("click", function () {
    var crystalValTeal = (crystals.tealCrystal);
    totalScore += crystalValTeal;
    $("#totalScore").html(totalScore);

    if (totalScore === randomNum) {
        wins++;
        alert("You Won, Keep Playing!");
        totalScore = 0;
        $("#wins").html(wins);
        startGame();
    }

    else if (totalScore > randomNum) {
        losses++
        alert("You Lost, Try Again!")
        totalScore = 0;
        $("#losses").html(losses);
        startGame();
    }
});

$("#blueCrystal").html("<img src='assets/images/BlueCrystal.png'>")
$("#greenCrystal").html("<img src='assets/images/GreenCrystal.png'>")
$("#purpleCrystal").html("<img src='assets/images/PurpleCrystal.png'>")
$("#tealCrystal").html("<img src='assets/images/TealCrystal.png'>")



