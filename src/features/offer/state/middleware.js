import { handleDiff } from "./offerSlice";
import { structureDiff } from "./structure";
import { syncSlipAfterDiff } from "../../slip";

function getChangedOdds(odds, oddsEntities) {
  return odds.reduce((data, odd) => {
    const oddEntity = oddsEntities[odd.id];
    if (!oddEntity) return data;
    data[odd.id] = { ...oddEntity };
    return data;
  }, {});
}

export const handleDiffMiddleware = (storeApi) => (next) => (action) => {
  var queue = [];
  if (action.type === handleDiff.type) {
    const state = storeApi.getState();
    const structured = structureDiff(action.payload, state);
    action.payload = structured;
    const oldOdds = getChangedOdds(structured.odds, state.offer.odds.entities);
    if (Object.keys(oldOdds).length) {
      queue.push(syncSlipAfterDiff({ changed: structured.odds, old: oldOdds }));
    }
  }
  next(action);
  queue.forEach((action) => storeApi.dispatch(action));
  queue = [];
};
