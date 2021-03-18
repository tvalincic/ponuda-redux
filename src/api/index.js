import full from "./mock/full.json";
import diffs from "./mock/diffs.json";

var subscriptions = [];
var counter = 0;
var interval = null;
const defaultTimer = 1000;
var timer = defaultTimer;
var resetHandler = null;
var started = false;

function fetchOffer() {
  return new Promise((resolve) => {
    resolve(full);
  });
}

function subscribe(fn) {
  subscriptions.push(fn);
}

function start(onReset) {
  if (onReset) resetHandler = onReset;
  started = true;
  interval = setInterval(() => {
    if (!diffs[counter]) {
      reset();
      if (resetHandler) resetHandler();
      return;
    }
    subscriptions.forEach((sub) => sub(diffs[counter]));
    counter++;
  }, timer);
}

function stop() {
  started = false;
  clearInterval(interval);
}

function changeTime(value) {
  var shouldRestart = started;
  stop();
  timer = value || 1;
  if (shouldRestart) start();
}

function reset() {
  stop();
  timer = defaultTimer;
  counter = 0;
}

export const client = {
  fetchOffer,
  subscribe,
  start,
  stop,
  reset,
  changeTime,
  getDefaultTimer: () => 1000,
};
