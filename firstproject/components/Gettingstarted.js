import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import {useNavigation} from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button, Card } from "react-native-paper";

export default function Gettingstarted({ navigation }) {
  const Signup =() =>{
    console.log("I m from Gettingstarted page");
    navigation.navigate('Signup');
}
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
          <Button onPress={Signup}>signup</Button>
        </Card.Actions>
    </View>
  );
}