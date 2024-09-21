import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimeChallenge({ title, targetTime }) {
  const [timeExpired, setTimeExpired] = useState(false);

  const [timerStarted, setTimeStarted] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.open();
    }, targetTime * 1000);

    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimeExpired(false);
    setTimeStarted(false);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime result="lost" />
      <section className="challenge">
        <h2>
          {title}
          {timeExpired && <p>You Lost!</p>}
          <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? "s" : ""}
          </p>
          <p>
            <button onClick={timerStarted ? handleStop : handleStart}>
              {timerStarted ? "stop" : "start"} Challenge
            </button>
          </p>
          <p className={timerStarted ? "active" : undefined}>
            {timerStarted ? "Time is running" : "Time is inactive"}
          </p>
        </h2>
      </section>
    </>
  );
}

export default TimeChallenge;
