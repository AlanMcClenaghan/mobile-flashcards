import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import views and components
import DeckList from './components/DeckList'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import AddCard from './components/AddCard'

export default class App extends React.Component {
  // componentDidMount() {
  //   console.log('Before')
  //   debugger
  //   console.log('After')
  // }
  render() {
    return (
      <View style={styles.container}>
        <DeckList />
        <Deck />
        <Quiz />
        <NewDeck />
        <AddCard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
