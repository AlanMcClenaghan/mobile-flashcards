import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../actions'
import Button from './Button'
import { black, white, green, red } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

// Quiz View
// displays a card question
// an option to view the answer (flips the card)
// a "Correct" button
// an "Incorrect" button
// the number of cards left in the quiz
// Displays the percentage correct once the quiz is complete

class Quiz extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      title: "Quiz"
    }
  }


  state = {
    showAnswer: false,
    QuestionsCorrect: [],
    QuestionsIncorrect: []
  }

  toggleAnswer = () => {
    const { showAnswer } = this.state
    this.setState(() => ({
      showAnswer: !showAnswer
    }))
  }

  handleAnswer = (correct) => {
    const { decks } = this.props
    const deck = this.props.navigation.state.params.entryId
    const { showAnswer, QuestionsCorrect, QuestionsIncorrect } = this.state
    const questionCount = QuestionsCorrect.length + QuestionsIncorrect.length

    if (correct) {
      this.setState((previousState) => ({
        showAnswer: false,
        QuestionsCorrect: previousState.QuestionsCorrect.concat(decks[deck].questions[questionCount].question),
      }))
    } else {
      this.setState((previousState) => ({
        showAnswer: false,
        QuestionsIncorrect: previousState.QuestionsIncorrect.concat(decks[deck].questions[questionCount].question)
      }))
    }
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  tryAgain = () => {
    this.setState(() => ({
      showAnswer: false,
      QuestionsCorrect: [],
      QuestionsIncorrect: []
    }))
  }

  render() {

    const { decks } = this.props
    const deck = this.props.navigation.state.params.entryId

    const { showAnswer, QuestionsCorrect, QuestionsIncorrect } = this.state
    const numberCorrect = QuestionsCorrect.length
    const questionCount = numberCorrect + QuestionsIncorrect.length
    const totalQuestions = decks[deck].questions.length
    const percentageCorrect = (numberCorrect / totalQuestions * 100).toFixed()

    if (decks[deck].questions.length === 0) {
      return (
        <View style={styles.container}>
          <Text>There are no questions in this deck.</Text>
          <Text>Please add some questions.</Text>
          <Button
            onPress={this.goBack}
            style={styles}
            text={"Go Back"}
            backgroundColor={red}
            color={white}
          />
        </View>
      )
    }

    if (questionCount === totalQuestions) {

      clearLocalNotification()
        .then(setLocalNotification)

      return (
        <View style={styles.container}>
          <Text style={styles.text}>Quiz completed</Text>
          <Text style={styles.text}>You got {numberCorrect} {numberCorrect === 1 ? "question" : "questions"} correct out of {totalQuestions} {totalQuestions === 1 ? "question" : "questions"} answered ({percentageCorrect}%)</Text>
          <Button
            onPress={this.tryAgain}
            style={styles}
            text={"Try Again"}
            backgroundColor={green}
            color={white}
          />
          <Button
            onPress={this.goBack}
            style={styles}
            text={"Go Back"}
            backgroundColor={red}
            color={white}
          />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text>{questionCount + 1} / {totalQuestions}</Text>
        {!showAnswer
          ? <Text style={styles.question}>{decks[deck].questions[questionCount].question}</Text>
          : <Text style={styles.answer}>{decks[deck].questions[questionCount].answer}</Text>}

        <TouchableOpacity
          onPress={this.toggleAnswer}
        // style={[style.button, { backgroundColor }]}
        ><Text>{!showAnswer ? "Touch to show answer" : "Touch to show question"}</Text>
        </TouchableOpacity>

        <Button
          onPress={() => this.handleAnswer(true)}
          style={styles}
          text={"Correct"}
          backgroundColor={green}
          color={white}
        />
        <Button
          onPress={() => this.handleAnswer(false)}
          style={styles}
          text={"incorrect"}
          backgroundColor={red}
          color={white}
        />
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Quiz)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceaf1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 20,
    fontSize: 30,
    color: black,
    textAlign: 'center',
    width: 250
  },
  question: {
    margin: 20,
    fontSize: 30,
    color: black,
    textAlign: 'center',
    width: 250
  },
  answer: {
    margin: 20,
    fontSize: 20,
    color: black,
    textAlign: 'center',
    width: 250
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: black,
    marginTop: 10,
    borderRadius: 5
  },
  button: {
    width: 200,
    backgroundColor: black,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: white,
    textAlign: 'center'
  }
});