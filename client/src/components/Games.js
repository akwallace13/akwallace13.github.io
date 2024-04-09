const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");

let currentWord, wrongGuessCount = 0;
const maxGuesses = 10;

//get puzzle word
const getRandomWord = () => {
    const { word } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(word);
    //document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}

//identifying letters in puzzle
const initGame = (button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)) {
        //console.log(clickedLetter, " is in the word");
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
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
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
}

//keyboard buttons
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();