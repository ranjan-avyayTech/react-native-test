import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(goalText) {
    if (goalText.length <= 0)
      return

    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goalText, idKey: uuid.v4() }
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(idKey) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.idKey !== idKey);
    });
  }

  return (
    <>
  
        <View style={styles.container}>
          <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler} />

          <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />

          <View style={styles.goalsContainer}>
            <FlatList data={courseGoals} renderItem={(itemData) => {

              return <GoalItem text={itemData.item.text} onDelete={deleteGoalHandler} id={itemData.item.idKey} />
            }}
              keyExtractor={(item, index) => {
                return item.idKey
              }}
              alwaysBounceVertical={false} />

          </View>
        </View>
  
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },

  goalsContainer: {
    flex: 6,
  },


});