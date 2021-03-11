import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchOffer } from "../state/offerSlice";
import { CenterSection } from "./center-section";
import { Sidebar } from "./sidebar";

export const Offer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOffer());
  }, [dispatch]);
  return (
    <section className="offer">
      <Sidebar />
      <CenterSection />
    </section>
  );
};
