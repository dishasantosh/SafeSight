/* ════════════════════════════════════════════════════
   SafeSight · js/panels/caregiver/settings.js
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['c-settings'] = function () {
  var c = window.SS.c;

  return '<div class="panel active">'
    + c.pageHeader('Caregiver <em>Settings</em>', "Manage your profile, notifications, and loved one's details.")
    + '<div class="grid-2">'

    /* Left col */
    + '<div>'
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>Your Profile</div></div>'
    +     '<div class="form-row">'
    +       '<div class="form-group"><label class="form-label">Full Name</label><input class="form-input" value="Sarah Johnson" type="text"></div>'
    +       '<div class="form-group"><label class="form-label">Relationship</label><input class="form-input" value="Daughter" type="text"></div>'
    +     '</div>'
    +     '<div class="form-group"><label class="form-label">Phone Number</label><input class="form-input" value="(206) 555-0182" type="tel"></div>'
    +     '<div class="form-group"><label class="form-label">Email Address</label><input class="form-input" value="sarah.johnson@email.com" type="email"></div>'
    +     '<button class="btn btn-gold btn-sm" onclick="toast(\'✓ Profile saved\')">Save Profile</button>'
    +   '</div>'

    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>Notifications</div></div>'
    +     c.toggleRow('Push Notifications', 'Safety alerts sent to your phone',              true,  'gold')
    +     c.toggleRow('SMS Alerts',         'Text messages for all critical events',          true,  'gold')
    +     c.toggleRow('Daily Email Digest', "Summary of Alex's daily activity via email",    false, 'gold')
    +     c.toggleRow('Do Not Disturb',     'Suppress non-critical alerts 10 PM – 7 AM',     true,  'gold')
    +   '</div>'
    + '</div>'

    /* Right col */
    + '<div>'
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>Loved One\'s Details</div></div>'
    +     '<div class="form-group"><label class="form-label">Full Name</label><input class="form-input" value="Alex Johnson" type="text"></div>'
    +     '<div class="form-row">'
    +       '<div class="form-group"><label class="form-label">Date of Birth</label><input class="form-input" value="1948-03-14" type="date"></div>'
    +       '<div class="form-group"><label class="form-label">Diagnosis</label><input class="form-input" value="Glaucoma, age-related" type="text"></div>'
    +     '</div>'
    +     '<div class="form-group"><label class="form-label">Medical Notes</label>'
    +       '<input class="form-input" placeholder="Medications, allergies, or care instructions…" type="text">'
    +     '</div>'
    +     '<button class="btn btn-teal btn-sm" onclick="toast(\'✓ Details saved\')">Save Details</button>'
    +   '</div>'

    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>Account & Security</div></div>'
    +     c.toggleRow('Biometric Login', 'Use Face ID or fingerprint to sign in',        true,  'gold')
    +     c.toggleRow('Auto-Lock',       'Lock app after 5 minutes of inactivity',        true,  'gold')
    +     c.toggleRow('Activity Logs',   'Store 90-day history of all caregiver actions', false, 'gold')
    +     '<div class="btn-row" style="margin-top:16px">'
    +       '<button class="btn btn-ghost  btn-sm" onclick="toast(\'Privacy settings opened\')">Privacy Settings</button>'
    +       '<button class="btn btn-danger btn-sm" onclick="toast(\'Signing out…\')">Sign Out</button>'
    +     '</div>'
    +   '</div>'
    + '</div>'

    + '</div></div>';
};
