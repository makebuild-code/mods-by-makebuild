// Global debug logging functions
window.debug = (...args) => {
    new URLSearchParams(location.search).get('log') === 'true' && console.log(...args);
};

window.debugError = (...args) => {
    new URLSearchParams(location.search).get('log') === 'true' && console.error(...args);
};

window.debugWarn = (...args) => {
    new URLSearchParams(location.search).get('log') === 'true' && console.warn(...args);
};