import React, { useContext } from "react";
import { Text, ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, IconButton } from "react-native-paper";
import { UserContext } from "../context/UserContext";
import { useRoute } from "@react-navigation/native";

const Dashboard = ({ navigation}) => {
  const route = useRoute();
  const name = route.params.name;
  const Favorites =() =>{
    console.log("I m from Dashboard page");
    navigation.navigate('Favorites',{
      name,
    });
}
const Logout=() =>{
  console.log("I m from Favorites page");
  navigation.navigate('Gettingstarted',{
    name,
  });
}
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
  const { favorites, addFavorite, removeFavorite } = useContext(UserContext);

  const toggleFavorite = (product) => {
    if (favorites.some((item) => item.id === product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

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
      <Button
        onPress={Favorites}
        style={{
          margin: 20,
          padding: 5,
          borderRadius: 25,
        }}
      >
        View Favorites
      </Button>
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
                style={{ color: "blue" }}
                icon={
                  favorites.some((fav) => fav.id === item.id)
                    ? "heart"
                    : "heart-outline"
                }
                onPress={() => toggleFavorite(item)}
              />
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
      <Card.Actions>
        <Button
          onPress={Logout}
          style={{
            marginRight: 150,
            padding: 5,
            borderRadius: 25,
          }}
        >
          Log Out
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