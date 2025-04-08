/* generar numero aleatorio */ 

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const guesses = document.querySelector('.guesses');

const lastResult = document.querySelector('.lastResult');

const lowOrHigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');

const guessField = document.querySelector ('.guessField');

let guessCount = 1;

let resetButton;

function checkGuess() {
    const lastResult = document.querySelector('.lastResult'); 
    const guesses = document.querySelector('.guesses');
    const lowOrHigh = document.querySelector('.lowOrHi');

    if (!lastResult || !guesses || !lowOrHigh) {
        console.error("Eroare: Unul dintre elementele HTML nu a fost găsit.");
        return;
    }

    let userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = "Intentos Anteriores: ";
    }
    guesses.textContent += userGuess + " ";

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You found the number!";
        lastResult.style.backgroundColor = "green";
        lowOrHigh.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = "Ohh GAME OVER";
        setGameOver();
    } else {
        lastResult.textContent = "Incorrecto";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = "El numero es muy bajo";
        } else {
            lowOrHigh.textContent = "El numero es muy alto";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}


 guessSubmit.addEventListener('click' , checkGuess);
 
 function setGameOver() {
    guessField.disabled = true; //disable the input
    guessSubmit.disabled = true; //disable the submit button
    //Create a new button to reset the game
    resetButton = document.createElement('button');
    resetButton.className = 'resetButton';
    resetButton.textContent = "Restart";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click' , resetGame);
 }

function resetGame (){
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i=0; i < resetParas.length; i++) {
        resetParas[i].textContent = "";
        resetParas[i].style.backgroundColor = 'black';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    
    lastResult.style.backgroundColor = 'black';

    randomNumber = Math.floor(Math.random() * 100) + 1;

}