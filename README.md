# Mobile Flashcards Project

This is my final submission for Udacity's React & Redux Mobile Flashcards project.

The code does not include node modules. These can be included in the following way:

## Installation

* Clone or download the project files to your local machine.
* Install the project dependencies with `yarn install`
* start the development server with `yarn start`

## Usage

* User needs to access the app

* DeckList view displays:
  * Current list of decks and the number of cards in each deck
  * Button called Add Deck which takes the user to the NewDeck view
  * Button called Decks which returns the user to the DeckList view

* NewDeck view displays:
  * Question asking the user for a title for the new deck
  * Input field for the new Deck Title
  * Create Deck button to create the new Deck
    * Alert message will prevent user submitting a blank title
    * Alert message will prevent user submitting a title for a deck that already exists
    * If the new title is valid, the user is taken to the Deck view

* Deck view displays:
  * Link back to the DeckList view
  * Title of the view
  * Title of the deck
  * Number of cards in the deck
  * Button called Add Card which takes the user to the AddCard view
  * Button called Start Quiz which takes the user to the Quiz view

* AddCard view displays:
  * Link back to the Deck view
  * Title of the view
  * Input field for the new Question
  * Input field for the new Answer
  * Create Card to creat the new card
    * Alert message will prevent user submitting a card without a question, answer or both
    * If the new question and answer are valid, the user is taken back to the Deck view

* Quiz view displays:
  * Link back to the Deck view
  * Title of the view
  * The number of the current question and the total number of questions in the deck
  * The question
  * A "Touch to show answer" message that toggles the user to the answer
  * The answer (if toggled)
  * A "Touch to show question" message that toggles the user to the question (if toggled)
  * Button called Correct if the user knows the answer
  * Button called Incorrect if the user does not know the answer
  * When all the questions have been answred, the user gets message telling them how many they got right
  * Button called Try Again which resets the quiz
  * Button called Incorrect if the user does not know the answer
  * Button called Go Back which takes the user back to the Deck view
  * If there are no questions in the deck, the user will be presented with a Button called Go Back which takes the user back to the Deck view