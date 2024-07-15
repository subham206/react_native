import React, { useState } from 'react';
import { View, TextInput, Button, Alert,StyleSheet } from 'react-native';

const Login = ({ username, onLogin,password }) => {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleLogin = () => {
    if (inputUsername === username && inputPassword==password) {
      onLogin();
    } else {
      Alert.alert('Invalid username and password');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" onChangeText={setInputUsername} value={inputUsername} />
      <TextInput placeholder="Password" onChangeText={setInputPassword} value={inputPassword} />
      <Button title="Login" onPress={handleLogin} />
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

export default Login;