const hiddenWordElement = document.getElementById("hidden-word");
const remainingAttemptsElement = document.getElementById("attempts");
const guessedLettersElement = document.getElementById("guessed");
const letterInputElement = document.getElementById("letter-input");
const guessButton = document.getElementById("guess-btn");
const resultElement = document.getElementById("result");



// Create a new instance of HangmanGame
const game = new HangmanGame("vapedecerecita");

// Display initial game state
hiddenWordElement.textContent = game.start();
remainingAttemptsElement.textContent = game.remainingAttempts;

// Add event listener to guess button
guessButton.addEventListener("click", () => {
    const letter = letterInputElement.value.trim();

    if (letter) {
        const guessResult = game.guess(letter);
        guessedLettersElement.textContent = Array.from(game.guessedLetters).join(", ");
        hiddenWordElement.textContent = game.displayWord();
        remainingAttemptsElement.textContent = game.displayGameState();

        if (game.isGameOver()) {
            guessButton.disabled = true;
            if (game.remainingAttempts === 0) {
                resultElement.textContent = "You lost! The word was: " + game.secretWord;
            } else {
                resultElement.textContent = "Congratulations! You won!";
            }
        }
    }

    letterInputElement.value = "";
});
