'use strict';

// let secretNumber = Math.trunc(Math.random() * 20) + 1; // Целые числа

// let score = 20;
// let highScore = 0;

// const displayGuessMessage = function(message) {
//   document.querySelector(".guess-message").textContent = message; //
// }

// const displayQuestion = function(question) {
//   document.querySelector(".question").textContent = question; //
// }  

// const displayBackgroundColor = function(color) {
//   document.querySelector("body").style.backgroundColor = color; //
// }

// const displayScore = function(score) {
//   document.querySelector(".score").textContent = score; //
// }  


// document.querySelector(".check").addEventListener("click", function() {              //addEventListener - Функция, кот. добавляет действие к определенному эл-у.
//   const guessingNumber = Number(document.querySelector(".number-input").value);      // Приводим все к числу.
//   console.log(typeof guessingNumber);

//   if (!guessingNumber) {// No input
//     displayGuessMessage("Input some number!");

//   } else if (guessingNumber === secretNumber) { // Player win
//     displayGuessMessage("Right!");
//     displayQuestion(secretNumber);
//     displayBackgroundColor("rgb(9, 250, 21)");
//     document.querySelector(".question").style.width = "50rem";

//     if(score > highScore) {
//       highScore = score;
//       document.querySelector(".highscore").textContent = highScore;
//     } 

//   } else if(guessingNumber !== secretNumber) {
//     if (score > 1) {
//       displayGuessMessage(guessingNumber > secretNumber ? "Too big!" : "Too small");
     
//       score--;
//       displayScore(score);
//     } else {
//       displayGuessMessage("Game Over!");
//       displayScore(0);
//       displayBackgroundColor("rgb(255, 0, 0)");
//     } 
//   } // *** 
// });

// document.querySelector(".again").addEventListener("click", function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   score = 20

//   displayQuestion("???");
//   document.querySelector(".question").style.width= "25rem";
//   displayGuessMessage("Begin guessing");
//   displayScore(score);
//   document.querySelector(".number-input").value = "";
//   displayBackgroundColor("rgb(0, 0, 0)");
// });

// ***
// else if (guessingNumber > secretNumber) {
//   if (score > 1) {
//     document.querySelector(".guess-message").textContent = "Too big!";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".guess-message").textContent = "Game Over!";
//     document.querySelector(".score").textContent = 0;
//     document.querySelector("body").style.backgroundColor = "rgb(255, 0, 0)";
//   }
  
// } else if (guessingNumber < secretNumber) {
//   if (score > 1) {
//     document.querySelector(".guess-message").textContent = "Too small!";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".guess-message").textContent = "Game Over!";
//     document.querySelector(".score").textContent = 0;
//     document.querySelector("body").style.backgroundColor = "rgb(255, 0, 0)";
//   }
// }


// console.log(document.querySelector(".guess-message").textContent);// манипулятор DOM

// document.querySelector(".guess-message").textContent = "Right!";

// document.querySelector(".question").textContent = 7;

// document.querySelector(".score").textContent = 11;

// console.log(document.querySelector(".number-input").value);

// document.querySelector(".number-input").value = 13;

// console.log(document.querySelector(".number-input").value);

// const eventHandler = function() {
//   console.log(document.querySelector(".number-input").value);
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Full code 

// 'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayGuessMessage = function(message) {
  document.querySelector(".guess-message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function() {
  const guessingNumber = Number(document.querySelector(".number-input").value);
  console.log(typeof guessingNumber);

  if (!guessingNumber) {// No input
    displayGuessMessage("Input some number!");
    // document.querySelector(".guess-message").textContent = "Input some number!";
  } else if (guessingNumber === secretNumber) { // Player win
    displayGuessMessage("Right!");
    // document.querySelector(".guess-message").textContent = "Right!";
    document.querySelector(".question").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(9, 250, 21)";
    document.querySelector(".question").style.width = "50rem";

    if(score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    } 

  } else if(guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(guessingNumber > secretNumber ? "Too big!" : "Too small");
      // document.querySelector(".guess-message").textContent = guessingNumber > secretNumber ? "Too big!" : "Too small"; 
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayGuessMessage("Game Over!");
      // document.querySelector(".guess-message").textContent = "Game Over!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "rgb(255, 0, 0)";
    } 
  } // *** 
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20

  document.querySelector(".question").textContent = "???";
  document.querySelector(".question").style.width= "25rem";
  displayGuessMessage("Begin guessing");
  // document.querySelector(".guess-message").textContent = "Begin guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number-input").value = "";
  document.querySelector("body").style.backgroundColor = "rgb(0, 0, 0)";
});




document.querySelector('.check').addEventListener('click', function() {
  console.log(document.querySelector('.number-input').value);
})