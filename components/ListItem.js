import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
/*import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';*/
  import FontAwesome from "react-native-vector-icons/FontAwesome";
const ListItem = ({item, deleteItem}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <FontAwesome name="remove" style={styles.iconStyle} onPress={() => deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderColor: "#eee"
    },
    listItemView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18
    },
    iconStyle: {
        fontSize: 20,
        color: "firebrick"
    }

})

export default ListItem;