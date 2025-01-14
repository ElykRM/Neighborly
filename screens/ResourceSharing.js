import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';
import { db } from '../firebase/firebaseConfig';

export default function ResourceSharing() {
  const [resources, setResources] = useState([]);
  const [newResource, setNewResource] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('resources').onSnapshot(snapshot => {
      const resourcesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setResources(resourcesData);
    });
    return unsubscribe;
  }, []);

  const addResource = () => {
    if (newResource.trim()) {
      db.collection('resources').add({ name: newResource });
      setNewResource('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resource Sharing</Text>
      <FlatList
        data={resources}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.resource}>{item.name}</Text>}
      />
      <TextInput
        style={styles.input}
        placeholder="Add a new resource"
        value={newResource}
        onChangeText={setNewResource}
      />
      <Button title="Add Resource" onPress={addResource} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  resource: { padding: 8, borderBottomWidth: 1, borderColor: '#ccc' },
  input: { borderWidth: 1, padding: 8, marginBottom: 12 },
});
