import React from "react";
import { minutesToDuration, secondsToDuration } from "../../utils/duration";
import DurationHeader from "../components/DurationHeader";

function TimerDisplay({ timers, isTimerRunning }) {
  if (isTimerRunning) {
    return (
      <div>
        <div className="row mb-2">
          <div className="col">
            <DurationHeader
              timers={timers}
              minutesToDuration={minutesToDuration}
            />
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(timers.current)} remaining
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
    );
  } else {
    return <></>;
  }
}

export default TimerDisplay;
