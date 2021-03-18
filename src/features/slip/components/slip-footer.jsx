import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStake } from "../state/actions";

export const SlipFooter = () => {
  const {
    odd,
    payout,
    numberOfSelection,
    stake,
    stakeWithoutMC,
    tax,
    mc,
    winning,
  } = useSelector(({ slip }) => slip);
  const dispatch = useDispatch();
  return (
    <div className="slip-footer">
      <div className="footer-data">
        <div className="slip-data selections">{numberOfSelection} par</div>
        <div className="slip-data accumulated-odd">Tečaj: {odd}</div>
      </div>
      <input
        type="text"
        className="input-stake"
        name="stake"
        value={stake}
        onChange={(e) => dispatch(changeStake(e.target.value))}
      />
      <div className="mt">
        -{mc} kn (5% mt) = {stakeWithoutMC} kn
      </div>
      <div className="footer-data">
        <div className="slip-data payout-text">Isplata</div>
        <div className="slip-data payout">{payout} kn</div>
      </div>
      <div className="footer-data">
        <div className="slip-data winning-text">Dobitak</div>
        <div className="slip-data winning">{winning} kn</div>
      </div>
      <div className="footer-data">
        <div className="slip-data tax-text">Porez</div>
        <div className="slip-data tax">{tax} kn</div>
      </div>
    </div>
  );
};
