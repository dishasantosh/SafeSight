/* ════════════════════════════════════════════════════
   SafeSight · js/panels/user/contacts.js
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['u-contacts'] = function () {
  var c = window.SS.c;

  var contacts = [
    { name: 'Sarah Johnson',    rel: 'Daughter · Primary Caregiver', ico: '👩',    bg: 'rgba(74,155,184,0.15)'  },
    { name: 'Dr. Marcus Rivera',rel: 'Physician',                    ico: '👨‍⚕️', bg: 'rgba(91,173,138,0.15)'  },
    { name: 'Tom Johnson',      rel: 'Son',                          ico: '👦',    bg: 'rgba(201,169,110,0.15)' },
  ];

  return '<div class="panel active">'
    + c.pageHeader('Emergency <em>Contacts</em>', 'Manage who receives safety alerts on your behalf.')
    + '<div class="grid-2">'

    /* Left */
    + '<div>'
    +   '<div class="card">'
    +     '<div class="card-header">'
    +       '<div class="card-title"><span class="card-title-mark mark-teal"></span>Primary Caregiver</div>'
    +       '<span class="badge badge-teal">Primary</span>'
    +     '</div>'
    +     '<div class="form-group"><label class="form-label">Full Name</label><input class="form-input" value="Sarah Johnson" type="text"></div>'
    +     '<div class="form-row">'
    +       '<div class="form-group"><label class="form-label">Relationship</label><input class="form-input" value="Daughter" type="text"></div>'
    +       '<div class="form-group"><label class="form-label">Phone</label><input class="form-input" value="(206) 555-0182" type="tel"></div>'
    +     '</div>'
    +     '<div class="form-group"><label class="form-label">Email</label><input class="form-input" value="sarah.johnson@email.com" type="email"></div>'
    +     '<button class="btn btn-teal btn-sm" onclick="toast(\'✓ Primary contact updated\')">Save</button>'
    +   '</div>'

    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>Alert Delivery</div></div>'
    +     c.toggleRow('SMS Alerts',        'Text message for all safety incidents',         true)
    +     c.toggleRow('Push Notifications','App alerts to caregiver device',               true)
    +     c.toggleRow('Auto-Call on SOS',  'Call primary contact when SOS is triggered',   true)
    +     c.toggleRow('Email Summaries',   'Daily activity digest via email',              false)
    +   '</div>'
    + '</div>'

    /* Right */
    + '<div>'
    +   '<div class="card">'
    +     '<div class="card-header">'
    +       '<div class="card-title"><span class="card-title-mark mark-teal"></span>All Contacts</div>'
    +       '<button class="btn btn-ghost btn-sm" onclick="toast(\'+ Add contact form\')">+ Add</button>'
    +     '</div>'
    +     contacts.map(function (ct) {
            return c.contactRow(ct.name, ct.rel, ct.ico, ct.bg, true);
          }).join('')
    +   '</div>'
    + '</div>'

    + '</div></div>';
};
