/* ════════════════════════════════════════════════════
   SafeSight · js/panels/caregiver/history.js
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['c-history'] = function () {
  var c = window.SS.c;

  var routes = [
    ['Today, 9:15 AM',      'Home → 4th Ave S',    '0.3 mi','12 min','green'],
    ['Yesterday, 10:00 AM', 'Home → Dr. Rivera',   '1.2 mi','28 min','green'],
    ['Mon, 2:30 PM',        'Home → Café → Home',  '0.8 mi','22 min','green'],
    ['Sun, 9:00 AM',        'Morning Walk Loop',   '2.1 mi','48 min','amber'],
    ['Sat, 11:00 AM',       'Home → Grocery',      '1.4 mi','35 min','green'],
  ];

  return '<div class="panel active">'
    + c.pageHeader('Activity <em>History</em>', "Weekly routes, events, and health summary for Alex.")

    + '<div class="grid-3" style="margin-bottom:22px">'
    +   c.statTile('🗺️', 'Total Distance', '8.4 mi', 'This week', '')
    +   c.statTile('🛡️', 'Falls Detected', '0',      'This week', 'green')
    +   c.statTile('🔔', 'Alerts Sent',    '3',      'This week', 'gold')
    + '</div>'

    + '<div class="card">'
    +   '<div class="card-header">'
    +     '<div class="card-title"><span class="card-title-mark mark-teal"></span>Route Log</div>'
    +     '<select class="form-select" style="width:auto;padding:7px 14px;font-size:0.78rem">'
    +       '<option>This Week</option><option>Last Week</option><option>This Month</option>'
    +     '</select>'
    +   '</div>'
    +   '<table class="data-table">'
    +     '<thead><tr><th>Date &amp; Time</th><th>Route</th><th>Distance</th><th>Duration</th><th>Status</th></tr></thead>'
    +     '<tbody>'
    +     routes.map(function (r) {
            return '<tr>'
              + '<td class="muted">' + r[0] + '</td>'
              + '<td>' + r[1] + '</td>'
              + '<td class="muted">' + r[2] + '</td>'
              + '<td class="muted">' + r[3] + '</td>'
              + '<td><span class="badge badge-' + r[4] + '">' + (r[4] === 'green' ? 'Safe' : 'Review') + '</span></td>'
              + '</tr>';
          }).join('')
    +     '</tbody>'
    +   '</table>'
    + '</div>'

    + '<div class="card">'
    +   '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>Export Reports</div></div>'
    +   '<p style="font-size:0.84rem;color:var(--muted);font-weight:300;margin-bottom:20px;line-height:1.7">'
    +     'Download and share activity reports with healthcare providers or for personal records.'
    +   '</p>'
    +   '<div class="btn-row">'
    +     '<button class="btn btn-ghost" onclick="toast(\'📄 Preparing PDF report…\')">PDF Report</button>'
    +     '<button class="btn btn-ghost" onclick="toast(\'📊 Preparing CSV export…\')">CSV Export</button>'
    +     '<button class="btn btn-gold"  onclick="toast(\'📧 Report emailed to Dr. Rivera\')">Email to Doctor</button>'
    +   '</div>'
    + '</div>'

    + '</div>';
};
