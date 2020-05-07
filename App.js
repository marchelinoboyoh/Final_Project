import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Covid from './components/Covid';
import Indo from './components/Indo';
import Greeting from './components/Greeting';
import Totalindo from './components/Totalindo';


class App extends Component {
  constructor(){
    super();
    }


  ComponentDidMount() {

  }
  

  render() {
    return(
      <View>
        <Greeting></Greeting>
        <Covid></Covid>
        <Totalindo></Totalindo>
        <Indo></Indo>
      </View>

    )
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

export default App;