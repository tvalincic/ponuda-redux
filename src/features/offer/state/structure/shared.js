import { nanoid } from "@reduxjs/toolkit";

export function constructId(id, key) {
  return `${key}_${id}`;
}

export function getSport(sport, sportId, isActive) {
  const constructed = { ...sport, id: sportId, leagues: [], active: isActive };
  delete constructed.dogadjaji;
  return constructed;
}

export function getLeagueId(event, leagues) {
  let leagueId = event.baseLigaId || event.ligaId;
  if (!leagueId && event.liga) {
    const liga = leagues.find((l) => l.title === event.liga);
    leagueId = liga ? liga.id : nanoid();
  }
  return leagueId;
}

export function getLeague(event, leagueId, sportId) {
  return {
    id: leagueId,
    baseTitle: event.baseLigaNaziv,
    title: event.liga,
    sport: sportId,
    eventIds: [],
    activeEventIds: [],
    active: false,
  };
}

export function getEvent(event, id, leagueId) {
  const constructed = {
    ...event,
    id,
    baseId: event.baseId || id,
    league: leagueId,
    offers: [],
  };
  ["baseLigaId", "ligaId", "baseLigaNaziv", "liga", "ponude"].forEach(
    (k) => delete constructed[k]
  );
  return constructed;
}

export function getOffer(offer, key, eventId) {
  const constructed = {
    ...offer,
    id: constructId(eventId, key),
    offerKey: key,
    offerId: offer.id,
    event: eventId,
    odds: [],
  };
  delete constructed.tecajevi;
  return constructed;
}

export function getOdd(odd, key, offerId, eventId) {
  return {
    ...odd,
    order: key,
    offer: offerId,
    event: eventId,
    oddId: odd.id,
    id: constructId(offerId, key),
  };
}
