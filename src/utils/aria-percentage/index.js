function ariaPercentage(timers) {
  if (timers.onBreak) {
    const breakTime = timers.break * 60;
    const percentage = timers.current / breakTime;
    const wholePercentage = percentage * 100;
    return 100 - wholePercentage;
  } else {
    const focusTime = timers.focus * 60;
    const percentage = timers.current / focusTime;
    const wholePercentage = percentage * 100;
    return 100 - wholePercentage;
  }
}

export default ariaPercentage;
