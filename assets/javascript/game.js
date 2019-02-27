
var randomNum = Math.floor(Math.random() * 101) + 19;

var wins = 0;
var losses = 0;
var totalScore = 0;

var crystals = {
    blueCrystal: Math.floor(Math.random() * 12) + 1,
    greenCrystal: Math.floor(Math.random() * 12) + 1,
    purpleCrystal: Math.floor(Math.random() * 12) + 1,
    tealCrystal: Math.floor(Math.random() * 12) + 1,
}

$("#blueCrystal").on("click", function () {
    var crystalValBlue = (crystals.blueCrystal);
    totalScore += crystalValBlue;
    console.log(totalScore);
    $("#totalScore").html(totalScore);
   
    if (totalScore === randomNum) {
        alert("You Won, Keep Playing!");
        wins++;
        var totalScore = 0;
        $("#wins").html(wins);
    }
    
    else if (totalScore > randomNum) {
        alert("You Lost, Try Again!")
        losses++
        var totalScore = 0;
        $("#losses").html(losses);
    }
});
console.log(totalScore === randomNum);



$("#randomNum").html(randomNum);

$("#blueCrystal").html("<img src='assets/images/BlueCrystal.png'>")
$("#greenCrystal").html("<img src='assets/images/GreenCrystal.png'>")
$("#purpleCrystal").html("<img src='assets/images/PurpleCrystal.png'>")
$("#tealCrystal").html("<img src='assets/images/TealCrystal.png'>")

console.log("blueCrystal", crystals.blueCrystal);
console.log("greenCrystal", crystals.greenCrystal);
console.log("purpleCrystal", crystals.purpleCrystal);
console.log("tealCrystal", crystals.tealCrystal);

