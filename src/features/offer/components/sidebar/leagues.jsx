import React from "react";
import { useSelector } from "react-redux";
import {
  selectActiveLeagueId,
  selectActiveLeagueIds,
} from "../../state/selectors";
import { League } from "./league";

export const Leagues = () => {
  const leagueIds = useSelector(selectActiveLeagueIds);
  const activeLeague = useSelector(selectActiveLeagueId);
  return (
    <div className="leagues">
      {leagueIds.map((league) => (
        <League
          leagueId={league}
          key={league}
          active={league === activeLeague}
        />
      ))}
    </div>
  );
};
