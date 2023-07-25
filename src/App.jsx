import React from "react";
import LoginPage from "./Redux/Context/LoginPage";
import UsersPage from "./Redux/Context/UserPage";
import "./App.css"
import {useSelector} from "react-redux"

function App() {

  const inSuccess = useSelector((state) => state.login.inSuccess);

  return (
  <div>
  {!inSuccess ?  
  <div>
    <LoginPage/>
  </div> : 
  <div>
    <UsersPage/>
  </div>}
  </div>
  );
}

export default App;
