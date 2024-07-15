import React, { useState } from 'react';
import { View, TextInput, Button,StyleSheet } from 'react-native';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container} >
      <TextInput
         placeholder="Username" 
         onChangeText={setUsername}
         value={username}
          />
      <TextInput 
      placeholder="Email" 
      onChangeText={setEmail}
      value={email}
       />
      <TextInput 
       placeholder="Password" 
       onChangeText={setPassword}
       value={password}
        />
      <Button title="Sign Up" onPress={() => onSignup(username,email,password)} />
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
        
    }

  })
export default Signup;