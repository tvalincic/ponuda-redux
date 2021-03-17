import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { addOdd } from "../../shared";
import { fetchOffer } from "./actions";

export const sportsAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.poredak - b.poredak,
});

export const leagueAdapter = createEntityAdapter({
  sortComparer: (a, b) => {
    if (a.title > b.title) return -1;
    if (a.title < b.title) return 1;
    return 0;
  },
});
export const eventsAdapter = createEntityAdapter();
export const offersAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.poredak - b.poredak,
});
export const oddsAdapter = createEntityAdapter();

const initialState = {
  sports: sportsAdapter.getInitialState(),
  leagues: leagueAdapter.getInitialState(),
  events: eventsAdapter.getInitialState(),
  offers: offersAdapter.getInitialState(),
  odds: oddsAdapter.getInitialState(),
  activeSport: 100,
  activeLeague: null,
  activeEvent: null,
  activeOffer: null,
};

const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    changeActiveSport(state, action) {
      if (state.activeSport !== action.payload) {
        state.activeSport = action.payload;
        state.activeLeague = null;
        window.scrollTo(0, 0);
      }
    },
    changeActiveLeague(state, action) {
      if (state.activeLeague !== action.payload) {
        state.activeLeague = action.payload;
        window.scrollTo(0, 0);
      }
    },
    handleDiff(state, action) {
      const { sports, leagues, events, offers, odds } = action.payload;
      sportsAdapter.upsertMany(state.sports, sports);
      leagueAdapter.upsertMany(state.leagues, leagues);
      eventsAdapter.upsertMany(state.events, events);
      offersAdapter.upsertMany(state.offers, offers);
      oddsAdapter.upsertMany(state.odds, odds);
    },
  },
  extraReducers: {
    [fetchOffer.fulfilled]: (state, action) => {
      const { sports, leagues, events, offers, odds } = action.payload;
      sportsAdapter.upsertMany(state.sports, sports);
      leagueAdapter.upsertMany(state.leagues, leagues);
      eventsAdapter.upsertMany(state.events, events);
      offersAdapter.upsertMany(state.offers, offers);
      oddsAdapter.upsertMany(state.odds, odds);
    },
    [fetchOffer.rejected]: (state, action) => {
      console.error(action.error);
    },
    [addOdd.fulfilled]: (state, action) => {
      const { newOdd, ...slipData } = action.payload;
      const { odd } = newOdd;
      const { removed = [] } = slipData;
      const updates = [
        {
          id: odd,
          changes: { selected: true },
        },
      ];
      removed.forEach((odd) => {
        updates.push({
          id: odd.oddId,
          changes: { selected: false },
        });
      });
      oddsAdapter.updateMany(state.odds, updates);
    },
  },
});

export const {
  changeActiveSport,
  changeActiveLeague,
  handleDiff,
} = offerSlice.actions;

export const { reducer: offerReducer } = offerSlice;
