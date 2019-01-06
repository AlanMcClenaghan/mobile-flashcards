import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { white } from '../utils/colors'

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
        this.setState(() => ({
          ready: true
        }))
      })

  }

  render() {

    const { ready } = this.state
    const { decks } = this.props

    if (!ready) {
      return (
        <AppLoading />
      )
    }

    return (
      <ScrollView>
        {Object.keys(decks).map((deck) => {
          const { title, questions } = decks[deck]
          return (
            <View key={deck} style={styles.container}>
              <TouchableOpacity
                style={styles.card}
                onPress={() => this.props.navigation.navigate('Deck', { entryId: deck })}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text>{questions.length} {questions.length === 1 ? "card" : "cards"}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
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
    backgroundColor: '#eceaf1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 200,
    width: 300,
    backgroundColor: white,
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  },
  cardTitle: {
    fontSize: 20,
  },
});