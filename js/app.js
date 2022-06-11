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
        //first, let's test if there's already something there
        // Adds appropriate image to clicked square
        if (currentPlayer === 'PLAYER ONE') {
            squareDivs[i].classList.add('playerOne');
            // problem with this is that it doesn't stop turncounter
        } else {
            squareDivs[i].classList.add('playerTwo');
        }
        turnCounter += 1;
        //turnCounter += 1;
        // this changes the current player!
        if ((turnCounter % 2) ==! 0) {
            currentPlayer = 'PLAYER ONE';
        } else {
            currentPlayer = 'PLAYER TWO';
        }
        // change whoseTurn text
        whoseTurn.innerHTML = `${currentPlayer}'s turn!`;
        },
        // this only lets a person click once!
        {once:true})
}

// set variables for all square divs
// I WONT NEED THIS BC I CAN JUST SELECT WITH ID
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
const div4 = document.querySelector('#div4');
const div5 = document.querySelector('#div5');
const div6 = document.querySelector('#div6');
const div7 = document.querySelector('#div7');
const div8 = document.querySelector('#div8');
const div9 = document.querySelector('#div9');

// define whose-turn p
const whoseTurn = document.querySelector('#whose-turn');

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
//  1c. play theme song?
// 2. Update Player 1 / Player 2 Scoreboard
// 3. If player1 or player2 score = 3, declare winner!
//  3a. Update final 'div' text with final score
// 4. Disable further clicks

// reset button on click should reset inner html for container
const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', () => {
    console.log(resetButton);
    location.reload();
    // being a bit of a b-word now, to reassess tomorrow
    // //create function reset() that removes player-one & player-two class from ALL divs
    // const squareDivs = document.getElementsByClassName('square');
    // console.log(squareDivs);
    // // this deletes all existing containers
    // while (container.firstChild) {
    //     container.firstChild.remove();
    }
    //this will recreate new containers
    // for (let i = 1; i < 10; i++) {
    //     const div = document.createElement('div');
    //     div.setAttribute('id',`div${i}`);
    //     div.setAttribute('class', 'square');
    //     container.appendChild(div);
    // }
    // addEventListener('click', function handleClick();
    // }
)
// BONUS:
// track players wins over time
// add simple AI that has the computer pick an random empty square
// Make your computer seem more human by adding a short time delay between your turn and the computer's turn.

// SUPER DUPER BONUS
// Add an AI that can beat you every time with the mini-max algorithm.


