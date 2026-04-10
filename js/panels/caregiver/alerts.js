/* ════════════════════════════════════════════════════
   SafeSight · js/panels/caregiver/alerts.js
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['c-alerts'] = function () {
  var c = window.SS.c;

  return '<div class="panel active">'
    + c.pageHeader('<em>Alerts</em>', "All safety notifications and events for Alex.")

    + '<div class="card">'
    +   '<div class="card-header">'
    +     '<div class="card-title"><span class="card-title-mark mark-gold"></span>Today</div>'
    +     '<select class="form-select" style="width:auto;padding:7px 14px;font-size:0.78rem">'
    +       '<option>All Alerts</option><option>Falls</option><option>Location</option><option>Battery</option>'
    +     '</select>'
    +   '</div>'
    +   c.alertItems([
          { ico:'🟢', title:'Safe Zone Entered',  desc:'Alex returned to the home safe zone boundary',             time:'9:42 AM', c:'green' },
          { ico:'🚶', title:'Walk Started',        desc:'Alex left home heading north on Maple Street',            time:'9:15 AM', c:'teal'  },
          { ico:'🔋', title:'Battery Low',         desc:'Glasses battery reached 20%, charged shortly after',      time:'8:30 AM', c:'amber' },
          { ico:'🟢', title:'Morning Check-in',    desc:'Glasses powered on, GPS and fall detection active',       time:'8:05 AM', c:'green' },
        ])
    + '</div>'

    + '<div class="section-sep">Yesterday</div>'

    + '<div class="card">'
    +   c.alertItems([
          { ico:'⚠️',  title:'Safe Zone Exit',         desc:'Alex walked 0.4 mi beyond the home safe zone boundary',                           time:'3:18 PM', c:'amber' },
          { ico:'🛡️',  title:'Fall Alert — Resolved',  desc:'Possible fall detected; Alex confirmed safe via SOS cancel within 12 seconds',    time:'1:44 PM', c:'red'   },
          { ico:'🟢',  title:'Arrived at Destination', desc:"Reached Dr. Rivera's office at 400 Medical Drive",                                time:'10:02 AM',c:'green' },
          { ico:'🚶',  title:'Walk Started',            desc:'Left home heading south toward Medical District',                                  time:'9:48 AM', c:'teal'  },
        ])
    + '</div>'

    + '</div>';
};
