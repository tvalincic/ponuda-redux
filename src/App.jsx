import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { addOdd, Slip } from "./features/slip";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="app">
      <div className="button-holder">
        <button
          className="add-to-slip"
          onClick={() =>
            dispatch(
              addOdd({
                broj: "859",
                naziv: "Betis Sevilla-Dep.Alavés",
                dogadjajId: 22129273,
                dogadjajGrupa: 5,
                vrijeme: "pon 21:00",
                datum: "2021-03-08",
                ponudaId: 22129273,
                tecajId: 861363691,
                id: 861363691,
                tecaj: 1.8,
                tip: "1",
                izvorId: 0,
              })
            )
          }
        >
          Dodaj
        </button>
      </div>
      <Slip />
    </div>
  );
}

export default App;
