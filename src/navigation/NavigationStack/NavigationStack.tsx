import { StyleSheet, Text, View } from "react-native";
import React, { ComponentType } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home/Home";

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
