import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Neighborly</Text>
      <Button title="Resource Sharing" onPress={() => navigation.navigate("Resource Sharing")} />
      <Button title="Community Projects" onPress={() => navigation.navigate("Community Projects")} />
      <Button title="Event Calendar" onPress={() => navigation.navigate("Event Calendar")} />
      <Button title="Discussion Forums" onPress={() => navigation.navigate("Discussion Forums")} />
      <Button title="Safety Alerts" onPress={() => navigation.navigate("Safety Alerts")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
