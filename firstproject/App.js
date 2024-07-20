import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { UserProvider } from "./context/UserContext";
import Favorites from "./components/Favorites";
import Gettingstarted from "./components/Gettingstarted";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator();


export default function App() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [username, setusername] = useState("");
  const [showPage, setShowPage] = useState("getting-started");

  const handlesignup = () => {
    console.log("Button is being pressed!!");
    setShowPage("signup");
  };

  const handleLogin = () => {
    console.log("Button is being pressed!!");
    setShowPage("login");
  };

  const dashboard = () => {
    console.log("Button is being pressed!!");
    setShowPage("dashboard");
  };

  const handleLogout = () => {
    console.log("Button is being pressed!!");
    setShowPage("getting-started");
  };

  const handleFavorites = () => {
    setShowPage("Favorites");
  };

  const dashboarddata = (name, email, password) => {
    console.log("Button is being pressed!!");
    setusername(name);
    setEmail(email);
    setPassword(password);
    console.log("Name is:" + name);
    console.log("Email is:" + email);
    console.log("Password is:" + password);
    handleLogin();
  };

  const DATA = [
    {
      id: "1",
      title: "First Item",
      image:
        "https://contents.mediadecathlon.com/m14615326/6b2c54dcacd85055340717f3430ba234/m14615326.jpg?format=auto&quality=70&f=650x0",
      description: "This is the image of addidas stud 1. Price:1500 rs",
    },
    {
      id: "2",
      title: "Second Item",
      image:
        "https://contents.mediadecathlon.com/p2606601/14c3a72ceca95a398b476151fc05bb58/p2606601.jpg?format=auto&quality=70&f=650x0",
      description: "This is the image of addidas stud 2.Price:1000 rs",
    },
    {
      id: "3",
      title: "Third Item",
      image:
        "https://5.imimg.com/data5/ZF/PR/VP/SELLER-98309129/adidas-football-shoe-1000x1000.jpg",
      description: "This is the image of addidas stud 3.Price:2000 rs",
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
  return(
  <NavigationContainer>
    <UserProvider>

        <Stack.Navigator 
          initialRouteName='Gettingstarted'
        
          >
          <Stack.Screen 
            name='Gettingstarted'
            component={Gettingstarted}
            options={{
              title: 'Gettingstarted'
            }}  
            />
            <Stack.Screen 
            name='Signup'
            component={Signup}
            options={{
              title: 'Signup'
            }}  
            />
            <Stack.Screen 
            name='Login'
            component={Login}
            options={{
              title: 'Login'
            }}  
            />
            <Stack.Screen 
            name='Dashboard'
            component={Dashboard}
            options={{
              title: 'Dashboard'
            }}  
            />
            <Stack.Screen 
            name='Favorites'
            component={Favorites}
            options={{
              title: 'Favorites'
            }}  
            />
          
        </Stack.Navigator>
        </UserProvider>
      </NavigationContainer>
  );
}

   