import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { getDecks } from '../utils/api'

// Individual Deck View
// displays the title of the Deck
// displays the number of cards in the deck
// displays an option to start a quiz on this specific deck
// An option to add a new question to the deck

class Deck extends Component {

  static navigationOptions = ({ navigation }) => {
    const { entryId } = navigation.state.params

    return {
      title: navigation.state.params.entryId
    }
  }

  render() {

    const deck = this.props.navigation.state.params.entryId
    const decks = getDecks()

    return (
      <View style={styles.container}>
        <Text>{decks[deck].title}</Text>
        <Text>{decks[deck].questions.length} {decks[deck].questions.length === 1 ? "card" : "cards"}</Text>
      </View>
    )
  }

}

export default Deck

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});