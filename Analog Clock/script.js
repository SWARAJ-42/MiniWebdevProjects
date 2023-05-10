// html elements to be used
let clock = document.getElementsByClassName("clock")[0];
let numbers = document.getElementsByClassName("numbers");
let hand = document.getElementsByClassName("hand");

// Converting the Object to Array for applying array operations
numbers = Array.from(numbers);
// Choosing optimum radius for the numbers to placed from the center
let radius = 160;

// Placing the numbers in their respective position
for (let i = 0; i < numbers.length; i++) {
  numbers[i].style.position = "absolute";
  let transformX =
    (radius * Math.cos((30 * (2 - i) * Math.PI) / 180)).toString() + "px";
  let transformY =
    (-radius * Math.sin((30 * (2 - i) * Math.PI) / 180)).toString() + "px";
  numbers[i].style.transform = `translate(${transformX}, ${transformY})`;
}

// Getting the initial time to display
let date = new Date();
let sec = date.getSeconds();
let min = date.getMinutes();
let hrs = date.getHours();

// Finding the correct angle of the respective Hands
let sec_start = (sec / 60) * 360;
sec = sec_start - 180 + "deg";
let min_start = (min / 60) * 360 + sec_start / 60;
min = min_start - 180 + "deg";
if (hrs >= 12) {
  hrs = hrs - 12;
}
let hrs_start = hrs * 30 + min_start / 12;
hrs = hrs_start - 180 + "deg";

// Adding The properties to the repective Hands
for (let i = 0; i < hand.length; i++) {
  hand[i].style.position = "absolute";
  let transformY = (hand[i].clientHeight / 2).toString() + "px";
  hand[i].style.translate = `0px ${transformY}`;
  hand[i].style.transformOrigin = "top";

  if (i == 0) {
    hand[i].style.rotate = hrs;
  } else if (i == 1) {
    hand[i].style.rotate = min;
  } else if (i == 2) {
    hand[i].style.rotate = sec;
  }
}
