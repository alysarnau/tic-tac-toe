// Figure out how to use reset button without refreshing whole page
// Stop game and declare winner once either playerScore = 3
// Create simple function that chooses and selects empty square at random
// Add time delay bw your turn and computer turn
// create a mini-max algo SUPER BONUS
    // https://towardsdatascience.com/how-a-chess-playing-computer-thinks-about-its-next-move-8f028bd0e7b1

//creates turn counter!
let turnCounter = 1;
let currentPlayer = 'PLAYER ONE'

// CREATE OBJECTS TO HOLD SCORES FOR THE PLAYERS
// THE PLAYERS SHOULD BE OBJECTS
let playerOne = {score: 0}
let playerTwo = {score: 0}


// set variables for all square divs
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');
const div4 = document.querySelector('#div4');
const div5 = document.querySelector('#div5');
const div6 = document.querySelector('#div6');
const div7 = document.querySelector('#div7');
const div8 = document.querySelector('#div8');
const div9 = document.querySelector('#div9');

// define text blocks
const whoseTurn = document.querySelector('#whose-turn');
const resultPara = document.querySelector('#win-lose');
const scoreboard = document.querySelector('#scoreboard');
// define container and squareDivs
const container = document.querySelector('#container');
const squareDivs = document.getElementsByClassName('square');

// create winner variable
let winner;
// create checkwinner function
const checkWinner = () => {
    //win conditions
    if (((div1.innerHTML === div2.innerHTML) && (div2.innerHTML === div3.innerHTML)) ||
        ((div4.innerHTML === div5.innerHTML) && (div5.innerHTML === div6.innerHTML)) ||
        ((div7.innerHTML === div8.innerHTML) && (div8.innerHTML === div9.innerHTML)) ||
        ((div7.innerHTML === div4.innerHTML) && (div4.innerHTML === div1.innerHTML)) ||
        ((div8.innerHTML === div5.innerHTML) && (div5.innerHTML === div2.innerHTML)) ||
        ((div9.innerHTML === div6.innerHTML) && (div6.innerHTML === div3.innerHTML)) ||
        ((div7.innerHTML === div5.innerHTML) && (div5.innerHTML === div3.innerHTML)) ||
        ((div9.innerHTML === div5.innerHTML) && (div5.innerHTML === div1.innerHTML)))
    {
        winner = currentPlayer;
        if (winner === playerOne) {
            playerOneScore += 1;
        } else {
            playerTwoScore += 1;
        }

//        need to increase winner's score by one
        alertWinner();
        console.log (`${winner} wins`);
    } else {
        return;
    } 
}

// on WIN condition, what do we want it to do?
// 2. Update Player 1 / Player 2 Scoreboard
// need to declare player scores
let playerOneScore = 0;
let playerTwoScore = 0;
// 4. Disable further clicks
    // for (let i = 0; i < squareDivs.length; i++) {
    //     squareDivs[i].classList.add(null);
    // }

console.log(scoreboard);
//create function to alert winner and update result p
const alertWinner = () => {
    if (currentPlayer === 'PLAYER TWO') {
        alert(`Forrester! Forrester! Doctor Clayton Forrester!`);
        } else {
        alert(`CROOOOOOOOOOOOOOOOOOOOOW!`)  
        }
    resultPara.innerText = 'Play Again?';
    scoreboard.innerHTML = `| PLAYER 1: ${playerOneScore} |<br /> | PLAYER 2: ${playerTwoScore} |`
    whoseTurn.innerText = `${winner} wins!`;
}

// add event listener to all divs
for (let i = 0; i < squareDivs.length; i++) {
    const squareDiv = document.getElementById(`div${[i]}`)
    squareDivs[i].addEventListener('click', function handleClick(e) {
        //first, let's test if there's already something there

        // Adds appropriate image to clicked square
        squareDivs[i].classList.add('clicked');
        if (currentPlayer === 'PLAYER ONE') {
            squareDivs[i].classList.add('playerOne');
            squareDivs[i].innerHTML = `<span>${currentPlayer}</span>`;
            // problem with this is that it doesn't stop turncounter
        } else {
            squareDivs[i].classList.add('playerTwo');
            squareDivs[i].innerHTML = `<span>${currentPlayer}</span>`;
        }
        whoseTurn.innerHTML = `${currentPlayer}'s turn!`;
        checkWinner();
        checkDraw();
        turnCounter += 1;
        // this changes the current player!
        if ((turnCounter % 2) ==! 0) {
            currentPlayer = 'PLAYER ONE';
        } else {
            currentPlayer = 'PLAYER TWO';
        }
        },
        // this only lets a person click once!
        {once:true})
}

// Detect Draw function
// create variable for clicked divs
const clickedDivs = document.getElementsByClassName('clicked');
const checkDraw = () => {
    if (squareDivs.length === clickedDivs.length) {
    console.log('tis a draw');
    whoseTurn.innerText = `No one wins. I hope you're happy.`;
    resultPara.innerText = 'You better restart and try harder, pal.'
}

// reset button semiDONE
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
// implement reset button without reloading whole page
// track players wins over time
// add simple AI that has the computer pick an random empty square
// Make your computer seem more human by adding a short time delay between your turn and the computer's turn.

// SUPER DUPER BONUS
// Add an AI that can beat you every time with the mini-max algorithm.
}
