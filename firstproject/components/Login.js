import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { useState } from "react";
import { Button, Card } from "react-native-paper";

export default function Login({ oncompletionlogin, email, password }) {
  function validate() {
    if (email === loginEmail && password === loginPassword) {
      oncompletionlogin();
    } else {
      alert("INVALID CREDENTIAL");
    }
  }
  const [loginEmail, setloginEmail] = useState(" ");
  const [loginPassword, setloginPassword] = useState(" ");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#90EE90",
      }}
    >
      
        <Text
          style={{
            marginLeft: 70,
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 20,
            marginBottom: 40,
            borderRadius: 20,
          }}
        >
          WELCOME BACK!! LOGIN
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
          placeholder="Enter your email:"
          onChangeText={setloginEmail}
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
          onChangeText={setloginPassword}
        />

        <Card.Actions>
          <Button onPress={validate}>LOGIN</Button>
        </Card.Actions>
    </View>
  );
}