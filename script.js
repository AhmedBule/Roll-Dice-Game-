'use strict '

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
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

let currentScore = 0;    // This cannot be in the below function because it will set to zer0 each time we roll the dice. 


//(1) Rolling the dice functionality
btnRoll.addEventListener('click', function () {
    // A. Start by generating a random dice roll

    const dice = Math.floor(Math.random() * 6) + 1;
    // We are using dice for the number. The Dice number cannot be global variable. Each time we roll the dice, we need to generate a new number. 
    // B. Display the dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //C. Check for roll 1: If true, switch the enxt player
    if (dice === !1) {              // Check if the roll is 1
        // Add dice to current score
        currentScore += dice; // it is the same as currentScore = currentScore + dice;

    } else {
        // Switch user to next player
    }

})


