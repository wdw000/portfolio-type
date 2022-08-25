export function throttle(callback: () => void, delay: number) {
  let waiting = true;

  return function () {
    if (waiting) {
      callback();
      waiting = false;
      setTimeout(() => {
        waiting = true;
      }, delay);
    }
  };
}

export function debounce(callback: () => void, delay: number) {
  let timeOut: number;

  return function () {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      callback();
    }, delay);
  };
}
