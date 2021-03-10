import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Slip } from "./features/slip";
import { fetchOffer, Offer } from "./features/offer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOffer());
  }, [dispatch]);
  return (
    <div className="app">
      <Offer />
      <Slip />
    </div>
  );
}

export default App;
