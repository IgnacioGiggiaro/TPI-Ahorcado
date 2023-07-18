// hangman.js
class HangmanGame {
    constructor(secretWord) {

        this.secretWord = secretWord.toLowerCase();
        this.incorrectLetters=new Set();
        this.guessedLetters = new Set();
        this.remainingAttempts = 6;
    }

    start() {
        const hiddenWord = "_".repeat(this.secretWord.length);
        console.log(`Secret word: ${hiddenWord}`);
        return(hiddenWord);
    }

    guess(letter) {
        let resp='';
        const lowercaseLetter = letter.toLowerCase();
        if (!/^[a-z]$/.test(lowercaseLetter)) {
            console.log(`Invalid input: '${letter}' is not a valid letter!`);
            return('Invalid input');
        }
        if (this.guessedLetters.has(lowercaseLetter)) {
            console.log(`Letter '${letter}' already guessed!`);
            return ('Letter already guessed!');
        }
        if (this.secretWord.includes(lowercaseLetter)) {
            this.guessedLetters.add(lowercaseLetter);
            resp=`Correct guess: ${letter}`;
            console.log(resp);

        } else {
            this.remainingAttempts--;
            resp=`Incorrect guess: ${letter}`;
            this.incorrectLetters.add(lowercaseLetter)
            console.log(resp);

        }
        return(resp);
    }

    displayWord() {
        let displayedWord = '';
        for (const char of this.secretWord) {
            if (this.guessedLetters.has(char)) {
                displayedWord += char;
            } else {
                displayedWord += '_';
            }
        }
        console.log(`Word: ${displayedWord}`);
        return(displayedWord);
    }

    isGameOver() {
        const isWordGuessed = this.secretWord.split('').every(char => this.guessedLetters.has(char));
        return isWordGuessed || this.remainingAttempts === 0;
    }

    displayGameState() {
        const guessedLettersArray = Array.from(this.guessedLetters).join(', ');
        const incorrectLettersArray = Array.from(this.incorrectLetters).join(', ');
        console.log(`Guessed letters: ${guessedLettersArray} | Remaining attempts: ${this.remainingAttempts} | Incorrect letters: ${incorrectLettersArray}`);
        return(this.remainingAttempts)
    }
    playGame() {
        this.start();
        while (!this.isGameOver()) {
            const letter = prompt('Guess a letter:');
            this.guess(letter);
            this.displayWord();
            this.displayGameState();
        }
        if (this.remainingAttempts === 0) {
            console.log('You lost! The word was:', this.secretWord);
        } else {
            console.log('Congratulations! You won!');
        }
    }

}

module.exports = HangmanGame;
