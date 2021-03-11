import React from "react";
import { useSelector } from "react-redux";
import {
  selectActiveLeagueId,
  selectActiveSportLeagueIds,
} from "../../state/selectors";
import { League } from "./league";

export const Leagues = () => {
  const leagueIds = useSelector(selectActiveSportLeagueIds);
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
