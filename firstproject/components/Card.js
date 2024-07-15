import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const Card = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
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

export default Card;