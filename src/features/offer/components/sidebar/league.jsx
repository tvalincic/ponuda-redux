import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { selectLeagueById } from "../../state/selectors";
import { changeActiveLeague } from "../../state/offerSlice";

export const League = ({ leagueId, active }) => {
  const league = useSelector((state) => selectLeagueById(state, leagueId));
  const dispatch = useDispatch();
  if (!league) return null;
  return (
    <div
      className={classnames("league", {
        active,
      })}
      onClick={() => dispatch(changeActiveLeague(leagueId))}
    >
      {league.title}
    </div>
  );
};
