import React, { useEffect, useState } from "react";
import classnames from "classnames";

export const Ticker = ({ trend, odd }) => {
  const [ticker, setTicker] = useState(true);

  useEffect(() => {
    setTicker(false);
  }, [odd]);

  useEffect(() => {
    setTicker(true);
  }, [ticker]);

  if (!ticker) return null;

  return (
    <div
      className={classnames("ticker", {
        up: trend > 0,
        down: trend < 0,
      })}
    ></div>
  );
};
