/* ════════════════════════════════════════════════════
   SafeSight · js/panels/user/dashboard.js
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['u-home'] = function () {
  var c = window.SS.c;
  return '<div class="panel active">'

    + c.pageHeader('Good morning, <em>Alex</em>', 'Your SafeSight glasses are connected and monitoring.')

    /* Device hero */
    + '<div class="device-hero">'
    +   '<svg class="glasses-graphic" width="120" height="52" viewBox="0 0 200 70" fill="none">'
    +     '<rect x="10" y="22" width="72" height="32" rx="12" stroke="rgba(232,226,216,0.4)" stroke-width="3.5"/>'
    +     '<rect x="118" y="22" width="72" height="32" rx="12" stroke="rgba(232,226,216,0.4)" stroke-width="3.5"/>'
    +     '<path d="M82 38H118" stroke="rgba(232,226,216,0.35)" stroke-width="3.5" stroke-linecap="round"/>'
    +     '<path d="M10 36Q4 36 2 32" stroke="rgba(232,226,216,0.2)" stroke-width="3" stroke-linecap="round"/>'
    +     '<path d="M190 36Q196 36 198 32" stroke="rgba(232,226,216,0.2)" stroke-width="3" stroke-linecap="round"/>'
    +     '<circle cx="46" cy="38" r="9" fill="rgba(74,155,184,0.35)"/>'
    +     '<circle cx="154" cy="38" r="9" fill="rgba(74,155,184,0.35)"/>'
    +     '<circle cx="46" cy="38" r="4" fill="rgba(74,155,184,0.65)"/>'
    +     '<circle cx="154" cy="38" r="4" fill="rgba(74,155,184,0.65)"/>'
    +   '</svg>'
    +   '<div class="device-text">'
    +     '<div class="device-name">SafeSight Gen 1</div>'
    +     '<div class="device-fw">Paired · Firmware 2.1.4 · <span style="color:var(--green)">●</span> Online</div>'
    +     '<div class="device-stats">'
    +       '<div class="dev-stat"><div class="dev-stat-lbl">Battery</div><div class="dev-stat-val">82%</div>'
    +         '<div class="battery-bar"><div class="battery-fill"></div></div></div>'
    +       '<div class="dev-stat"><div class="dev-stat-lbl">GPS</div><div class="dev-stat-val" style="color:var(--green)">Excellent</div></div>'
    +       '<div class="dev-stat"><div class="dev-stat-lbl">Fall Detect</div><div class="dev-stat-val" style="color:var(--green)">Active</div></div>'
    +       '<div class="dev-stat"><div class="dev-stat-lbl">Navigation</div><div class="dev-stat-val" style="color:var(--teal-light)">Ready</div></div>'
    +     '</div>'
    +   '</div>'
    + '</div>'

    /* Stat tiles */
    + '<div class="grid-3" style="margin-bottom:22px">'
    +   c.statTile('👟', 'Steps Today',     '3,241',    'Goal: 5,000 · 65% complete', '')
    +   c.statTile('🛡️', 'Safety Status',   'All Clear','No incidents today',         'green sm')
    +   c.statTile('🗺️', 'Location',        'Safe Zone','4th Ave S, Seattle',          'teal sm')
    + '</div>'

    /* Quick actions */
    + '<div class="card">'
    +   '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>Quick Actions</div></div>'
    +   '<div class="quick-actions">'
    +     '<button class="btn btn-teal"  onclick="showPanel(\'u-navigation\')">◎ &nbsp;Start Navigation</button>'
    +     '<button class="btn btn-ghost" onclick="showPanel(\'u-safety\')">⬡ &nbsp;Safety Settings</button>'
    +     '<button class="btn btn-ghost" onclick="toast(\'📣 Alert sent — Sarah notified.\')">◷ &nbsp;Alert Caregiver</button>'
    +     '<button class="btn btn-ghost" onclick="showPanel(\'u-setup\')">⌁ &nbsp;Setup Glasses</button>'
    +   '</div>'
    + '</div>'

    + '</div>';
};
