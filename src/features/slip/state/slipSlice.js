import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { addOdd, getCurrentSlip } from "../../shared/actions";
import { changeStake } from "./actions";

export const slipAdapter = createEntityAdapter();

const initialState = slipAdapter.getInitialState({
  ...getCurrentSlip(),
});

function hasReplacement(slipData) {
  return slipData.zamjena && slipData.removed && !!slipData.removed.length;
}

const slipSlice = createSlice({
  name: "slip",
  initialState,
  reducers: {},
  extraReducers: {
    [addOdd.fulfilled]: (state, action) => {
      const { newOdd, ...slipData } = action.payload;
      slipAdapter.upsertOne(state, newOdd);

      if (hasReplacement(slipData)) {
        slipAdapter.removeMany(state, slipData.removed);
      }

      state.odd = slipData.odd;
      state.payout = slipData.payout;
      state.winning = slipData.winning;
      state.eventualPayout = slipData.eventualPayout;
      state.type = slipData.type;
      state.status = slipData.status;
      state.numberOfSelection = slipData.numberOfSelection;
      state.error = slipData.error;
      state.number = slipData.number;
      state.time = slipData.time;
      state.subscriptionNumber = slipData.subscriptionNumber;
      state.stakeWithoutMC = slipData.stakeWithoutMC;
      state.stake = slipData.stake;
      state.tax = slipData.tax;
      state.mc = slipData.mc;
    },
    [addOdd.rejected]: (_, action) => {
      console.error(action);
    },
    [changeStake.fulfilled]: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
    [changeStake.rejected]: (_, action) => {
      console.error(action);
    },
  },
});

export const { reducer: slipReducer } = slipSlice;
