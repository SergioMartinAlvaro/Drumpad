import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const LaunchpadButtonSet = () => {
    /*   const colors = ['indianred','lightcoral','salmon','darksalmon','lightsalmon','crismon','red','firebrick','darkred',
                       'pink','lightpink','hotpink','deeppink','mediumvioletred','palevioletred', 'coral','tomato','orangered',
                   'darkorange','orange','gold','yellow','lightyellow','lemonchiffon','lightgoldenrodyellow','papayawhip','moccasin',
                   'peachpuff','palegoldenrod','khaki','darkkhaki','lavender','thistle','plum','violet','orchid','fuchsia','magenta',
                   'mediumorchid','mediumpurple','rebeccapurple','blueviolet','darkviolet','darkorchid','darkmagenta','purple','indigo',
                   'slateblue','darkslateblue','mediumslateblue','greenyellow','chartreuse','lawngreen','lime','limegreen','palegreen','ligtgreen',
                   'mediumspringgreen','seagreen','forestgreen','green','darkgreen','yellowgreen','olivedrab','olive','darkolivegreen','mediumaquamarine',
                   'darkseagreen','lightseagreen','darkcyan','teal','aqua','cyan','lightcyan','paleturquoise','aquamarine','turquoise','mediumturquoise',
                   'cadetblue','steelblue','lightsteelblue','powderblue','lightblue','skyblue','lightskyblue','deepskyblue','dodgerblue','cornflowerblue',
                   'mediumslateblue','royalblue','blue','mediumblue','darkblue','navy','midnightblue'];
       */
    const colors = ['#7B68EE','#CD5C5C','#90EE90', '#EE82EE','#FFFF00']
    const buttonsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16']
    const [activeColor, setActiveColor] = useState('red');
    const onPress = () => setActiveColor(colors[Math.floor(Math.random() * colors.length)]);

    const buttons = buttonsArray.map(x =>

        <TouchableHighlight underlayColor={activeColor} activeOpacity={0.6} onPress={onPress} style={styles.buttonItem}>
            <View style={styles.ReactbuttomItemInner}>
                <Text></Text>
            </View>

        </TouchableHighlight>);

    const _changeStyle = () => {
        var color = colors[Math.floor(Math.random() * colors.length)];
        console.log(color);
    }

    return (
        <View style={styles.buttonContainer}>
            {buttons}
        </View>
    )

}

export default LaunchpadButtonSet;


const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 15,
        paddingBottom: 15
    },
    buttonItem: {
        width: '18%',
        height: '18%',
        marginTop: 15,
        backgroundColor: '#d3d3d3',
        borderRadius: 4,
        margin: 8
    }
})