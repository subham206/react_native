import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { UserProvider } from "./context/UserContext";
import Favorites from "./components/Favorites";
import Gettingstarted from "./components/Gettingstarted";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

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
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTQtJaTzW9iCMVSKxIezmt36TFEiCfvif4t1eY2LZrLpeEhLoevZxLGpZn4jmifRq86pHaZXf9chFJ9OlV2AmcPqdSSO7TZLG9Hjbf9r5J3rVM4w3j_4fMqDg&usqp=CAc",
      description: "This is the image of addidas stud 1.",
    },
    {
      id: "2",
      title: "Second Item",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcStbzkSwCg9KalPoIXg0yO0Ox1rkcuOyjXzV5kPXBxveQ4FbtB7DDSlNarYeO3VUoOq5lvUm3C4o9_FUnm-yaWHpmLtFU63tt_YY_PLlU5ZvB6WjzMsS_zj&usqp=CAc",
      description: "This is the image of addidas stud 2",
    },
    {
      id: "3",
      title: "Third Item",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjcUcJfXIyMwb9YSvzKJERvTM6z1cnrzIU0gbuouvRiitjiceSarfhi3lBbWoOq-hK-B1gLH3dk-twSkw0baxO2s4uHgwohSp0KTeORu8jRd1IcFPjVPUj&usqp=CAc",
      description: "This is the image of addidas stud 3.",
    },
    {
      id: "4",
      title: "First Item",
      image:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTQtJaTzW9iCMVSKxIezmt36TFEiCfvif4t1eY2LZrLpeEhLoevZxLGpZn4jmifRq86pHaZXf9chFJ9OlV2AmcPqdSSO7TZLG9Hjbf9r5J3rVM4w3j_4fMqDg&usqp=CAc",
      description: "This is the image of addidas stud 1.",
    },
    {
      id: "5",
      title: "Second Item",
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcStbzkSwCg9KalPoIXg0yO0Ox1rkcuOyjXzV5kPXBxveQ4FbtB7DDSlNarYeO3VUoOq5lvUm3C4o9_FUnm-yaWHpmLtFU63tt_YY_PLlU5ZvB6WjzMsS_zj&usqp=CAc",
      description: "This is the image of addidas stud 2.",
    },
    {
      id: "6",
      title: "Third Item",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjcUcJfXIyMwb9YSvzKJERvTM6z1cnrzIU0gbuouvRiitjiceSarfhi3lBbWoOq-hK-B1gLH3dk-twSkw0baxO2s4uHgwohSp0KTeORu8jRd1IcFPjVPUj&usqp=CAc",
      description: "This is the image of addidas stud 3.",
    },
  ];

  return (
    // <PaperProvider>
    <UserProvider>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {showPage === "getting-started" && (
          <Gettingstarted onsignUp={handlesignup} />
        )}
        {showPage === "signup" && <Signup oncompletionsignUp={dashboarddata} />}
        {showPage === "login" && (
          <Login
            oncompletionlogin={dashboard}
            email={email}
            password={password}
          />
        )}
        {showPage === "dashboard" && (
          <Dashboard
            onLogout={handleLogout}
            userName={username}
            onFavorites={handleFavorites}
            DATA={DATA}
          />
        )}
        {showPage === "Favorites" && <Favorites onDashboard={dashboard} />}
      </View>
    </UserProvider>
    // </PaperProvider>
  );
}