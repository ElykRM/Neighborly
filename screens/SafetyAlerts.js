import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../firebase/firebaseConfig';

export default function SafetyAlerts() {
  const [alerts, setAlerts] = useState([]);
  const [newAlert, setNewAlert] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('alerts').onSnapshot(snapshot => {
      const alertsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAlerts(alertsData);
    });
    return unsubscribe;
  }, []);

  const addAlert = () => {
    if (newAlert.trim()) {
      db.collection('alerts').add({ alert: newAlert });
      setNewAlert('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Safety Alerts</Text>
      <FlatList
        data={alerts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.alert}>{item.alert}</Text>}
      />
      <TextInput
        style={styles.input}
        placeholder="Add a new alert"
        value={newAlert}
        onChangeText={setNewAlert}
      />
      <Button title="Add Alert" onPress={addAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  alert: { padding: 8, borderBottomWidth: 1, borderColor: '#ccc' },
  input: { borderWidth: 1, padding: 8, marginBottom: 12 },
});
