import { createAsyncThunk } from "@reduxjs/toolkit";
import { slipApi } from "../../shared/actions";

export const changeStake = createAsyncThunk(
  "slip/changeStake",
  async (stake) => {
    const ret = slipApi.ulog(stake);
    if (!ret) throw new Error("Failed stake change.");
    const s = slipApi.listic();
    console.log(s);
    return stake;
  }
);
