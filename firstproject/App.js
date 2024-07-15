import React, { useState } from 'react';
import GettingStarted from './components/GettingStarted';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Product from './components/Product';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('GettingStarted');
  const [userData, setUserData] = useState({username:'',email:'',password:''});

  
  const renderScreen = () => {
    switch (currentScreen) {
      case 'GettingStarted':
        return <GettingStarted onStart={() => setCurrentScreen('Signup')} />;
      case 'Signup':
        return (<Signup 
          onSignup={(username,email,password) => { 
          setUserData({username,email,password}); 
          setCurrentScreen('Login'); }} />);
      case 'Login':
        return (<Login 
          username={userData.username}
          password={userData.password}
         onLogin={(username,password) => setCurrentScreen('Welcome')} />);
      case 'Welcome':
        return <Welcome username={userData.username} onProductPage={() => setCurrentScreen('Product')} onLogout={() => setCurrentScreen('GettingStarted')} />;
      case 'Product':
        return <Product username={userData.username} />;
      default:
        return <GettingStarted onStart={() => setCurrentScreen('Signup')} />;
    }
  };

  return (
    <>{renderScreen()}</>
  );
}