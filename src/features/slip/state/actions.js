import { createAsyncThunk } from "@reduxjs/toolkit";
const Slip = require("@minus5/listic.lib");
const slipApi = Slip();

const combineIds = (id, sourceId) => `${sourceId}-${id}`;

export const addOdd = createAsyncThunk("slip/addOdd", async (odd) => {
  const ret = slipApi.add(odd);
  if (!ret.ok) throw new Error("Failed adding odd to slip");
  const generatedOdd = slipApi
    .tecajevi()
    .find((tecaj) => tecaj.id === odd.id && tecaj.izvorId === odd.izvorId);
  if (!generatedOdd) throw new Error("Failed adding odd to slip");
  return {
    ...generatedOdd.toJson(),
    innerId: combineIds(generatedOdd.id, generatedOdd.izvorId),
  };
});

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
