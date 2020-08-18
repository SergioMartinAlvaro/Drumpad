import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Header from './components/Header';
import { nanoid } from 'nanoid/async/index.native'

const App = () => {
  const [items, setItems] = useState([
    {id:  nanoid(), text: 'Milk'},
    {id:  nanoid(), text: 'Eggs'},
    {id:  nanoid(), text: 'Bread'},
    {id:  nanoid(), text: 'Juice'}
  ]);

  return (
    <View style={styles.container}
    >
      <Header title='Shopping List'/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
