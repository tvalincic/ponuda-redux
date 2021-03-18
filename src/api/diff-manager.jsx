import React, { useState } from "react";
import "./style.css";
import classnames from "classnames";
import { client } from "./";

export const DiffManager = () => {
  const [timer, setTimer] = useState(client.getDefaultTimer());
  const [started, setStarted] = useState(false);

  const handleButtonClick = () => {
    if (started) {
      client.stop();
    } else {
      client.start(handleResetClick);
    }
    setStarted(!started);
  };

  const handleResetClick = () => {
    client.reset();
    setStarted(false);
    setTimer(client.getDefaultTimer());
  };

  const handleTimerChange = (e) => {
    client.changeTime(e.target.value);
    setTimer(e.target.value);
  };

  return (
    <div className="diff-manager">
      <button
        className={classnames("diff-button", {
          start: !started,
          stop: started,
        })}
        onClick={handleButtonClick}
      >
        {started ? "Stop" : "Start"}
      </button>
      <button className="diff-button reset" onClick={handleResetClick}>
        Reset
      </button>
      <input
        type="number"
        className="timer"
        value={timer}
        onChange={handleTimerChange}
      />
    </div>
  );
};
