import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, Alert } from "react-native";
import * as ScreenOrientation from 'expo-screen-orientation';
import { nanoid } from 'nanoid/async/index.native';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
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
             <View style={styles.bottom}>
               <View style={styles.bottomItem}>
                 <View style={styles.bottomItemInner}></View>
               </View>
               <View style={styles.bottomItemMain}>
                 <View style={styles.bottomItemInnerMain}>
                   <Text style={styles.text}>LaunchApp</Text>
                 </View>
               </View>
               <View style={styles.bottomItem}>
                 <View style={styles.bottomItemInner}></View>
               </View>
             </View>
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
  bottom: {
    width: '100%',
    height: '45%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 70
  },
  bottomItem: {
    width: '20%',
    height: '11.5%',
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: '#7A2D93',
    marginTop: 30,
    zIndex: 10

  },
  bottomItemMain: {
    width: '60%',
    height: '20%'
  },
  bottomItemInnerMain: {
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
