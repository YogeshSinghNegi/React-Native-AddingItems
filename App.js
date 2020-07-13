/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {GoalInput} from './components/GoalInput';
import {GoalItem} from './components/GoalItem';

const App: () => React$Node = () => {

  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoal(currentGoal => [...currentGoal, {id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  }

  const removeGoalHandler = (goalId) => {
    setCourseGoal(currentGoal => {
      return currentGoal.filter(goal => goal.id != goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
    <Button title='Add new Goal' onPress={() => setIsAddMode(true)} ></Button>
     <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalAdditionHandler}
        />
     <FlatList 
        keyExtractor={item => item.id}
        data={courseGoal} 
        renderItem={itemData => 
        <GoalItem 
        id={itemData.item.id}
        title={itemData.item.value}
        onDelete={removeGoalHandler}
        />
        }>
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
 screen: {
   padding:50,
 },
});

export default App;
