import React from "react";
import { useSelector } from "react-redux";
import { selectSportById, selectLeagueById } from "../../state/selectors";
import { Event } from "./event";

export const LeagueContent = ({ leagueId }) => {
  const league = useSelector((state) => selectLeagueById(state, leagueId));
  const sport = useSelector((state) =>
    selectSportById(state, league ? league.sport : null)
  );
  if (!league) return null;
  return (
    <div className="league-content">
      <div className="league-heading">
        {sport.naziv} - {league.title}
      </div>
      <div className="events">
        <div className="event-grid events-header">
          <div className="event-title"></div>
          <div className="event-type">1</div>
          <div className="event-type">X</div>
          <div className="event-type">2</div>
        </div>
        {league.activeEventIds.map((event) => (
          <Event eventId={event} key={event} />
        ))}
      </div>
    </div>
  );
};
