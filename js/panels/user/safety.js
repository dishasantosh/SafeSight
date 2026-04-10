/* ════════════════════════════════════════════════════
   SafeSight · js/panels/user/safety.js
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['u-safety'] = function () {
  var c = window.SS.c;

  return '<div class="panel active">'
    + c.pageHeader('Safety <em>Settings</em>', 'Configure fall detection, alerts, and object recognition.')
    + '<div class="grid-2">'

    + '<div>'
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>Core Safety</div>'
    +       '<span class="badge badge-green"><span class="dot-live green"></span>All Active</span>'
    +     '</div>'
    +     c.toggleRow('Fall Detection',       'Automatically alert caregiver if a fall is detected', true)
    +     c.toggleRow('Safe Zone Monitoring', 'Notify caregiver when leaving defined zones',         true)
    +     c.toggleRow('SOS Gesture',          'Double-tap glasses frame to send emergency alert',    true)
    +     c.toggleRow('Intersection Warning', 'Heightened alert at road crossings',                  true)
    +     c.toggleRow('Vehicle Detection',    'Warn when cars or bikes are detected nearby',         true)
    +   '</div>'

    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>Alert Behaviour</div></div>'
    +     '<div class="form-group"><label class="form-label">Fall Sensitivity</label>'
    +       '<input type="range" min="1" max="5" value="4">'
    +       '<div class="range-labels"><span>Low</span><span>Medium</span><span>High</span></div>'
    +     '</div>'
    +     '<div class="form-group"><label class="form-label">Alert Response Delay</label>'
    +       '<select class="form-select"><option>15 seconds (recommended)</option><option>30 seconds</option><option>Immediate</option></select>'
    +     '</div>'
    +     c.toggleRow('Cancellation Window', 'Allow alert cancellation before it is sent', true)
    +   '</div>'
    + '</div>'

    + '<div>'
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>Object Recognition</div></div>'
    +     c.toggleRow('Nutrition Label Reading', 'Read food labels and ingredients aloud',      true)
    +     c.toggleRow('Text & Sign Recognition', 'Read printed text, menus, and signage',       true)
    +     c.toggleRow('Face Recognition',        'Identify saved contacts by appearance',       false)
    +     c.toggleRow('Currency Identification', 'Identify banknotes and coins',                true)
    +     c.toggleRow('Colour Description',      'Describe colours of objects on request',      false)
    +   '</div>'

    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>Health Monitoring</div></div>'
    +     c.toggleRow('Step Counter',          'Track daily step count via motion sensor',        true)
    +     c.toggleRow('Activity Detection',    'Distinguish walking, standing, and sitting',      true)
    +     c.toggleRow('Stillness Alert',       'Alert if no movement detected for 30+ minutes',  false)
    +   '</div>'

    +   '<button class="btn btn-teal" onclick="toast(\'✓ Safety settings saved\')">Save All Settings</button>'
    + '</div>'

    + '</div></div>';
};
