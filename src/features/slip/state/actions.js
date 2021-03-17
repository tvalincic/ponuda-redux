import { createAsyncThunk } from "@reduxjs/toolkit";
import { slipApi, getCurrentSlip } from "../../shared";

export const changeStake = createAsyncThunk(
  "slip/changeStake",
  async (stake) => {
    const ret = slipApi.ulog(stake);
    if (!ret) throw new Error("Failed stake change.");
    return getCurrentSlip();
  }
);
