import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Switch,
} from "react-native";
import { Button, Card } from "react-native-paper";

export default function Signup({ oncompletionsignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ADD8E6"); // Default color cyan

  function handleCompleteSignUp() {
    oncompletionsignUp(name, email, password);
  }

  function toggleBackgroundColor(value) {
    const newColor = value ? "#90EE90" : "#D3D3D3"; // Cyan or light grey based on switch value
    setBackgroundColor(newColor);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: backgroundColor,
      }}
    >
     
      <Text
        style={{
          color: "black",
          marginLeft: 140,
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        SIGN UP
      </Text>

      <TextInput
        style={{
          marginLeft: 40,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          fontSize: 20,
          borderRadius: 20,
        }}
        placeholder="Enter your Name:"
        onChangeText={setName}
        value={name}
      />

      <TextInput
        style={{
          marginLeft: 40,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          fontSize: 20,
          borderRadius: 20,
        }}
        placeholder="Enter your email:"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={{
          marginLeft: 40,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
          fontSize: 20,
          borderRadius: 20,
        }}
        placeholder="Enter your password:"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />

      <TextInput
        style={{
          marginLeft: 40,
          height: 60,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          fontSize: 20,
          borderRadius: 20,
        }}
        placeholder="confirm password:"
        secureTextEntry={true}
      />

      <Switch
        style={{ marginLeft: 70, marginTop: 20 }}
        value={backgroundColor === "#90EE90"}
        onValueChange={toggleBackgroundColor}
      />

      <Card.Actions>
        <Button onPress={handleCompleteSignUp}>Complete SIGN UP</Button>
      </Card.Actions>
    </View>
  );
}