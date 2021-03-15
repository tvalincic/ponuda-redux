import { createAsyncThunk } from "@reduxjs/toolkit";
import { structureFull } from "./structure";
import { client } from "../../../api";

export const fetchOffer = createAsyncThunk("offer/fetchOffer", async () => {
  const data = await client.fetchOffer();
  return structureFull(data);
});
