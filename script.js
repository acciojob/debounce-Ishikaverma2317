// Debounce Function
function debounce(callback, delay, immediate = false) {
  let timeout;

  return function (...args) {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) {
        callback.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, delay);

    if (callNow) {
      callback.apply(context, args);
    }
  };
}

// Example 1: Normal debounce (fires after delay)
const debouncedNormal = debounce((time) => {
  console.log("Normal Debounce Fired at:", time);
}, 3000);

// Example 2: Immediate debounce (fires instantly on first call)
const debouncedImmediate = debounce((time) => {
  console.log("Immediate Debounce Fired at:", time);
}, 3000, true);

// Event Listener
document.addEventListener('keypress', () => {
  const currentTime = performance.now().toFixed(0);

  debouncedNormal(currentTime);      // waits for 3s silence
  debouncedImmediate(currentTime);   // fires instantly, then waits 3s
});
