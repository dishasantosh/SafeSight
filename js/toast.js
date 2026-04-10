/* ════════════════════════════════════════════════════
   SafeSight · js/toast.js
   Lightweight toast notification system
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};

window.SS.toast = (function () {
  var timer = null;

  function show(msg) {
    var el = document.getElementById('toast');
    if (!el) return;
    clearTimeout(timer);
    el.textContent = msg;
    el.classList.add('show');
    timer = setTimeout(function () { el.classList.remove('show'); }, 3200);
  }

  return { show: show };
})();

/* Expose globally for inline onclick handlers */
function toast(msg) { window.SS.toast.show(msg); }
