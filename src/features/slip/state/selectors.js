import { slipAdapter } from "./slipSlice";

export const {
  selectAll: selectOdds,
  selectById: selectOddById,
  selectIds: selectOddIds,
} = slipAdapter.getSelectors((state) => state.slip);
