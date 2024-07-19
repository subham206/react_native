import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import { useState } from "react";
import { Button, Card } from "react-native-paper";

export default function Gettingstarted({ onsignUp }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#90EE90",
      }}
    >
      
        <Text style={{ marginLeft: 40, fontSize: 30, fontWeight: "bold" }}>
          HELLO USER
        </Text>

        <Card.Actions>
          <Button onPress={onsignUp}>signup</Button>
        </Card.Actions>
    </View>
  );
}