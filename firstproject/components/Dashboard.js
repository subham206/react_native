import React, { useContext, useEffect, useState } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, IconButton } from "react-native-paper";
import { UserContext } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Dashboard = ({ navigation }) => {
  const [name, setName] = useState("");
  const { state, dispatch } = useContext(UserContext);
  const { favorites } = state;

  useEffect(() => {
    async function fetchName() {
      const userDetailString = await AsyncStorage.getItem("userDetail"); //Fetches data in string format

      const userDetail = userDetailString ? JSON.parse(userDetailString) : {}; //converts the string format data into object if not empty else it creates an empty object.
      setName(userDetail.name);
    }
    fetchName();
  }, []); //used to fetch name from the async storage

  const toggleFavorite = (product) => {
    if (favorites.some((item) => item.id === product.id)) {
      dispatch({ type: "REMOVE_FROM_FAVORITE", payload: product.id }); //dispatch is like a function which passes the data to the reducer func to perform further function.Here we pass product id to the reducer which then filters out this element & removes from the favorites array
    } else {
      dispatch({ type: "ADD_TO_FAVORITE", payload: product }); //Here, the whole product is dispatched through payload to the reducer to add to the favorites array
    }
  };

  const handleGotoFavoritesPage = () => {
    console.log("I m from Dashboard page");

    navigation.navigate("Favorites");
  };

  const handleLogoutPage = () => {
    console.log("I m from Dashboard page");

    navigation.navigate("Gettingstarted");
  };

  const DATA = [
    {
      id: "1",
      title: "First Item",
      image:
        "https://contents.mediadecathlon.com/m14615326/6b2c54dcacd85055340717f3430ba234/m14615326.jpg?format=auto&quality=70&f=650x0",
      description: "This is the image of addidas stud 1.",
    },
    {
      id: "2",
      title: "Second Item",
      image:
        "https://contents.mediadecathlon.com/p2606601/14c3a72ceca95a398b476151fc05bb58/p2606601.jpg?format=auto&quality=70&f=650x0",
      description: "This is the image of addidas stud 2",
    },
    {
      id: "3",
      title: "Third Item",
      image:
        "https://5.imimg.com/data5/ZF/PR/VP/SELLER-98309129/adidas-football-shoe-1000x1000.jpg",
      description: "This is the image of addidas stud 3.",
    },
    {
      id: "4",
      title: "First Item",
      image:
        "https://contents.mediadecathlon.com/m14615326/6b2c54dcacd85055340717f3430ba234/m14615326.jpg?format=auto&quality=70&f=650x0",
      description: "This is the image of addidas stud 1.Price:1500 rs",
    },
    {
      id: "5",
      title: "Second Item",
      image:
        "https://contents.mediadecathlon.com/p2606601/14c3a72ceca95a398b476151fc05bb58/p2606601.jpg?format=auto&quality=70&f=650x0",
      description: "This is the image of addidas stud 2.Price:1000 rs",
    },
    {
      id: "6",
      title: "Third Item",
      image:
        "https://5.imimg.com/data5/ZF/PR/VP/SELLER-98309129/adidas-football-shoe-1000x1000.jpg",
      description: "This is the image of addidas stud 3.Price:2000 rs",
    },
  ];

  return (
    <>
      <Text
        style={{
          marginLeft: 40,
          marginTop: 50,
          fontWeight: "bold",
          fontSize: 30,
          fontStyle: "italic",
        }}
      >
        Welcome, {name}
      </Text>

      <ScrollView contentContainerStyle={styles.container}>
        {DATA.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <IconButton
                style={{ color: "red" }}
                icon={
                  favorites.some((fav) => fav.id === item.id)
                    ? "heart"
                    : "heart-outline"
                }
                onPress={() => toggleFavorite(item)}
                iconColor="red"
              />
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
      <Card.Actions>
        <Button
          onPress={handleLogoutPage}
          style={{
            marginRight: 70,
            padding: 5,
            borderRadius: 25,
          }}
        >
          Log Out
        </Button>
        <Button
          onPress={handleGotoFavoritesPage}
          style={{
            margin: 20,
            padding: 5,
            borderRadius: 25,
          }}
        >
          View Favorites
        </Button>
      </Card.Actions>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },
  card: {
    width: "100%",
    marginBottom: 16,
  },
});

export default Dashboard;