import React from "react";
import { useSelector } from "react-redux";
import { selectOddById } from "../../state/selectors";

export const Odd = ({ oddId }) => {
  const odd = useSelector((state) => selectOddById(state, oddId));
  if (!odd) return <td>-</td>;
  return <div className="event-odd selectable">{odd.tecaj}</div>;
};
