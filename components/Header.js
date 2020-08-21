import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const [isLoaded] = useFonts({
    "LunchFont": require('../assets/fonts/LunchFont.ttf')
});
const data = [{ key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' }];
const numColumns = 3;


export default class Header extends React.Component {

    formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);

        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns) {
            data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
            numberOfElementsLastRow = numberOfElementsLastRow + 1;
        }

        return data;

    };

    renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={[styles.item]} />
        }
        return (
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.key}</Text>
            </View>
        )
    }


    render() {
        return(
            <FlatList
              data = { data }
              style = { styles.container }
              renderItem = { renderItem }
              numColumns = { numColumns } ></FlatList>
        )
    }

   /* if(!isLoaded) {
        return <AppLoading />
    } else {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>LaunchApp</Text>
            </View>
        )
    }*/

}

Header.defaultProps = {
    title: 'LaunchApp'
}

const styles = StyleSheet.create({
    header: {
        marginTop: 60,
        height: 80,
        padding: 20,
        alignItems: "center",
        textAlign: "center",
        backgroundColor: 'transparent',
        borderWidth: 5,
        borderColor: "#7A2D93"
    },
    text: {
        fontFamily: 'LunchFont',
        color: '#7A2D93',
        fontSize: 32,
        alignSelf: "center",
        textAlign: 'center'
    },
    container: {
        flex: 1,
        marginVertical: 20
    },
    item: {
        backgroundColor: '#4D243D',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / 3
    }
})