import React from "react";

function BreakButtons({ reduceBreak, increaseBreak, timers }) {
  if (timers.isStopped) {
    return (
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-break"
          onClick={reduceBreak}
        >
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-break"
          onClick={increaseBreak}
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-break"
          disabled
        >
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-break"
          disabled
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    );
  }
}

export default BreakButtons;
