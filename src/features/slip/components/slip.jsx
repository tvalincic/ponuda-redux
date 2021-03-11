import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStake } from "../state/actions";
import { selectOddIds } from "../state/selectors";
import { Odd } from "./odd";

export const Slip = () => {
  const odd = useSelector(({ slip }) => slip.odd);
  const payout = useSelector(({ slip }) => slip.payout);
  const numberOfSelection = useSelector(({ slip }) => slip.numberOfSelection);
  const stake = useSelector(({ slip }) => slip.stake);
  const stakeWithoutMC = useSelector(({ slip }) => slip.stakeWithoutMC);
  const tax = useSelector(({ slip }) => slip.tax);
  const mc = useSelector(({ slip }) => slip.mc);
  const winning = useSelector(({ slip }) => slip.winning);
  const oddIds = useSelector(selectOddIds);
  const dispatch = useDispatch();
  return (
    <section className="slip">
      <div className="slip-header">Listić</div>
      <div className="odds">
        {oddIds.map((odd) => (
          <Odd oddId={odd} key={odd} />
        ))}
      </div>
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
        {/* <div className="footer-data">
          <div className="slip-data payout-text">Isplata</div>
          <div className="slip-data payout">{payout}</div>
        </div> */}
        <div className="footer-data">
          <div className="slip-data tax-text">Porez</div>
          <div className="slip-data tax">{tax} kn</div>
        </div>
      </div>
    </section>
  );
};
