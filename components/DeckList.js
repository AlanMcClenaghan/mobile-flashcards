import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'

// Deck List View (Default View)
// displays the title of each Deck
// displays the number of cards in each deck

class DeckList extends Component {

  state = {
    ready: false
  }

  componentDidMount() {

    const { dispatch } = this.props
    getDecks()
      .then(decks => dispatch(receiveDecks(decks)))
      .then(() => {
        this.setState(() => ({ ready: true }))
      })

  }

  render() {

    const { ready } = this.state
    const { decks } = this.props

    if (ready === false) {
      return (
        <AppLoading />
      )
    }

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

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});