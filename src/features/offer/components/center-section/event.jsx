import React from "react";
import { useSelector } from "react-redux";
import {
  selectEventById,
  selectEventPrimaryOffer,
} from "../../state/selectors";
import { Odd } from "./odd";

const DefaultGrid = () =>
  [0, 1, 2].map((v) => (
    <div className="event-odd" key={v}>
      -
    </div>
  ));

export const Event = ({ eventId }) => {
  const event = useSelector((state) => selectEventById(state, eventId));
  const primaryOffer = useSelector((state) =>
    selectEventPrimaryOffer(state, eventId)
  );
  if (!event) return null;
  const hasPrimaryOffer = !!primaryOffer && !!primaryOffer.odds.length;
  return (
    <div className="event-grid event" key={event}>
      <div className="event-title">
        {event.domacin} - {event.gost}
      </div>
      {hasPrimaryOffer ? (
        primaryOffer.odds.map((odd) => <Odd key={odd} oddId={odd} />)
      ) : (
        <DefaultGrid />
      )}
    </div>
  );
};
