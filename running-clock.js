import React, { useState, useEffect } from "react";

function RunningClock() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          setIsRunning(false);
          return;
        }

        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  const handleStartClick = () => {
    if (minutes === 0 && seconds === 0) {
      return;
    }

    setIsRunning(true);
  };

  const handlePauseResumeClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleResetClick = () => {
    setIsRunning(false);
    setMinutes(0);
    setSeconds(0);
  };

  const handleMinutesChange = (event) => {
    setMinutes(parseInt(event.target.value, 10));
  };

  const handleSecondsChange = (event) => {
    setSeconds(parseInt(event.target.value, 10));
  };

  const formatTime = (minutes, seconds) => {
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <>
      <label>
        <input type="number" onChange={handleMinutesChange} value={minutes} />
        Minutes
      </label>
      <label>
        <input type="number" onChange={handleSecondsChange} value={seconds} />
        Seconds
      </label>
      <button onClick={handleStartClick}>START</button>
      <button onClick={handlePauseResumeClick}>
        {isRunning ? "PAUSE" : "RESUME"}
      </button>
      <button onClick={handleResetClick}>RESET</button>
      <h1 data-testid="running-clock">{formatTime(minutes, seconds)}</h1>
    </>
  );
}

export default RunningClock;
