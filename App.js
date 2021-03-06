import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Scrollview, TextInput, KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/task.js';

export default function App() {

  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [completeItems, setCompleteItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const handleDoneTask = (index) => {
    let temp = [...taskItems];
    setCompleteItems([...completeItems, taskItems[index]]);
    temp.splice(index, 1);
    setTaskItems(temp);
    
  }
  const handleDeleteTask = (index) => {
    let temp = [...completeItems];
    temp.splice(index, 1);
    setCompleteItems(temp);
  }

  return (
    
    <View style={styles.container}>
      
      <View style = {styles.tasksWrapper}>

        <Text style = {styles.sectionTitle}>Today's tasks</Text>

        <View style = {styles.item}>

          {/* Tasks */}
          {
            taskItems.map((item,index) => {
              return (
              <TouchableOpacity key = {index} onPress = {() =>handleDoneTask(index)}>
              <Task  text={item}></Task>
              </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      <View style = {styles.tasksWrapper}>

        <Text style = {styles.sectionTitle}>Complete Tasks</Text>

        <View style = {styles.item}>

          {/* Tasks */}
          {
            completeItems.map((item,index) => {
              return (
              <TouchableOpacity key = {index} onPress = {() =>handleDeleteTask(index)}>
                <Task  text={item}></Task>
              </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style = {styles.writeTaskWrapper}
      > 
      
        <TextInput style =  {styles.input} placeholder="write a task" onChangeText={task => setTask(task)} value={task}></TextInput>

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
          </View>

        </TouchableOpacity>

      
      </KeyboardAvoidingView>
     
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: "#C0C0C0",
    width: 250,
    fontSize: 18,
    
  },
  addWrapper: {
    width: 60, 
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',

  },
  addText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scroll: {

  },

});