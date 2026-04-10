/* ════════════════════════════════════════════════════
   SafeSight · js/panels/caregiver/tracking.js
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['c-tracking'] = function () {
  var c = window.SS.c;

  var deviceStatus = [
    ['GPS Signal',   'Excellent', 'badge-green'],
    ['Battery',      '82%',       'badge-green'],
    ['Fall Detection','Active',   'badge-green'],
    ['Connectivity', 'Online',    'badge-green'],
    ['Last Sync',    'Just now',  'badge-teal' ],
  ];

  var locationDetails = [
    ['Current Address',   '4th Ave S, Seattle'],
    ['Safe Zone',         'Inside home zone'],
    ['Distance from Home','350 ft'],
    ['Current Speed',     '2.1 mph (walking)'],
    ['Heading',           'North'],
  ];

  return '<div class="panel active">'
    + c.pageHeader('Live <em>Tracking</em>', 'Real-time location and movement of Alex.')

    /* Full-width map */
    + '<div class="card">'
    +   '<div class="map-bar">'
    +     '<div style="display:flex;align-items:center;gap:12px">'
    +       '<span class="badge badge-green"><span class="dot-live green"></span>Live</span>'
    +       '<span style="font-size:0.84rem;color:var(--muted);font-weight:300">4th Ave S, Seattle, WA</span>'
    +     '</div>'
    +     '<div class="btn-row" style="margin-top:0">'
    +       '<button class="btn btn-ghost btn-sm" onclick="toast(\'Map centred on Alex\')">Centre Map</button>'
    +       '<button class="btn btn-gold  btn-sm" onclick="toast(\'📋 Location link copied\')">Share Location</button>'
    +     '</div>'
    +   '</div>'
    +   c.map('h-360')
    + '</div>'

    + '<div class="grid-2">'

    /* Device status */
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>Device Status</div></div>'
    +     deviceStatus.map(function (r) {
            return '<div class="toggle-row"><div class="toggle-label">' + r[0] + '</div>'
              + '<span class="badge ' + r[2] + '">' + r[1] + '</span></div>';
          }).join('')
    +   '</div>'

    /* Location details */
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>Location Details</div></div>'
    +     locationDetails.map(function (r) {
            return c.kvRow(r[0], r[1]);
          }).join('')
    +     '<div class="btn-row" style="margin-top:16px">'
    +       '<button class="btn btn-gold btn-sm" onclick="toast(\'📣 Alert sent to Alex\\\'s glasses\')">Send Alert to Alex</button>'
    +     '</div>'
    +   '</div>'

    + '</div></div>';
};
