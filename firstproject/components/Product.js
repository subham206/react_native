import React from 'react';
import { View, Text, FlatList,StyleSheet } from 'react-native';
import Card from './Card';

const products = [
    { id: '2', name: 'Addidas shoes', price: '1000 rs' },
    { id: '2', name: 'Nike shoes', price: '2000 rs' },
];

const Product = ({ username }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome, {username}!</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card product={item} />}
      />
    </View>
  );
};
const styles=StyleSheet.create({
    container: {
        fontSize: 40,
        backgroundColor: '#aaaaaa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
export default Product;