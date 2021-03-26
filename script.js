'use strict '

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')


//console.log(btnRoll)

btnRoll.addEventListener('click', function () {
    console.log('Button was clicked by Ahmed Bule')
})

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



//(1) Rolling the dice