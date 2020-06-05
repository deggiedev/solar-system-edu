import React, { useState, useEffect } from "react";
import HomeScreen from "./HomeScreen/HomeScreen";
import "./App.css";

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/planets")
      .then((resp) => resp.json())
      .then((resp) => setPlanets(resp));
  }, []);

  return <HomeScreen bgcolor='black' height='100%' planets={planets} />;
}

export default App;
