import full from "./mock/full.json";
import diff1 from "./mock/diff1.json";
import diff2 from "./mock/diff2.json";
import diff3 from "./mock/diff3.json";
import diff4 from "./mock/diff4.json";
import diff5 from "./mock/diff5.json";
import diff6 from "./mock/diff6.json";
import diff7 from "./mock/diff7.json";
import diff8 from "./mock/diff8.json";
import diff9 from "./mock/diff9.json";
import diff10 from "./mock/diff10.json";
const diffs = [
  diff1,
  diff2,
  diff3,
  diff4,
  diff5,
  diff6,
  diff7,
  diff8,
  diff9,
  diff10,
];

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
