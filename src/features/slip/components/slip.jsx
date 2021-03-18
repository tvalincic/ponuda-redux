import React from "react";
import { useSelector } from "react-redux";
import { selectOddIds } from "../state/selectors";
import { Odd } from "./odd";
import { SlipFooter } from "./slip-footer";

export const Slip = () => {
  const oddIds = useSelector(selectOddIds);
  return (
    <section className="slip">
      <div className="slip-header">Listić</div>
      <div className="odds">
        {oddIds.map((odd) => (
          <Odd oddId={odd} key={odd} />
        ))}
      </div>
      <SlipFooter />
    </section>
  );
};
