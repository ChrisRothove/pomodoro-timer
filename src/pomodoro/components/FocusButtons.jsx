import React from "react";

function FocusButtons({ reduceFocus, increaseFocus, timers }) {
  if (timers.isStopped) {
    return (
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
    );
  } else {
    return (
      <div className="input-group-append">
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          disabled
        >
          <span className="oi oi-minus" />
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          data-testid="increase-focus"
          disabled
        >
          <span className="oi oi-plus" />
        </button>
      </div>
    );
  }
}

export default FocusButtons;
