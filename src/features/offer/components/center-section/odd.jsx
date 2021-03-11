import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOddById } from "../../state/selectors";
import { addOdd } from "../../../slip";

export const Odd = ({ oddId }) => {
  const dispatch = useDispatch();
  const odd = useSelector((state) => selectOddById(state, oddId));
  if (!odd) return <td>-</td>;
  const clickHandler = () => {
    dispatch(addOdd(oddId));
  };
  return (
    <div className="event-odd selectable" onClick={clickHandler}>
      {odd.tecaj}
    </div>
  );
};
