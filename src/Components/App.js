import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import MainFrame from "./MainFrame";
import "../styles/App.css";

const App = () => {
  const [bool, setBool] = useState(false);
  const [ShowAppl, setShowAppl] = useState([]);
  useEffect(() => {
    setTimeout(() => setBool(true), 3300);
  }, [bool]);
  const ShowApp = (e) => {
    setShowAppl([...ShowAppl, e.target.name]);
  };
  return (
    <div className="clock">
      <Buttons />
      <MainFrame bool={bool} Hand={ShowApp} />
    </div>
  );
};
export default App;
