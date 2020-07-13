import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import React from 'react';

export const GoalItem = props => {
    return (
        <TouchableOpacity 
        onPress={props.onDelete.bind(this, props.id)}
        >
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding:10,
        marginTop:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth:1
      }
   });