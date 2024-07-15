import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

const Welcome = ({ username, onProductPage, onLogout }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome, {username}!</Text>
      <Button title="Go to Product Page" onPress={onProductPage} />
      <Button title="Log Out" onPress={onLogout} />
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

export default Welcome;