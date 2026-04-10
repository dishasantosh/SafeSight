/* ════════════════════════════════════════════════════
   SafeSight · js/panels/caregiver/dashboard.js
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['c-home'] = function () {
  var c = window.SS.c;

  return '<div class="panel active">'
    + c.pageHeader('Caregiver <em>Dashboard</em>', "Overview of Alex Johnson's safety and activity.")

    + '<div class="grid-3" style="margin-bottom:22px">'
    +   c.statTile('📍', 'Location Status',  'Safe Zone',  '4th Ave S, Seattle · Just now', 'green sm')
    +   c.statTile('🔋', 'Glasses Battery',  '82%',        '~6 hours remaining',             '')
    +   c.statTile('🛡️', 'Safety Status',    'All Clear',  'No incidents today',             'green sm')
    + '</div>'

    + '<div class="grid-2">'

    /* Map card */
    +   '<div class="card">'
    +     '<div class="card-header">'
    +       '<div class="card-title"><span class="card-title-mark mark-teal"></span>Live Location</div>'
    +       '<span class="badge badge-green"><span class="dot-live green"></span>Live</span>'
    +     '</div>'
    +     c.map('h-280')
    +     '<div style="font-size:0.75rem;color:var(--muted);margin-top:12px;font-weight:300">'
    +       '📍 4th Ave S, Seattle, WA &nbsp;·&nbsp; Distance from home: 350 ft'
    +     '</div>'
    +   '</div>'

    /* Alerts card */
    +   '<div class="card">'
    +     '<div class="card-header">'
    +       '<div class="card-title"><span class="card-title-mark mark-gold"></span>Recent Alerts</div>'
    +       '<button class="btn btn-ghost btn-sm" onclick="showPanel(\'c-alerts\')">View All</button>'
    +     '</div>'
    +     c.alertItems([
            { ico:'🟢', title:'Safe Zone Entered', desc:'Alex returned to home safe zone',         time:'9:42 AM', c:'green' },
            { ico:'🚶', title:'Walk Began',         desc:'Left home heading north on Maple St',    time:'9:15 AM', c:'teal'  },
            { ico:'🔋', title:'Low Battery Resolved',desc:'Battery dipped to 20%, now at 82%',    time:'8:30 AM', c:'amber' },
            { ico:'🟢', title:'Morning Check-in',   desc:'Glasses powered on, GPS active',         time:'8:05 AM', c:'green' },
          ])
    +   '</div>'

    + '</div>'

    /* Activity row */
    + '<div class="card" style="margin-top:0">'
    +   '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>Today\'s Activity</div></div>'
    +   '<div class="grid-3">'
    +     c.activityBlock('3,241', 'Steps',       'of 5,000 goal')
    +     c.activityBlock('1.4 mi','Distance',    'walked today')
    +     c.activityBlock('52 min','Active Time', 'since 9:00 AM')
    +   '</div>'
    + '</div>'

    + '</div>';
};
