import React, { useState } from "react";
import classNames from "../utils/class-names";
import { minutesToDuration } from "../utils/duration";
import useInterval from "../utils/useInterval";

function Pomodoro() {
  const initialTimerState = {
    focus: 25,
    break: 5,
    current: 0,
  };

  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timers, setTimers] = useState(initialTimerState);

  useInterval(() => {}, isTimerRunning ? 1000 : null);

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
  }

  function reduceFocus() {
    let newFocus = timers.focus - 5;
    if (newFocus < 0) newFocus = 0;
    setTimers({
      ...timers,
      focus: newFocus,
    });
  }

  function increaseFocus() {
    let newFocus = timers.focus + 5;
    if (newFocus >= 60) newFocus = 60;
    setTimers({
      ...timers,
      focus: newFocus,
    });
  }

  function reduceBreak() {
    let newBreak = timers.break - 5;
    if (newBreak < 0) newBreak = 0;
    setTimers({
      ...timers,
      break: newBreak,
    });
  }

  function increaseBreak() {
    let newBreak = timers.break + 5;
    if (newBreak >= 15) newBreak = 15;
    setTimers({
      ...timers,
      break: newBreak,
    });
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {minutesToDuration(timers.focus)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={reduceFocus}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={increaseFocus}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(timers.break)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={reduceBreak}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={increaseBreak}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
            <button
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">Focusing for 25:00 minutes</h2>
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              25:00 remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="0" // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: "0%" }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;