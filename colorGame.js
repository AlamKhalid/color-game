var numSquare = 6;
var color = generateRandomColors(numSquare);
var square = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDispaly = document.getElementById("msg");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquare = 3;
    color = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();

    for(var i = 0; i < square.length; i++) {
        if(color[i]) {
            square[i].style.backgroundColor = color[i];
        }
        else {
            square[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquare = 6;
    color = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();

    for(var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color[i];
        square[i].style.display = "block";
    }
});

reset.addEventListener("click", function() {
    
    color = generateRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase();

    for(var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color[i];
    }

    h1.style.backgroundColor = "steelblue";
    messageDispaly.textContent = "";
    this.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor.toUpperCase();

for(var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color[i];

    square[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            messageDispaly.textContent = "Correct!";
            h1.style.backgroundColor = pickedColor;
            changeColor();
            reset.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDispaly.textContent = "Try Again";
        }
    });
}

function changeColor() {

    for(var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = pickedColor;
    }
}

function pickColor() {

    return color[Math.floor(Math.random() * color.length)];
}

function generateRandomColors(num) {

    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb("+red+", "+green+", "+blue+")";
}