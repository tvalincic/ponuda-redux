import { handleDiff } from "./offerSlice";
import { structureDiff } from "./structure";

export const handleDiffMiddleware = (storeApi) => (next) => (action) => {
  if (action.type === handleDiff.type) {
    const structured = structureDiff(action.payload, storeApi.getState());
    action.payload = structured;
  }
  return next(action);
};
