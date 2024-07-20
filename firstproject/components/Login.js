import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { useState } from "react";
import {useNavigation} from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, Card } from "react-native-paper";
import { useRoute } from "@react-navigation/native";

export default function Login({ navigation }) {
  const route = useRoute();
  const name = route.params.name;
  const email = route.params.email;
  const password = route.params.password;
  const Dashboard =() =>{
    console.log("I m from Login page");
    navigation.navigate('Dashboard',{
      name,
    });
}
  function validate() {
    if (email === loginEmail && password === loginPassword) {
      Dashboard();
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