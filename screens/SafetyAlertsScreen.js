import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function SafetyAlertsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Safety Alerts" />
      <View style={styles.container}>
        <Text style={styles.text}>Safety Alerts Placeholder</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18 },
});
