import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../firebase/firebaseConfig';

export default function DiscussionForum() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('discussions').onSnapshot(snapshot => {
      const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    });
    return unsubscribe;
  }, []);

  const addPost = () => {
    if (newPost.trim()) {
      db.collection('discussions').add({ content: newPost });
      setNewPost('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discussion Forum</Text>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.post}>{item.content}</Text>}
      />
      <TextInput
        style={styles.input}
        placeholder="Write a new post"
        value={newPost}
        onChangeText={setNewPost}
      />
      <Button title="Post" onPress={addPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  post: { padding: 8, borderBottomWidth: 1, borderColor: '#ccc' },
  input: { borderWidth: 1, padding: 8, marginBottom: 12 },
});
