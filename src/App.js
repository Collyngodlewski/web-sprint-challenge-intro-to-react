import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import { data } from 'msw/lib/types/context';
import Character from "./components/Character";
import { BASE_URL } from "./const";

const App = () => {
  const [names, setNames] = useState([]);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        setNames(res.data);
        console.log(res.data);
        return names;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={names} />
    </div>
  );
};

export default App;
