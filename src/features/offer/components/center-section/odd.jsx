import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOddById } from "../../state/selectors";
import { addOdd } from "../../../shared";
import classnames from "classnames";

export const Odd = ({ oddId }) => {
  const dispatch = useDispatch();
  const odd = useSelector((state) => selectOddById(state, oddId));
  if (!odd) return <td>-</td>;
  const clickHandler = () => {
    dispatch(addOdd(oddId));
  };
  return (
    <div
      className={classnames("event-odd selectable", {
        selected: !!odd.selected,
      })}
      onClick={clickHandler}
    >
      {odd.tecaj}
    </div>
  );
};
