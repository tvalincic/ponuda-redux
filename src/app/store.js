import { configureStore } from "@reduxjs/toolkit";
import { slipReducer } from "../features/slip/state/slipSlice";
import { offerReducer } from "../features/offer/state/offerSlice";

export default configureStore({
  reducer: {
    slip: slipReducer,
    offer: offerReducer,
  },
});
