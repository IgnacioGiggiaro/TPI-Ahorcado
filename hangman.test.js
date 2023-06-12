// hangman.test.js
const HangmanGame = require('./hangman');

test('Initialize game and display hidden word', () => {
    const game = new HangmanGame('apple');
    game.start();
});

test('Guess a letter', () => {
    const game = new HangmanGame('apple');
    game.start();
    game.guess('a');
});

test('Display current state of the word', () => {
    const game = new HangmanGame('apple');
    game.start();
    game.guess('a');
    game.guess('l')
    game.displayWord();
});

test('Check if game is over', () => {
    const game1 = new HangmanGame('apple');
    game1.start();
    game1.guess('a');
    game1.guess('p');
    expect(game1.isGameOver()).toBe(false);

    const game2 = new HangmanGame('apple');
    game2.start();
    game2.guess('b');
    game2.guess('c');
    game2.guess('d');
    game2.guess('j');
    game2.guess('f');
    game2.guess('g');
    expect(game2.isGameOver()).toBe(true);
});




























