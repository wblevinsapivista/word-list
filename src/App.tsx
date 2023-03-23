import React from "react";
import "./App.css";
import { Navbar } from "./components";
import StockListContainer from "./StockListContainer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <StockListContainer />
    </div>
  );
}

export default App;
