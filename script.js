'use strict '

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice')  // We need diceEl for the element
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


//console.log(btnRoll)



btnNew.addEventListener('click', function () {
    console.log('Button new was clicked by Ahmed Bule')
})

btnHold.addEventListener('click', function () {
    console.log('Button hold was clicked by Ahmed Bule ')
})
// Starting conditions 
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');



//(1) Rolling the dice functionality
btnRoll.addEventListener('click', function () {
    // 1. Start by generating a random dice roll

    const dice = Math.trunc(Math.random() * 6) + 1;
    // We are using dice for the number. The Dice number cannot be global variable. Each time we roll the dice, we need to generate a new number. 
    // 2. Display the dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for roll 1: If true, switch the enxt player

})


