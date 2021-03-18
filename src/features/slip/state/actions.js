import { createAsyncThunk } from "@reduxjs/toolkit";
import { slipApi, getCurrentSlip } from "../../shared";

export const changeStake = createAsyncThunk("slip/changeStake", (stake) => {
  const ret = slipApi.ulog(stake);
  if (!ret) throw new Error("Failed stake change.");
  return getCurrentSlip();
});

function generateChange(oddId, newOdd, newOddId) {
  return {
    izvorId: 1,
    noviTecaj: newOdd,
    noviTecajId: newOddId,
    tecajId: oddId,
    tipPromjene: "tecaj",
    verzijaPonude: 0,
  };
}

export const syncSlipAfterDiff = createAsyncThunk(
  "slip/syncSlipApi",
  ({ changed, old }, { getState }) => {
    const { slip } = getState();
    const changes = changed
      .map((odd) => {
        const oldOdd = old[odd.id];
        if (!oldOdd) return null;
        if (!slip.entities[odd.id]) return null;
        return generateChange(oldOdd.oddId, odd.tecaj, odd.oddId);
      })
      .filter((p) => !!p);
    slipApi.promjene(changes);
    return getCurrentSlip();
  }
);
