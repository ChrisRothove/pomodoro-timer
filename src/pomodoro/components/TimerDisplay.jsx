import React from "react";
import { minutesToDuration, secondsToDuration } from "../../utils/duration";
import DurationHeader from "../components/DurationHeader";

function TimerDisplay({ timers }) {
  if (!timers.isStopped) {
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
                aria-valuenow={timers.ariaPercentage}
                style={{ width: `${timers.ariaPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default TimerDisplay;
