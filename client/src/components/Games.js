const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");
//const playNewBtn = document.querySelector(".play-new")

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 10;

const resetGame = () => {
    //reset game elements after pop-up
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `/client/src/components/GameImages/hangman-${wrongGuessCount}.png`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
}

//const getNewGame = () => {
//
//}

//get puzzle word
const getRandomWord = () => {
    const { word } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    //console.log(word);
    //document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

const gameOver = (isVictory) => {
    //after wait time, show pop-up with info
    setTimeout (() => {
        const modalText = isVictory ? `You guessed the word:` : `The correct word was:`;
        gameModal.querySelector("img").src = `/client/src/components/GameImages/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Winner!' : 'Game Over!'}`;        
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        
        gameModal.classList.add("show");
    }, 300);
}

//identifying letters in puzzle
const initGame = (button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)) {
        //console.log(clickedLetter, " is in the word");
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        //console.log(clickedLetter, " in not in the word");
        wrongGuessCount++;
        //update hangman img if wrong guess made
        hangmanImage.src = `/client/src/components/GameImages/hangman-${wrongGuessCount}.png`;
    }
    button.disabled = true;
    //button.clickedLetter = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

//keyboard buttons
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();

playAgainBtn.addEventListener("click", getRandomWord);
//playNewBtn.addEventListener("click", getNewGame);