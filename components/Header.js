import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";


const Header = () => {
    const [isLoaded] = useFonts({
        "LunchFont": require('../assets/fonts/LunchFont.ttf')
    });
    return (
        <View style={styles.header}>
            <View style={styles.headerItem}>
                <View style={styles.headerItemInner}></View>
            </View>
            <View style={styles.headerItemMain}>
                <View style={styles.headerItemInnerMain}>
                    <Text style={styles.text}>LaunchApp</Text>
                </View>
            </View>
            <View style={styles.headerItem}>
                <View style={styles.headerItemInner}></View>
            </View>
            <View style={styles.headerButtom}></View>
        </View>
    )
}

export default Header;

Header.defaultProps = {
    title: 'LaunchApp'
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 70
    },
    headerItem: {
        width: '20%',
        height: '24%',
        marginTop: 15
    },
    headerItemInner: {
        flex: 1,
        backgroundColor: '#7A2D93',
        marginTop: 10,
        zIndex: 10

    },
    headerItemMain: {
        width: '60%',
        height: '80%'
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
    headerButtom: {
        height: 8,
        width: '100%',
        backgroundColor: '#FFF5EE',
        marginTop: 30
    }
})