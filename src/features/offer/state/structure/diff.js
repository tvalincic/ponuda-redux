import {
  constructAndPushSport,
  constructAndPushEvent,
  constructAndPushOffer,
  constructAndPushOdd,
} from "./full";
import { getLeagueId } from "./shared";
import * as expand from "./unpack";

export function structureDiff(diff, state) {
  const expandedOffer = expand.index(diff);
  return constructSportDiff(expandedOffer, state.offer);
}

function inactiveData(arr, id) {
  arr.push({ id, inactive: true });
}

function findKey(data, property, key) {
  return data && data[property]
    ? data[property].find((v) => v.startsWith(`${key}_`))
    : null;
}

function checkAndPush(dataToCopy, key, id, arr) {
  const copy = { ...dataToCopy };
  delete copy[key];
  if (!!Object.keys(copy).length) {
    copy.id = id;
    arr.push(copy);
  }
}

function constructSportDiff(sports, state) {
  return Object.entries(sports).reduce(
    (data, [sportId, sport]) => {
      if (!sport) {
        inactiveData(data.sports, sportId);
        return data;
      }
      if (!state.sports.entities[sportId]) {
        constructAndPushSport(sport, sportId, data);
        return data;
      }
      constructEventDiff(sport.dogadjaji, state, data);
      checkAndPush(sport, "dogadjaji", sportId, data.sports);
      return data;
    },
    {
      sports: [],
      events: [],
      offers: [],
      odds: [],
      leagues: {},
    }
  );
}

function constructEventDiff(events = {}, state, data) {
  Object.entries(events).forEach(([eventId, eventDiff]) => {
    if (!eventDiff) {
      inactiveData(data.events, eventId);
      return data;
    }
    const event = state.events.entities[eventId];
    if (!event) {
      const leagueId = getLeagueId(eventDiff, Object.values(data.leagues));
      constructAndPushEvent(eventDiff, eventId, leagueId, data);
      return data;
    }
    checkAndPush(eventDiff, "ponude", eventId, data.events);
    constructOfferDiff(eventDiff.ponude, event, state, data);
  });
}

function constructOfferDiff(offers = {}, event, state, data) {
  Object.entries(offers).forEach(([offerKey, offerDiff]) => {
    const offerKeyFromEvent = findKey(event, "offers", offerKey);
    if (!offerDiff) {
      inactiveData(data.offers, offerKeyFromEvent);
      return data;
    }
    const offer = state.offers.entities[offerKeyFromEvent];
    if (!offer) {
      constructAndPushOffer(offerDiff, offerKey, event.id, data);
      return data;
    }
    checkAndPush(offerDiff, "tecajevi", offerKeyFromEvent, data.offers);
    constructOddDiff(offerDiff.tecajevi, offer, event.id, data, state);
  });
}

function constructOddDiff(odds = {}, offer, eventId, data, state) {
  Object.entries(odds).forEach(([oddKey, oddDiff]) => {
    const oddKeyFromOffer = findKey(offer, "odds", oddKey);
    if (!oddDiff) {
      inactiveData(data.odds, oddKeyFromOffer);
      return data;
    }
    const oddFromState = state.odds.entities[oddKeyFromOffer];
    if (!oddFromState) {
      constructAndPushOdd(oddDiff, oddKeyFromOffer, offer.id, eventId, data);
      return data;
    }
    if (oddFromState.tecaj && oddDiff.tecaj) {
      oddDiff.trend = oddDiff.tecaj - oddFromState.tecaj;
    }
    checkAndPush(oddDiff, "", oddKeyFromOffer, data.odds);
  });
}

export default structureDiff;
