import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'
import { black, white } from '../utils/colors'
import Button from './Button'

// New Deck View
// An option to enter in the title for the new deck
// An option to submit the new deck title

class NewDeck extends Component {

  state = {
    textInput: ''
  }

  handleChangeText = (textInput) => {
    this.setState({
      textInput
    })
  }

  handleSubmitTitle = () => {
    const { textInput } = this.state
    const { dispatch, navigation } = this.props

    if (!textInput) {
      Alert.alert(
        'No Title',
        'Please type in a title for your deck',
        [
          { text: 'OK' },
        ],
      )
    } else {
      const deck = {
        [textInput]: {
          title: textInput,
          questions: []
        }
      }

      saveDeckTitle(textInput)

      dispatch(addDeck(deck))

      navigation.navigate('Deck', { entryId: textInput })

      this.setState(() => ({
        textInput: ''
      }))
    }
  }

  render() {

    const { textInput } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.handleChangeText}
          value={textInput}
          placeholder="Deck Title"
        ></TextInput>
        <Button
          onPress={this.handleSubmitTitle}
          style={styles}
          text={"Create Deck"}
          backgroundColor={black}
          color={white}
        />
      </View>
    )
  }
}

export default connect()(NewDeck)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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