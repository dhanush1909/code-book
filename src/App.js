import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./containers/home/Home";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBarHandler = () => {
    console.log("clicked");
    setShowSideBar(!showSideBar);
  };

  return (
    <Router basename="/code-book">
      <div className="App">
        <Header
          toggleMenu={toggleSideBarHandler}
          sideBarShown={showSideBar}
          showSideBar={showSideBar}
        />
        <Home
          hideSideBar={toggleSideBarHandler}
          showMobileSideBar={showSideBar}
        />
      </div>
    </Router>
  );
}

export default App;
