const HangmanGame = require('../../hangman');
const { Given } = require('cucumber'); // Import the Given function from cucumber
const { When } = require('cucumber'); // Import the Given function from cucumber
const { Then } = require('cucumber'); // Import the Given function from cucumber


const game = new HangmanGame("vapedecerecita");
let guessResult;

Given('the Hangman game is started with the word {string}', function (secretWord) {
    game.secretWord = secretWord;
    game.start();
});

When('the player guesses the letter {string}', function (letter) {
    guessResult = game.guess(letter);
});

When('the player guesses all the letters correctly: {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}', function (letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8, letter9) {
    const letters = [letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8, letter9];
    letters.forEach(letter => game.guess(letter));
});

Then('the game should display {string}', function (expectedOutput) {
    expect(guessResult).toEqual(expectedOutput);
});

Then('the word display should be {string}', function (expectedWordDisplay) {
    expect(game.displayWord()).toEqual(expectedWordDisplay);
});

Then('the remaining attempts should be decreased by {int}', function (decreasedAttempts) {
    expect(game.remainingAttempts).toEqual(6 - decreasedAttempts);
});

Then('the game state should remain unchanged', function () {
    expect(game.guessedLetters.size).toEqual(0);
    expect(game.remainingAttempts).toEqual(6);
});
