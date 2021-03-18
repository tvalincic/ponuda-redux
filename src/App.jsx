import React from "react";
import "./App.css";
import { Slip } from "./features/slip";
import { Offer } from "./features/offer";

function App() {
  return (
    <div className="app">
      <Offer />
      <Slip />
    </div>
  );
}

export default App;
