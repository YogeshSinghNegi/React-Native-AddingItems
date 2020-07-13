import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';

export const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      }

      const addGoalHandler = () => {
          props.onAddGoal(enteredGoal);
          setEnteredGoal('');
      }
    
    return (
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
     <TextInput 
      placeholder="Enter Course Goal" 
      style={styles.textInput}
      onChangeText={goalInputHandler}
      value={enteredGoal}
      />
      <View style={styles.buttonContainer}>
      <View style={styles.button}>
      <Button title='CANCEL' color='red' onPress={props.onCancel}/>
      </View>
      <View style={styles.button}>
      <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      </View>
     </View>
     </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
      justifyContent:'center', 
      alignItems:'center',
     },
     textInput: {
       borderColor:'black',
       borderWidth:1,
       padding:10,
       width:'80%',
       marginBottom:10,
     },
     buttonContainer: {
         flexDirection:'row',
         justifyContent:'space-between',
         width:'60%'
     },
     button: {
         width:'40%'
     },
   });