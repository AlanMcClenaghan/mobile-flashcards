import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import Button from './Button'
import { black, white } from '../utils/colors'

// Individual Deck View
// displays the title of the Deck
// displays the number of cards in the deck
// displays an option to start a quiz on this specific deck
// An option to add a new question to the deck

class Deck extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      title: navigation.state.params.entryId
    }
  }

  render() {

    const deck = this.props.navigation.state.params.entryId
    const { decks } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{decks[deck].title}</Text>
        <Text>{decks[deck].questions.length} {decks[deck].questions.length === 1 ? "card" : "cards"}</Text>

        <View style={styles.buttons}>
          <Button
            onPress={() => this.props.navigation.navigate('AddCard', { entryId: deck })}
            style={styles}
            text={"Add Card"}
            backgroundColor={white}
            color={black}
          />
          <Button
            onPress={() => this.props.navigation.navigate('Quiz', { entryId: deck })}
            style={styles}
            text={"Start Quiz"}
            backgroundColor={black}
            color={white}
          />
        </View>

      </View>
    )
  }

}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceaf1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 10,
    fontSize: 30,
    color: black,
    textAlign: 'center',
  },
  buttons: {
    marginTop: 150,
  },
  button: {
    width: 200,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: black,
  },
  buttonText: {
    textAlign: 'center'
  }
});