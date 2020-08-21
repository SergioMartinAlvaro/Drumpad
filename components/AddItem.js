import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
const AddItem = ({addItem}) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);
    return (
            <View>
                <TextInput placeholder="Añade un elemento nuevo a la lista" style={styles.input}
                onChangeText={onChange}/>
                <TouchableOpacity style={styles.btn} onPress={() => addItem()}>
                    <Text style={styles.btnText}>
                        <FontAwesome name="plus" size={20}/>  Add Item
                    </Text>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bab8',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: "center"
    }


})

export default AddItem;