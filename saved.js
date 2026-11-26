// Shared helper for the Saved list. Items are kept in this browser's localStorage.
(function () {
  var KEY = "shelf-saved";
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { return {}; }
  }
  function store(obj) {
    try { localStorage.setItem(KEY, JSON.stringify(obj)); } catch (e) {}
  }
  window.Saved = {
    keyOf: function (kind, title, url) { return kind + "|" + title + "|" + (url || ""); },
    all: load,
    isSaved: function (key) { return Object.prototype.hasOwnProperty.call(load(), key); },
    set: function (key, item, on) {
      var obj = load();
      if (on && item) { obj[key] = item; } else { delete obj[key]; }
      store(obj);
    }
  };
})();
