import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleDiff } from "../state/offerSlice";
import { fetchOffer } from "../state/actions";
import { CenterSection } from "./center-section";
import { Sidebar } from "./sidebar";
import { client } from "../../../api";

export const Offer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOffer());
    client.subscribe((diff) => dispatch(handleDiff(diff)));
  }, [dispatch]);
  return (
    <section className="offer">
      <Sidebar />
      <CenterSection />
    </section>
  );
};
