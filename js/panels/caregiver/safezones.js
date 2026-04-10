/* ════════════════════════════════════════════════════
   SafeSight · js/panels/caregiver/safezones.js
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['c-safezones'] = function () {
  var c = window.SS.c;

  var zones = [
    { name: '🏠 Home',               radius: '300 ft radius', status: 'Inside',  sb: 'badge-green', bg: 'rgba(91,173,138,0.08)'  },
    { name: "🏥 Dr. Rivera's Office", radius: '100 ft radius', status: 'Outside', sb: 'badge-muted', bg: 'var(--navy-raised)'      },
    { name: '☕ Corner Café',         radius: '50 ft radius',  status: 'Outside', sb: 'badge-muted', bg: 'var(--navy-raised)'      },
  ];

  return '<div class="panel active">'
    + c.pageHeader('Safe <em>Zones</em>', 'Define areas where Alex can move freely without triggering alerts.')

    + '<div class="card">'
    +   '<div class="card-header">'
    +     '<div class="card-title"><span class="card-title-mark mark-teal"></span>Zone Map</div>'
    +     '<button class="btn btn-gold btn-sm" onclick="toast(\'+ Draw a new safe zone\')">+ Add Zone</button>'
    +   '</div>'
    +   c.map('h-360')
    + '</div>'

    + '<div class="grid-2">'

    /* Zone list */
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>Active Safe Zones</div></div>'
    +     zones.map(function (z) {
            return '<div class="contact-row" style="background:' + z.bg + '">'
              + '<div style="flex:1"><div class="contact-name">' + z.name + '</div>'
              + '<div class="contact-rel">' + z.radius + '</div></div>'
              + '<span class="badge ' + z.sb + '">' + z.status + '</span>'
              + '<div class="contact-actions">'
              +   '<button class="btn btn-ghost btn-sm" onclick="toast(\'Editing zone\')">Edit</button>'
              +   '<button class="btn btn-danger btn-sm" onclick="toast(\'Zone removed\')">✕</button>'
              + '</div>'
              + '</div>';
          }).join('')
    +   '</div>'

    /* Zone alert rules */
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>Zone Alert Rules</div></div>'
    +     c.toggleRow('Exit Alerts',         'Notify when Alex leaves any safe zone',         true,  'gold')
    +     c.toggleRow('Entry Confirmations', 'Notify when Alex arrives at a safe zone',       true,  'gold')
    +     c.toggleRow('Night Mode',          'Stricter alerts between 9 PM and 7 AM',          true,  'gold')
    +     c.toggleRow('Grace Period',        'Allow 2-minute delay before exit alert fires',   true,  'gold')
    +     '<div class="form-group" style="margin-top:18px"><label class="form-label">Default Zone Radius</label>'
    +       '<input type="range" min="50" max="1000" value="300">'
    +       '<div class="range-labels"><span>50 ft</span><span>500 ft</span><span>1000 ft</span></div>'
    +     '</div>'
    +   '</div>'

    + '</div></div>';
};
