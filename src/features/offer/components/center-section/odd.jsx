import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOddById } from "../../state/selectors";
import { addOdd } from "../../../shared";
import classnames from "classnames";
import { Ticker } from "./ticker";

export const Odd = ({ oddId }) => {
  const dispatch = useDispatch();
  const odd = useSelector((state) => selectOddById(state, oddId));

  if (!odd) return <div className="event-odd">-</div>;

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
      {!!odd.trend ? <Ticker trend={odd.trend} odd={odd.tecaj} /> : null}
    </div>
  );
};
