var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function () {
    for (i = 0; i < modeButtons.length; i++) {
      modeButtons[i].classList.remove("selected");
    }

    this.classList.add("selected");
    this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
    reset();
  });
}

function reset() {
  //generate new colors, pick one, and display them
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    //show only the needed amount of squares
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

  h1.style.background = "steelblue";
}

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.background = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked square
    var clickedColor = this.style.background;
    //compare color of pickedColor
    if(clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      resetButton.textContent = "Play Again";
      changeColors(pickedColor);
      h1.style.background = pickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try again"
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
  //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  //randomly pick an indexed number in colors
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];

  //add num of random colors to array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  //pick a rgb value from 0 to 255
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var rgb = "rgb(" + red + ", " + green + ", " + blue +")";
  return rgb;
}
