import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// Deck List View (Default View)
// displays the title of each Deck
// displays the number of cards in each deck

class DeckList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Deck List View</Text>
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
  },
});