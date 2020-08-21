import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Footer = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.footerItem}>
                <TouchableOpacity>
                    <View style={styles.rounded}></View>
                </TouchableOpacity>
            </View>
            <View style={styles.footerItemMain}></View>
            <View style={styles.footerItem}>
                <TouchableOpacity>
                    <View style={styles.rounded}></View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    footer: {
        height: '20%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    footerItem: {
        width: '3%',
        height: '100%',
        backgroundColor: '#c589d8',
        borderRadius: 4,
        marginLeft: 50,
        marginRight: 50
    },
    footerItemMain: {
        width: '5%',
        height: '100%',
        backgroundColor: '#7A2D93',
        borderRadius: 4,
        marginLeft: 50,
        marginRight: 50
    },
    rounded: {
        height: 40,
        width: 40,
        borderRadius: 100,
        backgroundColor: '#414141',
        marginTop: 40,
        marginLeft: -15
    }
});