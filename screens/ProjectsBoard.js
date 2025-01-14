import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../firebase/firebaseConfig';

export default function ProjectsBoard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('projects').onSnapshot(snapshot => {
      const tasksData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(tasksData);
    });
    return unsubscribe;
  }, []);

  const addTask = () => {
    if (newTask.trim()) {
      db.collection('projects').add({ task: newTask, completed: false });
      setNewTask('');
    }
  };

  const toggleTaskCompletion = id => {
    const task = tasks.find(task => task.id === id);
    db.collection('projects').doc(id).update({ completed: !task.completed });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Board</Text>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text
            style={[styles.task, item.completed && styles.completedTask]}
            onPress={() => toggleTaskCompletion(item.id)}
          >
            {item.task}
          </Text>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={newTask}
        onChangeText={setNewTask}
      />
      <Button title="Add Task" onPress={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  task: { padding: 8, borderBottomWidth: 1, borderColor: '#ccc' },
  completedTask: { textDecorationLine: 'line-through', color: 'gray' },
  input: { borderWidth: 1, padding: 8, marginBottom: 12 },
});
