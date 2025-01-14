import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../firebase/firebaseConfig';

export default function EventCalendar() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('events').onSnapshot(snapshot => {
      const eventsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsData);
    });
    return unsubscribe;
  }, []);

  const addEvent = () => {
    if (newEvent.trim()) {
      db.collection('events').add({ name: newEvent });
      setNewEvent('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Event Calendar</Text>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.event}>{item.name}</Text>}
      />
      <TextInput
        style={styles.input}
        placeholder="Add a new event"
        value={newEvent}
        onChangeText={setNewEvent}
      />
      <Button title="Add Event" onPress={addEvent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  event: { padding: 8, borderBottomWidth: 1, borderColor: '#ccc' },
  input: { borderWidth: 1, padding: 8, marginBottom: 12 },
});
