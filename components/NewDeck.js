import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// New Deck View
// An option to enter in the title for the new deck
// An option to submit the new deck title

class NewDeck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>NewDeck View</Text>
      </View>
    )
  }
}

export default NewDeck

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});