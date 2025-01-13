import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function CommunityProjectsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Community Projects" />
      <View style={styles.container}>
        <Text style={styles.text}>Community Projects Placeholder</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18 },
});
