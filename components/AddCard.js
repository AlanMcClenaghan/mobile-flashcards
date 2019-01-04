import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// New Question View
// An option to enter in the question
// An option to enter in the answer
// An option to submit the new question

class AddCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AddCard View</Text>
      </View>
    )
  }
}

export default AddCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});