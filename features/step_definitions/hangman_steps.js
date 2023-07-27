const HangmanGame = require('../../hangman');
const { Given, When, Then } = require('cucumber');
//const expect = require('expect').expect;
const { expect} = require("chai"); // Add this line at the top to use expect


const game = new HangmanGame("vapedecerecita");
let guessResult;
let wordDisplayResult;

Given('the Hangman game is started with the word {string}', function (secretWord) {
    game.secretWord = secretWord;
    game.start();
});

When('the player guesses the letter {string}', function (letter) {
    guessResult = game.guess(letter);
    wordDisplayResult = game.displayWord(); // Add this line to capture the word display
});

When('the player guesses all the letters correctly: {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}', function (string1, string2, string3, string4, string5, string6, string7, string8, string9) {
    const letters = [string1, string2, string3, string4, string5, string6, string7, string8, string9];
    letters.forEach(letter => game.guess(letter));
    wordDisplayResult = game.displayWord(); // Add this line to capture the word display
});

Then('the game should display {string}', function (expectedOutput) {
    expect(wordDisplayResult).to.equal(expectedOutput);
});


Then('the word display should be {string}', function (expectedWordDisplay) {
    expect(wordDisplayResult).toEqual(expectedWordDisplay); // Update the check to wordDisplayResult
});

Then('the remaining attempts should be decreased by {int}', function (decreasedAttempts) {
    expect(game.remainingAttempts).toEqual(6 - decreasedAttempts);
});

Then('the game state should remain unchanged', function () {
    expect(game.guessedLetters.size).toEqual(0);
    expect(game.remainingAttempts).toEqual(6);
});

