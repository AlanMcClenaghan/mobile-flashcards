import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/api'

// Deck List View (Default View)
// displays the title of each Deck
// displays the number of cards in each deck

class DeckList extends Component {
  render() {

    const decks = getDecks()

    return (
      <View style={styles.container}>
        {Object.keys(decks).map((deck) => {
          const { title, questions } = decks[deck]
          return (
            <View key={deck} style={styles.container}>
              <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.navigation.navigate('Deck', { entryId: deck })}>
                <Text>{title}</Text>
                <Text>{questions.length} {questions.length === 1 ? "card" : "cards"}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }
}

export default DeckList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});