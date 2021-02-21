function reduceFocus(timers, setTimers) {
  let newFocus = timers.focus - 5;
  if (newFocus < 5) newFocus = 5;
  setTimers({
    ...timers,
    focus: newFocus,
    current: newFocus * 60,
  });
}

function increaseFocus(timers, setTimers) {
  let newFocus = timers.focus + 5;
  if (newFocus >= 60) newFocus = 60;
  setTimers({
    ...timers,
    focus: newFocus,
    current: newFocus * 60,
  });
}

function reduceBreak(timers, setTimers) {
  let newBreak = timers.break - 1;
  if (newBreak < 1) newBreak = 1;
  setTimers({
    ...timers,
    break: newBreak,
  });
}

function increaseBreak(timers, setTimers) {
  let newBreak = timers.break + 1;
  if (newBreak >= 15) newBreak = 15;
  setTimers({
    ...timers,
    break: newBreak,
  });
}

export { increaseBreak, reduceBreak, increaseFocus, reduceFocus };
