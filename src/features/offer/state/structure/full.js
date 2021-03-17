import * as expand from "./unpack";
import {
  getSport,
  getLeagueId,
  getLeague,
  getEvent,
  getOffer,
  getOdd,
} from "./shared";
import { eventState } from "../offerSlice";

function structure(full) {
  const expandedOffer = expand.index(full);
  return constructSports(expandedOffer);
}

function constructSports(sports) {
  const structured = Object.entries(sports).reduce(
    (data, [id, sport]) => {
      constructAndPushSport(sport, id, data);
      return data;
    },
    {
      sports: [],
      leagues: {},
      events: [],
      offers: [],
      odds: [],
    }
  );
  structured.leagues = Object.values(structured.leagues);
  return structured;
}

export function constructAndPushSport(sport, id, data) {
  const { leagueIds, hasActiveLeague } = constructLeaguesAndEvents(
    sport.dogadjaji,
    id,
    data
  );
  const sportOffer = getSport(sport, id, hasActiveLeague);
  sportOffer.leagues = [...leagueIds];
  data.sports.push(sportOffer);
}

export function constructLeaguesAndEvents(events = {}, sportId, data) {
  const leagueIds = new Set();
  let hasActiveLeague = false;
  Object.entries(events).forEach(([id, event]) => {
    const leagueId = constructLeague(event, sportId, data, leagueIds);
    if (leagueId) {
      const league = data.leagues[leagueId];
      league.eventIds.push(id);
      if (event.stanje === eventState.active) league.activeEventIds.push(id);
      if (!league.active && league.activeEventIds.length) {
        league.active = true;
        hasActiveLeague = true;
      }
    }
    constructAndPushEvent(event, id, leagueId, data);
  });
  return { leagueIds: Array.from(leagueIds), hasActiveLeague };
}

export function constructLeague(event, sportId, data, leagueIds) {
  const leagueId = getLeagueId(event, Object.values(data.leagues));
  if (!leagueId) return;
  if (!data.leagues[leagueId]) {
    data.leagues[leagueId] = getLeague(event, leagueId, sportId);
  }
  leagueIds.add(leagueId);
  return leagueId;
}

export function constructAndPushEvent(event, id, leagueId, data) {
  const constructedEvent = getEvent(event, id, leagueId);
  const offerIds = constructOffers(event.ponude, id, data);
  constructedEvent.offers = [...offerIds];
  data.events.push(constructedEvent);
}

export function constructOffers(offers = {}, eventId, data) {
  const offerIds = new Set();
  Object.entries(offers).forEach(([offerKey, offer]) => {
    const constructedOffer = constructAndPushOffer(
      offer,
      offerKey,
      eventId,
      data
    );
    offerIds.add(constructedOffer.id);
  });
  return Array.from(offerIds);
}

export function constructAndPushOffer(offer, offerKey, eventId, data) {
  const constructedOffer = getOffer(offer, offerKey, eventId);
  const oddIds = constructOdds(
    offer.tecajevi,
    constructedOffer.id,
    eventId,
    data
  );
  constructedOffer.odds = [...oddIds];
  data.offers.push(constructedOffer);
  return constructedOffer;
}

function constructOdds(odds = {}, offerId, eventId, data) {
  const oddIds = new Set();
  Object.entries(odds).forEach(([oddKey, odd]) => {
    const constructedOdd = constructAndPushOdd(
      odd,
      oddKey,
      offerId,
      eventId,
      data
    );
    oddIds.add(constructedOdd.id);
  });
  return Array.from(oddIds);
}

export function constructAndPushOdd(odd, oddKey, offerId, eventId, data) {
  const constructedOdd = getOdd(odd, oddKey, offerId, eventId);
  data.odds.push(constructedOdd);
  return constructedOdd;
}

export default structure;
