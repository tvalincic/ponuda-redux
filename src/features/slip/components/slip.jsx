import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStake } from "../state/actions";
import { selectOddIds } from "../state/selectors";
import { Odd } from "./odd";

export const Slip = () => {
  const stake = useSelector((state) => state.slip.stake);
  const oddIds = useSelector(selectOddIds);
  const dispatch = useDispatch();
  return (
    <div className="slip">
      <div className="odds">
        {oddIds.map((odd) => (
          <Odd oddId={odd} key={odd} />
        ))}
      </div>
      <div className="slip-footer">
        <label htmlFor="postTitle">Stake:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={stake}
          onChange={(e) => dispatch(changeStake(e.target.value))}
        />
        <div className="payout"></div>
        <div className="gain"></div>
        <div className="tax"></div>
      </div>
    </div>
  );
};
