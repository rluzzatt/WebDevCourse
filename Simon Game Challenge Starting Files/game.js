var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$("html").keydown(function (e) {
    console.log(e.key);
    if (!started) {

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
});



$(".btn").click(function (e) {

    var userChosenColour = this.id;

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    console.log(userClickedPattern);
});


function nextSequence() {

    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    playSound(randomChosenColour);

    $("#level-title").text("Level " + level);
}

function playSound(name) {

    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {

    $("." + currentColour).addClass("pressed");

    setTimeout(function () {
        $("." + currentColour).removeClass("pressed")
    }, 100);
}