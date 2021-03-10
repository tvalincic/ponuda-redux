import * as expand from "./unpack";

function constructOdds(odds = {}, offerId) {
  return Object.entries(odds).reduce(
    (data, [order, odd]) => {
      data.odds.push({
        ...odd,
        order,
        offerId,
      });
      data.oddIds.add(odd.id);
      return data;
    },
    {
      odds: [],
      oddIds: new Set(),
    }
  );
}

function constructOffers(offers = {}, eventId) {
  return Object.entries(offers).reduce(
    (data, [offerKey, offer]) => {
      const constructedOffer = {
        ...offer,
        offerKey,
        eventId,
      };
      const { odds, oddIds } = constructOdds(offer.tecajevi, offer.id);
      data.odds = [...data.odds, ...odds];
      constructedOffer.odds = Array.from(oddIds);
      delete constructedOffer.tecajevi;
      data.offers.push(constructedOffer);
      data.offerIds.add(offer.id);
      return data;
    },
    {
      offers: [],
      offerIds: new Set(),
      odds: [],
    }
  );
}

function constructLeaguesAndEvents(events = {}, sportId) {
  return Object.entries(events).reduce(
    (data, [id, event]) => {
      const leagueId = event.baseLigaId || event.ligaId;
      if (leagueId) {
        if (!data.leagues[leagueId]) {
          data.leagues[leagueId] = {
            id: leagueId,
            baseTitle: event.baseLigaNaziv,
            title: event.liga,
            sportId,
            eventIds: [],
          };
        }
        data.leagues[leagueId].eventIds.push(id);
        data.leagueIds.add(leagueId);
      }
      const constructedEvent = {
        ...event,
        id,
        leagueId,
      };
      delete constructedEvent.baseLigaId;
      delete constructedEvent.ligaId;
      delete constructedEvent.baseLigaNaziv;
      delete constructedEvent.liga;
      delete constructedEvent.ponude;
      const { offers, odds, offerIds } = constructOffers(event.ponude);
      data.offers = [...data.offers, ...offers];
      data.odds = [...data.odds, ...odds];
      constructedEvent.offers = Array.from(offerIds);
      data.events.push(constructedEvent);
      return data;
    },
    {
      leagues: {},
      leagueIds: new Set(),
      events: [],
      offers: [],
      odds: [],
    }
  );
}

function structureSports(sports) {
  return Object.entries(sports).reduce(
    (offer, [id, sport]) => {
      const {
        leagues,
        events,
        offers,
        odds,
        leagueIds,
      } = constructLeaguesAndEvents(sport.dogadjaji, id);
      offer.leagues = [...offer.leagues, ...Object.values(leagues)];
      offer.events = [...offer.events, ...events];
      offer.offers = [...offer.offers, ...offers];
      offer.odds = [...offer.odds, ...odds];
      const sportOffer = { ...sport, id, leagues: Array.from(leagueIds) };
      delete sportOffer.dogadjaji;
      offer.sports.push(sportOffer);
      return offer;
    },
    {
      sports: [],
      leagues: [],
      events: [],
      offers: [],
      odds: [],
    }
  );
}

function structure(full) {
  const expandedOffer = expand.index(full);
  return structureSports(expandedOffer);
}

export default structure;
