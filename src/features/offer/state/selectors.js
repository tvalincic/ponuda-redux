import { createSelector } from "@reduxjs/toolkit";
import {
  leagueAdapter,
  sportsAdapter,
  eventsAdapter,
  offersAdapter,
  oddsAdapter,
} from "./offerSlice";

export const {
  selectAll: selectSports,
  selectById: selectSportById,
  selectIds: selectSportIds,
} = sportsAdapter.getSelectors(({ offer }) => offer.sports);

export const selectActiveSportId = ({ offer }) => {
  if (offer.activeSport === null) return offer.sports.ids[0];
  return offer.activeSport;
};
export const selectActiveSport = (state) => {
  return state.offer.sports.entities[selectActiveSportId(state)];
};

export const {
  selectAll: selectLeagues,
  selectById: selectLeagueById,
  selectIds: selectLeagueIds,
} = leagueAdapter.getSelectors(({ offer }) => offer.leagues);

export const selectActiveLeagueId = ({ offer }) => {
  if (offer.activeLeague === null) return offer.leagues.ids[0];
  return offer.activeLeague;
};

export const {
  selectAll: selectEvents,
  selectById: selectEventById,
  selectIds: selectEventIds,
} = eventsAdapter.getSelectors(({ offer }) => offer.events);

export const selectActiveEventId = ({ offer }) => offer.activeEvent;

export const {
  selectAll: selectOffers,
  selectById: selectOfferById,
  selectIds: selectOfferIds,
} = offersAdapter.getSelectors(({ offer }) => offer.offers);

export const selectActiveOfferId = ({ offer }) => offer.activeOffer;

export const selectOffersByListOfIds = createSelector(
  [selectOffers, (_, offerIds) => offerIds],
  (offers, offerIds) => offers.filter((offer) => offerIds.includes(offer.id))
);

export const selectEventOffers = createSelector(
  [(state) => state, selectEventById],
  (state, event) => selectOffersByListOfIds(state, event.offers)
);

export const selectEventPrimaryOffer = createSelector(
  (state, eventId) => selectEventOffers(state, eventId),
  (offers) => {
    return offers.find((offer) => offer.osnovna);
  }
);

export const selectEventPrimaryOfferOdds = createSelector(
  [
    (state) => state,
    (state, eventId) => selectEventPrimaryOffer(state, eventId),
  ],
  (state, offer) => {
    return selectOddsByListOfIds(state, offer ? offer.odds : []);
  }
);

export const selectActiveLeagueIds = createSelector(
  selectActiveSport,
  (activeSport) => {
    if (!activeSport) return [];
    return activeSport.leagues || [];
  }
);

export const {
  selectAll: selectOdds,
  selectById: selectOddById,
  selectIds: selectOddIds,
} = oddsAdapter.getSelectors(({ offer }) => offer.odds);

export const selectOddsByListOfIds = createSelector(
  [selectOdds, (_, oddIds) => oddIds],
  (odds, oddIds) => odds.filter((odd) => oddIds.includes(odd.id))
);
