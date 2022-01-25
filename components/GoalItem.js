import React from 'react'
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';


export default function GoalItem(props) {
    return (
        <TouchableNativeFeedback  onPress={props.onDelete.bind(this,props.id)}>
        <View style={styles.listItems} on>
        <Text>{props.title}</Text>
        </View>    
        </TouchableNativeFeedback>
    )
}

const styles= StyleSheet.create({
    listItems: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
      }
});