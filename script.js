const userNumber = document.querySelector("#userNumber");
const submitButton = document.querySelector(".submitButton");
const userNumberOutput = document.querySelector(".userNumberOutput");
const userNumberOutputResult = document.querySelector(".userNumberOutputResult");
const endResult = document.querySelector(".endResult");

let minNumber = 1;
let maxNumber = 100;
let attempts = 0;
let randomNumber = Math.floor(Math.random() * maxNumber) + minNumber;

submitButton.onclick = function() {
  attempts++;
  userNumberValue = Number(userNumber.value);

  if (!isNaN(userNumberValue)) {
    userNumberOutput.textContent = `You entered ${userNumberValue}`;

    if (userNumberValue === randomNumber) {
    userNumberOutputResult.style.backgroundColor = "green";
      userNumberOutputResult.textContent = "Correct!";
      endResult.textContent = `The correct answer was ${randomNumber} and it took you ${attempts} attempts`;
      // You can add code here to reset the game or disable the button
    } else if (userNumberValue < randomNumber) {
        userNumberOutputResult.style.backgroundColor = "red";
      userNumberOutputResult.textContent = "Incorrect!";
      endResult.textContent = `${userNumberValue} is lower, Please try again!`;
    } else {
        userNumberOutputResult.style.backgroundColor = "red";
      userNumberOutputResult.textContent = "Incorrect!";
      endResult.textContent = `${userNumberValue} is higher, Please try again!`;
    }
  } else {
    userNumberOutput.textContent = "Please enter a number!";
  }

  userNumber.value = "";
}