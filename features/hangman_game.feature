Feature: Hangman Game
  As a player, I want to play the Hangman game, so I can guess the secret word.

  Scenario: Guess a Correct Letter
    Given the Hangman game is started with the word "vapedecerecita"
    When the player guesses the letter "e"
    Then the game should display "Correct guess: e"
    And the word display should be "___e_e_e_e____"

  Scenario: Guess an Incorrect Letter
    Given the Hangman game is started with the word "vapedecerecita"
    When the player guesses the letter "x"
    Then the game should display "Incorrect guess: x"


  Scenario: Win the Game
    Given the Hangman game is started with the word "vapedecerecita"
    When the player guesses all the letters correctly: "v", "a", "p", "e", "d", "c", "r", "i", "t"
    Then the game should display "vapedecerecita"


  Scenario: Lose the Game
    Given the Hangman game is started with the word "vapedecerecita"
    When the player makes 6 incorrect guesses
    Then the game should display "You lost! The word was: vapedecerecita"
