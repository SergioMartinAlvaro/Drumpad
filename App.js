import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, Alert } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import { nanoid } from 'nanoid/async/index.native';
import Header from './components/Header';
import Footer from './components/Footer';
import Launchpad from './components/Launchpad';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "@use-expo/font";

// It prevents the orientation change of the app
ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

const App = () => {
  
  const [isLoaded] = useFonts({
    "LunchFont": require('./assets/fonts/LunchFont.ttf')
  });

  if(isLoaded) {
    return (
      <View style={styles.container}
      >
      <LinearGradient
            // Button Linear Gradient
            colors={['#EBCA7F', '#D3D3D3']}
            style={{flex:1, alignItems: 'center', borderRadius: 5 }}>
            <Header />
            <Launchpad />
            <Footer />
          </LinearGradient>
      </View>
    );
  } else {
    return <View></View>
  }
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {

  },
  header: {
    width: '100%',
    height: '45%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 70
  },
  headerItem: {
    width: '20%',
    height: '11.5%',
  },
  headerItemInner: {
    flex: 1,
    backgroundColor: '#7A2D93',
    marginTop: 30,
    zIndex: 10

  },
  headerItemMain: {
    width: '60%',
    height: '20%'
  },
  headerItemInnerMain: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 6,
    borderColor: '#7A2D93',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'LunchFont',
    color: '#7A2D93',
    fontSize: 32,
    alignSelf: "center",
    textAlign: 'center'
},
});
