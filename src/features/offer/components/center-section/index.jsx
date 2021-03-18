import React from "react";
import { useSelector } from "react-redux";
import { selectActiveLeagueIds } from "../../state/selectors";
import { LeagueContent } from "./league-content";

export const CenterSection = () => {
  const activeLeagues = useSelector(selectActiveLeagueIds);
  return (
    <section className="center-section">
      {activeLeagues.map((league) => (
        <LeagueContent leagueId={league} key={league} />
      ))}
    </section>
  );
};
