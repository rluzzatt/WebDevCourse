
var buttonColours = ["red", "blue", "green", "yellow"];

var randomChosenColour = buttonColours[nextSequence()];

var selectorButton = ".btn." + randomChosenColour;
var selectedButton = $(selectorButton);

selectedButton.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();

var gamePattern = []; 

gamePattern.push(randomChosenColour);

function nextSequence(){
    var randomNmber = Math.floor(Math.random() * 4);
    return randomNmber;
}

