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

export const selectActiveSports = createSelector([selectSports], (sports) =>
  sports.filter((s) => s.active)
);

export const selectActiveSportsIds = createSelector(
  [selectActiveSports],
  (sports) => sports.map((s) => s.id)
);

export const selectActiveSportId = ({ offer }) => offer.activeSport;

export const selectActiveSport = (state) => {
  return state.offer.sports.entities[selectActiveSportId(state)];
};

export const {
  selectAll: selectLeagues,
  selectById: selectLeagueById,
  selectIds: selectLeagueIds,
} = leagueAdapter.getSelectors(({ offer }) => offer.leagues);

function filterActiveLeagues(leagueIds, leagues) {
  return leagueIds.filter((id) => !!leagues[id] && leagues[id].active);
}

export const selectActiveLeagueId = ({ offer }) => offer.activeLeague;

export const selectActiveLeagueIds = createSelector(
  [
    selectActiveLeagueId,
    selectActiveSport,
    selectActiveSports,
    (state) => state.offer.leagues.entities,
  ],
  (activeLeague, activeSport, sports, leagues) => {
    if (activeLeague) return [activeLeague];
    if (activeSport) {
      return filterActiveLeagues(activeSport.leagues, leagues);
    }
    return sports.reduce((leagueIds, sport) => {
      const activeLeagues = filterActiveLeagues(sport.leagues, leagues);
      leagueIds = [...leagueIds, ...activeLeagues];
      return leagueIds;
    }, []);
  }
);

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

export const selectActiveSportLeagueIds = createSelector(
  [selectActiveSport, (state) => state.offer.leagues.entities],
  (activeSport, leagues) => {
    if (!activeSport) return [];
    return filterActiveLeagues(activeSport.leagues, leagues);
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
