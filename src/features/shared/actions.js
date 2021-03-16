import { createAsyncThunk } from "@reduxjs/toolkit";
const Slip = require("@minus5/listic.lib");
export const slipApi = Slip();

export const combineIds = (id, sourceId) => `${sourceId}-${id}`;

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

function constructOdd(state, oddId) {
  const { odds, offers, events } = state.offer;
  const odd = odds.entities[oddId];
  if (!odd) return null;
  const offer = offers.entities[odd.offer];
  const event = events.entities[odd.event];
  if (!offer || !event) return null;
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
  };
}

export const addOdd = createAsyncThunk(
  "slip/addOdd",
  async (oddId, { getState }) => {
    const odd = constructOdd(getState(), oddId);
    if (!odd) throw new Error("Failed adding odd to slip");
    const ret = slipApi.add(odd);
    if (!ret.ok) throw new Error("Failed adding odd to slip");
    const generatedOdd = slipApi
      .tecajevi()
      .find((tecaj) => tecaj.id === odd.id && tecaj.izvorId === odd.izvorId);
    if (!generatedOdd) throw new Error("Failed adding odd to slip");
    return {
      newOdd: {
        event: odd.eventId,
        odd: oddId,
        offer: odd.offerKey,
        innerId: combineIds(oddId, odd.izvorId),
      },
      zamjena: ret.zamjena,
      removed: ret.removed,
      ...getCurrentSlip(),
    };
  }
);
