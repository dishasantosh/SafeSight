/* SafeSight · app.js */
window.SS = window.SS || {};

window.SS.app = {
  role:  null,
  theme: 'light', /* default = light */

  enter: function (role) {
    this.role = role;
    document.getElementById('role-screen').style.display = 'none';
    document.querySelector('.landing-theme-toggle').style.display = 'none';
    document.getElementById('app').classList.add('active');

    var pill = document.getElementById('mode-pill');
    if (role === 'user') {
      pill.textContent = 'User Mode';
      pill.className   = 'mode-pill user-mode';
    } else {
      pill.textContent = 'Caregiver Mode';
      pill.className   = 'mode-pill caregiver-mode';
    }

    /* Sync app theme btn label */
    var btn = document.getElementById('theme-btn');
    if (btn) btn.textContent = this.theme === 'dark' ? '☀ Light' : '☽ Dark';

    window.SS.router.buildSidebar(role);
    window.SS.router.showPanel(window.SS.router.NAV[role][0].id);
  },

  switchRole: function () {
    this.role = null;
    document.getElementById('role-screen').style.display = 'flex';
    document.querySelector('.landing-theme-toggle').style.display = 'flex';
    document.getElementById('app').classList.remove('active');
    document.getElementById('main').innerHTML = '';
  },

  toggleTheme: function () {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark', this.theme === 'dark');

    /* Update both buttons */
    var appBtn     = document.getElementById('theme-btn');
    var landingBtn = document.getElementById('landing-theme-btn');
    var icon       = document.getElementById('landing-theme-icon');

    if (appBtn)     appBtn.textContent     = this.theme === 'dark' ? '☀ Light' : '☽ Dark';
    if (landingBtn) landingBtn.textContent = this.theme === 'dark' ? '☀ Light mode' : '☽ Dark mode';
    if (icon)       icon.textContent       = this.theme === 'dark' ? '☽' : '☀';

    window.SS.toast.show(this.theme === 'dark' ? '☽  Dark mode' : '☀  Light mode');
  },
};

function enterApp(role)  { window.SS.app.enter(role); }
function switchRole()    { window.SS.app.switchRole(); }
function toggleTheme()   { window.SS.app.toggleTheme(); }

function startNav() {
  var input = document.getElementById('dest-input');
  if (!input || !input.value.trim()) {
    window.SS.toast.show('Please enter a destination first');
    return;
  }
  window.SS.toast.show('◎  Navigation started → ' + input.value.trim());
}

/* Handle direct role access from navigation (e.g., home.html#user or home.html#caregiver) */
window.addEventListener('DOMContentLoaded', function() {
  var hash = window.location.hash.replace('#', '');
  if (hash === 'user' || hash === 'caregiver') {
    // Small delay to ensure all scripts are loaded
    setTimeout(function() {
      enterApp(hash);
    }, 100);
  }
});
