import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { addOdd, changeStake } from "./actions";

export const slipAdapter = createEntityAdapter({
  selectId: (odd) => odd.innerId,
});

const initialState = slipAdapter.getInitialState({
  odd: 0,
  payout: 0,
  eventualPayout: 0,
  type: 0,
  status: 0,
  numberOfSelection: 0,
  error: "Krenite s odabirom tečajeva!",
  number: 0,
  time: 0,
  subscriptionNumber: null,
  stakeWithoutMC: 0,
  stake: 0,
  tax: 0,
});

const slipSlice = createSlice({
  name: "slip",
  initialState,
  reducers: {},
  extraReducers: {
    [addOdd.fulfilled]: slipAdapter.addOne,
    [addOdd.rejected]: (_, action) => {
      console.error(action);
    },
    [changeStake.fulfilled]: (state, action) => {
      state.stake = action.payload;
    },
    [changeStake.rejected]: (_, action) => {
      console.error(action);
    },
  },
});

export const { reducer: slipReducer } = slipSlice;
