import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, StyleSheet } from 'react-native';

// Import screens
import ResourceSharingScreen from "./screens/ResourceSharingScreen";
import CommunityProjectsScreen from "./screens/CommunityProjectsScreen";
import EventCalendarScreen from "./screens/EventCalendarScreen";
import DiscussionForumsScreen from "./screens/DiscussionForumsScreen";
import SafetyAlertsScreen from "./screens/SafetyAlertsScreen";

// Define the Home Screen component
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Neighborly!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resource Sharing" component={ResourceSharingScreen} />
        <Stack.Screen name="Community Projects" component={CommunityProjectsScreen} />
        <Stack.Screen name="Event Calendar" component={EventCalendarScreen} />
        <Stack.Screen name="Discussion Forums" component={DiscussionForumsScreen} />
        <Stack.Screen name="Safety Alerts" component={SafetyAlertsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
