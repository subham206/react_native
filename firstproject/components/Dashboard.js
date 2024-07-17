
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    SafeAreaView,
  } from "react-native";
  import { useState } from "react";
  import Card from "./card";
  
  export default function Dashboard({ onlogout, userName }) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "stretch",
          backgroundColor: "#ADD8E6",
        }}
      >
        <Text style={{ marginLeft: 50, fontSize: 20, fontWeight: "bold" }}>
          WELCOME {userName}
        </Text>
  
        <SafeAreaView>
          {/* <Card
            title="Card Title 1"
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSSOFLl41CIZAM0UV2LexJ5lO9OKu_dyp_k-UfqhAXttcYNbv-Dx4dsRR3ZLSxpTGYRHVbKh-379Obv5HzSenp2i_WDYFWNNRB4EdB0eBNfwt0kUQ2yY-vyP9D3NUh3nljAaJxnQQ&usqp=CAc"
            description="This is the card 1 of new addidas shoe 1"
          /> */}
          <Card
            title="Card Title 2"
            image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnqncWOixYS2_KWn9dPUueiF8CYR4bguFChVeK_HG2c5jWGfljh9XOJxAjR_JCnhny_864votIKv-sN34ZKOessSARDsB095O5bb1Isv9zRfeGSmUVQdrg&usqp=CAc"
            description="This is the card 2 of new addidas shoe 2"
          />
          <Card
            title="Card Title 3"
            image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT96Aek9mpJaOLAxjrbuahYKhR1VInt2LX9JB_zxBgxmXDJAaHQagetjEXG3wPBiGzrFDpJxm3Hiq2E5ddEc0mX5t8970nmx-FOeyz6N7U9kGydxQcoB5zyqg&usqp=CAc"
            description="This is the card 3 of new addidas shoe 3"
          />
        </SafeAreaView>
  
        <Button title="LOGOUT" color="red" onPress={onlogout} />
      </View>
    );
  }
  