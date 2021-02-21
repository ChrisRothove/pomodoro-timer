import React from "react";

function DurationHeader({ timers, minutesToDuration }) {
  if (timers.onBreak) {
    return (
      <h2 data-testid="session-title">
        On break for {minutesToDuration(timers.break)} minutes
      </h2>
    );
  } else {
    return (
      <h2 data-testid="session-title">
        Focusing for {minutesToDuration(timers.focus)} minutes
      </h2>
    );
  }
}

export default DurationHeader;
