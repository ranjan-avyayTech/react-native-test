import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function App() {
  const [goalText, setGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(e){
      setGoalText(e)
  }
  function addGoalHandler(){
    if(goalText.length<=0)
      return
    
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      goalText
    ]);

    setGoalText('')

  }

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput placeholder='Your goal' style={styles.textInput} onChangeText={goalInputHandler} value={goalText} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        {courseGoals.map((goal)=>
        <Text key={goal}>{goal}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16,
  },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:'#ccccc',
  },
  textInput:{
    borderWidth:1,
    borderColor: '#ccccc',
    width:'70%',
    padding:4,
    marginRight:8
  },
  goalsContainer:{
    flex:6 ,
  }

});