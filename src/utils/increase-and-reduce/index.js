function reduceFocus(timers, setTimers) {
  let newFocus = timers.focus - 5;
  if (newFocus < 0) newFocus = 0;
  setTimers({
    ...timers,
    focus: newFocus,
  });
}

function increaseFocus(timers, setTimers) {
  let newFocus = timers.focus + 5;
  if (newFocus >= 60) newFocus = 60;
  setTimers({
    ...timers,
    focus: newFocus,
  });
}

function reduceBreak(timers, setTimers) {
  let newBreak = timers.break - 5;
  if (newBreak < 0) newBreak = 0;
  setTimers({
    ...timers,
    break: newBreak,
  });
}

function increaseBreak(timers, setTimers) {
  let newBreak = timers.break + 5;
  if (newBreak >= 15) newBreak = 15;
  setTimers({
    ...timers,
    break: newBreak,
  });
}

export { increaseBreak, reduceBreak, increaseFocus, reduceFocus };
