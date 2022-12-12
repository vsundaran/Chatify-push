import logo from './logo.svg';
import React from "react"
import './App.css';
import Navbar from './components/navbar';
import Body from './components/body';
import Notification from './components/notification/notification';
export let Mycontext = React.createContext()

function App() {
  let [profile,setProfile] = React.useState(false);
  let [home,setHome] = React.useState(true);
  let [notification,setNotification] = React.useState(false);
  let obj = {profile : profile,
             setProfile: setProfile,
             home:home,
            setHome:setHome,
            notification:notification,
            setNotification:setNotification}

  return (
    <div className="App">
      <Mycontext.Provider value={obj}>
      <Navbar/>
      <Body/>
      </Mycontext.Provider>
    </div>
  );
}

export default App;
