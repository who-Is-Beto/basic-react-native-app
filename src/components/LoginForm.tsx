import React from "react";
import { TextInput, Button, Text, View } from "react-native";

export default function LoginForm(): JSX.Element {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="password" />
      <Button title="Enviar" onPress={(): void => console.log("Enviado")} />
    </View>
  );
}
