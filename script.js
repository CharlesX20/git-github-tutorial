let counter = 0;
const counterNumber = document.getElementById('counterResult');
const increaseBtn = document.getElementById('increase-btn');
const resetBtn = document.getElementById('reset-btn');
const decreaseBtn = document.getElementById('decrease-btn');

increaseBtn.onclick = function(){
    counter = counter + 1;
    counterNumber.textContent = counter;
}
resetBtn.onclick = function(){
    counterNumber.textContent = counter = 0;
}
decreaseBtn.onclick = function(){
    counter = counter - 1;
    counterNumber.textContent = counter;
}
//dice program
const rollButton = document.getElementById('diceButton');
const dice1 = document.getElementById('diceNumber1');
const dice2 = document.getElementById('diceNumber2');
let randomNumber1;
let randomNumber2;

rollButton.onclick = function(){
  randomNumber1 = Math.floor(Math.random()*6) + 1;
  randomNumber2 = Math.floor(Math.random()*6) + 1;

  dice1.textContent = '🎲'.repeat(randomNumber1);
  dice2.textContent = '🎲'.repeat(randomNumber2);
}
