
function debounce(callback, delay, immediate = false) {
  let timeout;

  return function (...args) {
    const context = this;

    const later = () => {
      timeout = null;
      if (!immediate) callback.apply(context, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, delay);

    if (callNow) callback.apply(context, args);
  };
}


const input = document.getElementById("search");
const output = document.getElementById("output");

function showText(e) {
  output.textContent = "You typed: " + e.target.value;
}

const debouncedInput = debounce(showText, 1000);
input.addEventListener("input", debouncedInput);
