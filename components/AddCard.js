import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { addCardToDeck } from '../utils/api'
import { addCard } from '../actions'
import Button from './Button'
import { black, white } from '../utils/colors'

// New Question View
// An option to enter in the question
// An option to enter in the answer
// An option to submit the new question

class AddCard extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      title: "Add Card"
    }
  }

  state = {
    question: '',
    answer: '',
  }

  handleChangeQuestion = (question) => {
    this.setState({
      question
    })
  }

  handleChangeAnswer = (answer) => {
    this.setState({
      answer
    })
  }

  handleSubmit = () => {
    const { question, answer } = this.state
    const { dispatch, navigation } = this.props
    const deck = navigation.state.params.entryId

    if (!question && !answer) {
      Alert.alert(
        'No Question or Answer',
        'Please type in a question and an answer for your card',
        [
          { text: 'OK' },
        ],
      )
    } else if (!question) {
      Alert.alert(
        'No Question',
        'Please type in a question  for your card',
        [
          { text: 'OK' },
        ],
      )
    } else if (!answer) {
      Alert.alert(
        'No Answer',
        'Please type in an answer  for your card',
        [
          { text: 'OK' },
        ],
      )
    } else {
      const card = {
        question,
        answer
      }

      addCardToDeck(deck, card)

      dispatch(addCard(deck, card))

      navigation.dispatch(NavigationActions.back())

      this.setState(() => ({
        question: '',
        answer: '',
      }))

    }
  }

  render() {

    const { answer, question } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={this.handleChangeQuestion}
            value={question}
            placeholder="Question"
          ></TextInput>
          <TextInput
            style={styles.input}
            onChangeText={this.handleChangeAnswer}
            value={answer}
            placeholder="Answer"
          ></TextInput>
          <Button
            onPress={this.handleSubmit}
            style={styles}
            text={"Submit"}
            backgroundColor={black}
            color={white}
          />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddCard)

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
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: black,
    backgroundColor: white,
    marginTop: 10,
    borderRadius: 5
  },
  button: {
    width: 200,
    backgroundColor: black,
    padding: 10,
    borderRadius: 5,
    marginTop: 200,
  },
  buttonText: {
    color: white,
    textAlign: 'center'
  }
});