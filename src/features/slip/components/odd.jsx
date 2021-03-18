import React from "react";
import { useSelector } from "react-redux";
import {
  selectEventById,
  selectOddById as selectOddFromOffer,
} from "../../offer";
import { selectOddById } from "../state/selectors";

function extractId(odd, key) {
  if (!odd) return null;
  return odd[key];
}

function getDay(date) {
  return ["ned", "pon", "uto", "sri", "čet", "pet", "sub"][date.getDay()];
}

function constructDate(dateString) {
  const date = new Date(dateString);
  const day = getDay(date);
  const time = date.toLocaleTimeString().slice(0, 5);
  return `${day} ${time}`;
}

export const Odd = ({ oddId }) => {
  const slipOdd = useSelector((state) => selectOddById(state, oddId));
  const event = useSelector((state) =>
    selectEventById(state, extractId(slipOdd, "event"))
  );
  const odd = useSelector((state) => selectOddFromOffer(state, oddId));
  if (!odd || !event) return null;
  return (
    <div className="odd">
      <div className="odd-header">
        <div className="title">
          {event.domacin} - {event.gost}
        </div>
      </div>
      <div className="odd-footer">
        <div className="footer-left">
          <span className="time">{constructDate(event.vrijeme)}</span>
        </div>
        <div className="footer-right">
          <span className="type">{odd.naziv}</span>
          <span className="price">{odd.tecaj}</span>
        </div>
      </div>
    </div>
  );
};
