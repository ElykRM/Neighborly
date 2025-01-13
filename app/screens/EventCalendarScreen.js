import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function EventCalendarScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Event Calendar" />
      <View style={styles.container}>
        <Text style={styles.text}>Event Calendar Placeholder</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18 },
});
