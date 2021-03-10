import { configureStore } from "@reduxjs/toolkit";
import { slipReducer } from "../features/slip/state/slipSlice";

export default configureStore({
  reducer: {
    slip: slipReducer,
  },
});
