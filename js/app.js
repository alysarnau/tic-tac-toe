// spend 30 mins-1 hr planning out how this will be approached
// create game board
// easier way to test draw conditions - start at the middle going down: down middle, up left, down right

//create turn counter! Odds = player1, Evens = player2
let turnCounter = 1;
let currentPlayer = 'PLAYER ONE'

const container = document.querySelector('#container');
const squareDivs = document.getElementsByClassName('square');
// add event listener to all divs
for (let i = 0; i < squareDivs.length; i++) {
    const squareDiv = document.getElementById(`div${[i]}`)
    squareDivs[i].addEventListener('click', function handleClick(e) {
        // Adds appropriate image to clicked square
        if (currentPlayer === 'PLAYER ONE') {
            squareDivs[i].classList.add('playerOne')
        } else {
            squareDivs[i].classList.add('playerTwo')
        }
        turnCounter += 1;
        // this changes the current player!
        if ((turnCounter % 2) ==! 0) {
            currentPlayer = 'PLAYER ONE';
        } else {
            currentPlayer = 'PLAYER TWO';
        }
        // change whoseTurn text
        whoseTurn.innerHTML = `It's ${currentPlayer}'s turn!`;
        })
}

// set variables for all square divs
const divOne = document.querySelector('#div1');
const divTwo = document.querySelector('#div2');
const divThree = document.querySelector('#div3');
const divFour = document.querySelector('#div4');
const divFive = document.querySelector('#div5');
const divSix = document.querySelector('#div6');
const divSeven = document.querySelector('#div7');
const divEight = document.querySelector('#div8');
const divNine = document.querySelector('#div9');

// define whose-turn p
const whoseTurn = document.querySelector('#whose-turn');
console.log(whoseTurn);

// on square click, we want to
//  1. set background of div to either crow (image1) or forrester (image2) by
//      change class (player1 or player2)!!! DONE!
//  2. change the "turn order" variable to either Player 1 or Player 2 DONE
//      2a. This should also change the "player1/player2 turn" text DONE
//  3. WE WILL NEED A "MOVETRACKER" VARIABLE DONE
//  4. We will need to disable further clicks

// if x or o, use while loop

// we want to evaluate a win condition after each turn
// what does a win condition look like? 8 win conditions
// the same image in the following combinations
//  1,2,3
//  4,5,6
//  7,8,9
//  7,4,1
//  8,5,2
//  9,6,3
//  7,5,3
//  9,5,1
// can use loop to check! (.square[i])
// we can use classes to check - if 1,2,3 are the same class, then they win!
// const checkWinner = () => {
//     // win condition
//     if ()
// }

// on WIN condition, what do we want it to do?
// 1. update the message that says "PLAYER ONE WIN!/PLAYER TWO WIN!"
//  1a. Create popup depending on who wins?
//  1b. "CROOOOOOOOOOOOOOOW" versus "FORRESTER! FORRESTER! DOCTOR CLAYTON FORRESTER!"
// 2. Update Player 1 / Player 2 Scoreboard
// 3. If player1 or player2 score = 3, declare winner!
//  3a. Update final 'div' text with final score
// 4. Disable further clicks

// reset button on click should reset inner html for container

// BONUS:
// track players wins over time
// add simple AI that has the computer pick an random empty square
// Make your computer seem more human by adding a short time delay between your turn and the computer's turn.

// SUPER DUPER BONUS
// Add an AI that can beat you every time with the mini-max algorithm.


