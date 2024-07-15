import React from 'react';
import { View, Button,StyleSheet } from 'react-native';

const GettingStarted = ({ onStart }) => {
  return (
    <View style={styles.container} >
      <Button title="Getting Started" onPress={onStart} />
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
export default GettingStarted;