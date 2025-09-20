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

module.exports = debounce;
