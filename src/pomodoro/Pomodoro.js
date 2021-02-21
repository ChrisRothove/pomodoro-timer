import React, { useState } from "react";
import classNames from "../utils/class-names";
import { minutesToDuration } from "../utils/duration";
import useInterval from "../utils/useInterval";
import ariaPercentage from "../utils/aria-percentage";
import FocusButtons from "./components/FocusButtons";
import BreakButtons from "./components/BreakButtons";
import TimerDisplay from "./components/TimerDisplay";
import {
  increaseBreak,
  reduceBreak,
  increaseFocus,
  reduceFocus,
} from "../utils/increase-and-reduce";

function Pomodoro() {
  const initialTimerState = {
    focus: 25,
    break: 5,
    current: 1500,
    ariaPercentage: 0,
    onBreak: false,
    isStopped: true,
  };

  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timers, setTimers] = useState(initialTimerState);

  useInterval(
    () => {
      setTimers({
        ...timers,
        current: timers.current - 1,
        ariaPercentage: ariaPercentage(timers),
      });
      if (timers.current <= 1) {
        setTimers({
          ...timers,
          current: timers.break * 60,
          onBreak: !timers.onBreak,
        });
      }
    },
    isTimerRunning ? 1000 : null
  );

  function startFresh() {
    setTimers({
      ...initialTimerState,
      isStopped: true,
    });
    setIsTimerRunning(false);
  }

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    if (timers.isStopped) {
      setTimers({
        ...timers,
        isStopped: false,
      });
    }
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {minutesToDuration(timers.focus)}
            </span>
            {/*Component for the focus and break selectors*/}
            <FocusButtons
              reduceFocus={() => reduceFocus(timers, setTimers)}
              increaseFocus={() => increaseFocus(timers, setTimers)}
            />
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                Break Duration: {minutesToDuration(timers.break)}
              </span>
              <BreakButtons
                increaseBreak={() => increaseBreak(timers, setTimers)}
                reduceBreak={() => reduceBreak(timers, setTimers)}
              />
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
            <button
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
              onClick={startFresh}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
      <TimerDisplay timers={timers} />
    </div>
  );
}

export default Pomodoro;
