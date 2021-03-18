import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { selectSportById } from "../../state/selectors";
import { changeActiveSport } from "../../state/offerSlice";
import { Leagues } from "./leagues";

export const Sport = ({ sportId, active }) => {
  const sport = useSelector((state) => selectSportById(state, sportId));
  const dispatch = useDispatch();
  if (!sport) return null;
  return (
    <div
      className={classnames("sport", {
        active,
      })}
    >
      <div
        className={classnames("sport-tab", {
          active,
        })}
        onClick={() => dispatch(changeActiveSport(sportId))}
      >
        {sport.naziv}
      </div>
      {active && <Leagues />}
    </div>
  );
};
