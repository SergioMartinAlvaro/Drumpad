import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LaunchpadButtonSet from './LaunchpadButtonSet';

const Launchpad = () => {
   
    return (
            <View style={styles.container}>
                <View style={styles.launchpad}>
                    <LaunchpadButtonSet />
                </View>
                <View style={styles.launchpadConnector}></View>
                <View style={styles.launchpadConnectorBottom}></View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 40,
        width: '100%',
        padding: 15
    },
    launchpad: {
        marginTop: 60,
        width: '100%',
        height: 350,
        backgroundColor: '#414141',
        borderRadius: 23,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        padding: 15,
        paddingBottom: 15
    },
    launchpadConnector: {
        height: 20,
        width: '30%',
        backgroundColor: '#2e2e2e',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    launchpadConnectorBottom: {
        height: 10,
        width: '20%',
        backgroundColor: '#414141',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }
})

export default Launchpad;