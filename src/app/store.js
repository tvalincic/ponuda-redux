import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { slipReducer } from "../features/slip/state/slipSlice";
import { offerReducer, handleDiffMiddleware } from "../features/offer";

export default configureStore({
  reducer: {
    slip: slipReducer,
    offer: offerReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
    handleDiffMiddleware,
  ],
});
