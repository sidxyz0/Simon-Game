var colorArray = ["red", "green", "blue", "yellow"]
var patternArray = [];
var score = 0;
var randomNumber = 0;
var i = 0;
var j = 0;





function rand() {
    return (Math.floor(Math.random() * 4));
}





function reset() {
    colorArray = ["red", "green", "blue", "yellow"]
    patternArray = [];
    score = 0;
    randomNumber = 0;
    i = 0;
    j = 0;
}






function flash() {
    if (patternArray[j] == "red") {
        var sound = new Audio("sounds/red.mp3");
        sound.play();
        $(".red").css("background-color", "white");
        setTimeout(() => { $(".red").css("background-color", "red") }, 500);
    }
    if (patternArray[j] == "green") {
        var sound = new Audio("sounds/green.mp3");
        sound.play();
        $(".green").css("background-color", "white");
        setTimeout(() => { $(".green").css("background-color", "green") }, 500);
    }
    if (patternArray[j] == "blue") {
        var sound = new Audio("sounds/blue.mp3");
        sound.play();
        $(".blue").css("background-color", "white");
        setTimeout(() => { $(".blue").css("background-color", "blue") }, 500);
    }
    if (patternArray[j] == "yellow") {
        var sound = new Audio("sounds/yellow.mp3");
        sound.play();
        $(".yellow").css("background-color", "white");
        setTimeout(() => { $(".yellow").css("background-color", "yellow") }, 500);
    }
}





function playback(originalColor1) {
    if (originalColor1 == "red") {
        var sound = new Audio("sounds/red.mp3");
        sound.play();
    }
    if (originalColor1 == "green") {
        var sound = new Audio("sounds/green.mp3");
        sound.play();
    }
    if (originalColor1 == "blue") {
        var sound = new Audio("sounds/blue.mp3");
        sound.play();
    }
    if (originalColor1 == "yellow") {
        var sound = new Audio("sounds/yellow.mp3");
        sound.play();
    }
}



$(".headerdiv").hover(()=>{
    $(".headerdiv").css("cursor", "pointer");
});





$(".headerdiv").click(() => {
    reset();
    randomNumber = rand();
    patternArray[j] = colorArray[randomNumber];
    flash();
    $(".headerdiv").text("Click again to restart! Score : " + score);
});





$("div #tile").click(function () {
    var originalColor = $(this).attr("class");
    console.log(originalColor);
    $(this).css("background-color", "black");
    setTimeout(() => {
        $(this).css("background-color", originalColor);
    }, 300);
    if ($(this).attr("class") == patternArray[i]) {
        playback(originalColor);
        i++;
        if (i == patternArray.length) {
            score++;
            $(".headerdiv").text("Click again to restart! Score : " + score);
            console.log(score);
            j++;
            randomNumber = rand();
            patternArray[j] = colorArray[randomNumber];
            setTimeout(() => {
                flash();
            }, 1000);
            i = 0;
        }
    }
    else {
        reset();
        var sound = new Audio("sounds/wrong.mp3");
        sound.play();
        $(".headerdiv").text("GameOver! Click to reset! Final Score : " + score);
    }

});

