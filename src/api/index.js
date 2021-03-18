import full from "./mock/full.json";
import { diffs } from "./mock/diffs";

export const client = {
  fetchOffer() {
    return new Promise((resolve) => {
      resolve(full);
    });
  },
  subscribe(fn) {
    var counter = 0;
    const interval = setInterval(() => {
      if (!diffs[counter]) {
        clearInterval(interval);
        return;
      }
      fn(diffs[counter]);
      counter++;
    }, 1000);
  },
};
