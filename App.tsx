import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./src/components/LoginForm";
import NavigationStack from "./src/navigation/NavigationStack/NavigationStack";

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
