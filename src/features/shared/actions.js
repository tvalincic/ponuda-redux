import { createAsyncThunk } from "@reduxjs/toolkit";
const Slip = require("@minus5/listic.lib");
export const slipApi = Slip();

export function getCurrentSlip() {
  const slip = slipApi.listic();
  const taxCalculation = slipApi.porez.izracun(slip.ulogBez(), slip.dobitak);
  return {
    odd: slip.tecaj,
    payout: taxCalculation.dobitakBez,
    winning: slip.dobitak,
    eventualPayout: slip.eventualniDobitak,
    type: slip.tip,
    status: slip.status,
    numberOfSelection: slip.parova,
    error: slip.error,
    number: slip.broj,
    time: slip.vrijeme,
    subscriptionNumber: slip.pretplataBrojevi,
    stakeWithoutMC: slip.ulogBez(),
    stake: slip.ulogSa(),
    tax: taxCalculation.porez,
    mc: slip.ulogMt(),
  };
}

function constructOdd(odd, event, offer) {
  return {
    datum: event.vrijeme ? event.vrijeme.split("T")[0] : "",
    dogadjajId: event.baseId,
    id: odd.oddId,
    izvorId: 1,
    naziv: `${event.domacin}-${event.gost}`,
    ponudaId: offer.offerId,
    offerKey: offer.id,
    tecaj: odd.tecaj,
    tecajId: odd.oddId,
    tip: odd.naziv,
    vrijeme: event.vrijeme,
    eventId: event.id,
    oddId: `${odd.order}_${offer.offerKey}_${event.id}`,
  };
}

function constructRemovedOdds(removed = [], odds) {
  return removed.map((removed) => {
    const odd = odds.find((odd) => odd.oddId === removed.tecajId);
    return odd ? odd.id : null;
  });
}

export const addOdd = createAsyncThunk(
  "slip/addOdd",
  async (oddId, { getState }) => {
    const { odds, offers, events } = getState().offer;
    const oddFromState = odds.entities[oddId];
    if (!oddFromState) throw new Error("Failed adding odd to slip");

    const offer = offers.entities[oddFromState.offer];
    const event = events.entities[oddFromState.event];
    if (!offer || !event) throw new Error("Failed adding odd to slip");

    const odd = constructOdd(oddFromState, event, offer);
    const ret = slipApi.add(odd);
    if (!ret.ok) throw new Error("Failed adding odd to slip");
    const removed = constructRemovedOdds(
      ret.removed,
      offer.odds.map((odd) => odds.entities[odd])
    );
    return {
      newOdd: {
        event: odd.eventId,
        id: oddId,
        offer: odd.offerKey,
      },
      zamjena: ret.zamjena,
      removed,
      ...getCurrentSlip(),
    };
  }
);
