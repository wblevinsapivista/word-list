import React from "react";
import "./App.css";
import { Navbar } from "./components";
import WordListContainer from "./WordListContainer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <WordListContainer />
    </div>
  );
}

export default App;
