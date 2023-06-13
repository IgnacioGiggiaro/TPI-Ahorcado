// hangman.test.js
const HangmanGame = require('./hangman');

test('Initialize game and display hidden word', () => {
    const game = new HangmanGame('apple');
    hiddenword=game.start();
    expect(hiddenword).toBe('_____');
});

test('Guess a correct letter', () => {
    const game = new HangmanGame('apple');
    game.start();
    resp=game.guess('a');
    expect(resp).toBe('Correct guess: a');
});

test('Guess an incorrect letter', () => {
    const game = new HangmanGame('apple');
    game.start();
    resp=game.guess('b');
    expect(resp).toBe('Incorrect guess: b');
});

test('Display current state of the word', () => {
    const game = new HangmanGame('apple');
    game.start();
    game.guess('a');
    game.guess('l')
    displayedword=game.displayWord();
    expect(displayedword).toBe('a__l_')
});

test('Check if game is over(false)', () => {
    const game1 = new HangmanGame('apple');
    game1.start();
    game1.guess('a');
    game1.guess('p');
    expect(game1.isGameOver()).toBe(false);
});

test('Check if game is over(true)', () => {
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

test('Display current state of the game when remaining Attempts is 4', () => {
    const game = new HangmanGame('apple');
    game.start();
    game.guess('a');
    game.guess('b');
    game.guess('j');
    remainingAttempts=game.displayGameState();
    expect(remainingAttempts).toBe(4)
});

test('Guess a letter that has already been guessed', () => {
    const game = new HangmanGame('apple');
    game.start();
    game.guess('a');
    resp=game.guess('a');
    expect(resp).toBe('Letter already guessed!');
});

test('Guess an invalid letter', () => {
    const game = new HangmanGame('apple');
    game.start();
    game.guess('a');
    resp=game.guess('1');
    game.guess('a');
    expect(resp).toBe('Invalid input');
});





















