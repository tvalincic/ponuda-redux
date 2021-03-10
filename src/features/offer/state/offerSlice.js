import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import structure from "./structure";
import { client } from "../../../api";

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

export const fetchOffer = createAsyncThunk("offer/fetchOffer", async () => {
  const data = await client.fetchOffer();
  return structure(data);
});

const initialState = {
  sports: sportsAdapter.getInitialState(),
  leagues: leagueAdapter.getInitialState(),
  events: eventsAdapter.getInitialState(),
  offers: offersAdapter.getInitialState(),
  odds: oddsAdapter.getInitialState(),
  activeSport: null,
  activeLeague: null,
  activeEvent: null,
  activeOffer: null,
};

const offerSlice = createSlice({
  name: "slip",
  initialState,
  reducers: {
    changeActiveSport(state, action) {
      state.activeSport = action.payload;
    },
    changeActiveLeague(state, action) {
      state.activeLeague = action.payload;
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
  },
});

export const { changeActiveSport, changeActiveLeague } = offerSlice.actions;
export const { reducer: offerReducer } = offerSlice;
