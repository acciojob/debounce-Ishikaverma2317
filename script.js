// Debounce function
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

// Usage Example
const input = document.getElementById("search");
const output = document.getElementById("output");

// Callback function
function showText(text) {
  output.textContent = "You typed: " + text;
}

// Wrap callback in debounce
const debouncedInput = debounce((e) => {
  showText(e.target.value);
}, 1000);

// Add event listener
input.addEventListener("input", debouncedInput);
