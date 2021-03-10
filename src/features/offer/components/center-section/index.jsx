import React from "react";
import { useSelector } from "react-redux";
import { selectActiveLeagueId } from "../../state/selectors";
import { LeagueContent } from "./league-content";

export const CenterSection = () => {
  const activeLeague = useSelector(selectActiveLeagueId);
  return (
    <section className="center-section">
      <LeagueContent leagueId={activeLeague} />
    </section>
  );
};
