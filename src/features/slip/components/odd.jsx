import React from "react";
import { useSelector } from "react-redux";
import { selectOddById } from "../state/selectors";

export const Odd = ({ oddId }) => {
  const odd = useSelector((state) => selectOddById(state, oddId));
  if (!odd) return null;
  return (
    <div className="odd">
      <div className="odd-header">
        <div className="title">{odd.naziv}</div>
      </div>
      <div className="odd-footer">
        <div className="footer-left">
          <span className="time">{odd.vrijeme}</span>
        </div>
        <div className="footer-right">
          <span className="type">{odd.tip}</span>
          <span className="price">{odd.tecaj}</span>
        </div>
      </div>
    </div>
  );
};
