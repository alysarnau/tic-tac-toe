// 22:33 STATUS - ALMOST DONE!
// track players wins over time [DONE]
// update! WIN STATE NOT TRIGGERING!
// Figure out how to use reset button without refreshing whole page
// Stop game and declare winner once either playerScore = 3
// Create simple function that chooses and selects empty square at random
// Add time delay bw your turn and computer turn
// create a mini-max algo
    // https://towardsdatascience.com/how-a-chess-playing-computer-thinks-about-its-next-move-8f028bd0e7b1

//creates turn counter!
let turnCounter = 1;
let currentPlayer = 'PLAYER ONE'

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
const checkWinner = () => {
    //IS THERE AN EASIER WAY
    if ((div1.innerHTML === div2.innerHTML) && (div2.innerHTML === div3.innerHTML)) {
        winner = currentPlayer;
        console.log (`${currentPlayer} wins`);
    }
    // // win condition
    // if (((div1.classList.contains('playerOne') && div2.classList.contains('playerOne')) && 
    //         (div2.classList.contains('playerOne') && div3.classList.contains('playerOne'))) ||
    //     ((div4.classList.contains('playerOne') && div5.classList.contains('playerOne')) && 
    //         (div5.classList.contains('playerOne') && div6.classList.contains('playerOne'))) || 
    //     ((div7.classList.contains('playerOne') && div8.classList.contains('playerOne')) && 
    //         (div8.classList.contains('playerOne') && div9.classList.contains('playerOne'))) ||
    //     ((div7.classList.contains('playerOne') && div4.classList.contains('playerOne')) && 
    //         (div4.classList.contains('playerOne') && div1.classList.contains('playerOne'))) ||
    //     ((div8.classList.contains('playerOne') && div5.classList.contains('playerOne')) && 
    //         (div5.classList.contains('playerOne') && div2.classList.contains('playerOne'))) ||
    //     ((div9.classList.contains('playerOne') && div6.classList.contains('playerOne')) && 
    //         (div6.classList.contains('playerOne') && div3.classList.contains('playerOne'))) ||
    //     ((div7.classList.contains('playerOne') && div5.classList.contains('playerOne')) && 
    //         (div5.classList.contains('playerOne') && div3.classList.contains('playerOne'))) ||
    //     ((div9.classList.contains('playerOne') && div5.classList.contains('playerOne')) && 
    //         (div5.classList.contains('playerOne') && div1.classList.contains('playerOne')))
    //     ) {
    //         winner = `PLAYER ONE`;
    //         playerOneScore += 1;
    //         alertWinner();
    // } else if (((div1.classList.contains('playerTwo') && div2.classList.contains('playerTwo')) && 
    //         (div2.classList.contains('playerTwo') && div3.classList.contains('playerTwo'))) ||
    //     ((div4.classList.contains('playerTwo') && div5.classList.contains('playerTwo')) && 
    //         (div5.classList.contains('playerTwo') && div6.classList.contains('playerTwo'))) || 
    //     ((div7.classList.contains('playerTwo') && div8.classList.contains('playerTwo')) && 
    //         (div8.classList.contains('playerTwo') && div9.classList.contains('playerTwo'))) ||
    //     ((div7.classList.contains('playerTwo') && div4.classList.contains('playerTwo')) && 
    //         (div4.classList.contains('playerTwo') && div1.classList.contains('playerTwo'))) ||
    //     ((div8.classList.contains('playerTwo') && div5.classList.contains('playerTwo')) && 
    //         (div5.classList.contains('playerTwo') && div2.classList.contains('playerTwo'))) ||
    //     ((div9.classList.contains('playerTwo') && div6.classList.contains('playerTwo')) && 
    //         (div6.classList.contains('playerTwo') && div3.classList.contains('playerTwo'))) ||
    //     ((div7.classList.contains('playerTwo') && div5.classList.contains('playerTwo')) && 
    //         (div5.classList.contains('playerTwo') && div3.classList.contains('playerTwo'))) ||
    //     ((div9.classList.contains('playerTwo') && div5.classList.contains('playerTwo')) && 
    //         (div5.classList.contains('playerTwo') && div1.classList.contains('playerTwo')))
    //     ) {
    //         winner = `PLAYER TWO`;
    //         playerTwoScore += 1;
    //         alertWinner();
    // }
}

// on WIN condition, what do we want it to do?
//  1b. play theme song? OPT OPT
// 2. Update Player 1 / Player 2 Scoreboard
// need to declare player scores
let playerOneScore = 0;
let playerTwoScore = 0;
// 4. Disable further clicks
    // for (let i = 0; i < squareDivs.length; i++) {
    //     squareDivs[i].classList.add(null);
    // }

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
        checkWinner();
        checkDraw();
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
        // check for WIN CONDITION
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
// can use loop to check? (.square[i])

console.log(scoreboard);
//create function to alert winner and update result p
const alertWinner = () => {
    if (currentPlayer === 'PLAYER ONE') {
        alert(`Forrester! Forrester! Doctor Clayton Forrester!`);
        } else {
        alert(`CROOOOOOOOOOOOOOOOOOOOOW!`)  
        }
    resultPara.innerText = 'Play Again?';
    scoreboard.innerHTML = `| PLAYER 1: ${playerOneScore} |<br /> | PLAYER 2: ${playerTwoScore} |`
    whoseTurn.innerText = `${winner} wins!`;
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
