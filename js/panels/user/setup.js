/* ════════════════════════════════════════════════════
   SafeSight · js/panels/user/setup.js
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['u-setup'] = function () {
  var c = window.SS.c;

  function step(num, done, title, desc, action) {
    return '<div class="step-item">'
      + '<div class="step-num' + (done ? ' done' : '') + '">' + (done ? '✓' : num) + '</div>'
      + '<div class="step-content">'
      + '<div class="step-title">' + title + '</div>'
      + '<div class="step-desc">'  + desc  + '</div>'
      + '<div class="step-action">' + action + '</div>'
      + '</div></div>';
  }

  return '<div class="panel active">'
    + c.pageHeader('Glasses <em>Setup</em>', 'Configure and pair your SafeSight glasses step by step.')
    + '<div class="grid-2">'

    /* Left — checklist */
    + '<div>'
    +   '<div class="card">'
    +     '<div class="card-header">'
    +       '<div class="card-title"><span class="card-title-mark mark-teal"></span>Setup Checklist</div>'
    +       '<span class="badge badge-teal">2 / 5 Done</span>'
    +     '</div>'
    +     step(1, true, 'Bluetooth Pairing',
            'SafeSight Gen 1 paired successfully to this device.',
            '<span class="badge badge-green"><span class="dot-live green"></span>Connected</span>')
    +     step(2, true, 'GPS Calibration',
            'Location services active. Signal quality: excellent.',
            '<span class="badge badge-green">Calibrated</span>')
    +     step(3, false, 'Camera & Object Recognition',
            'Point glasses at a surface and run the AI object recognition test.',
            '<button class="btn btn-teal btn-sm" onclick="toast(\'📷 Object recognition test started…\')">Run Test</button>')
    +     step(4, false, 'Audio Guidance Test',
            'Verify the speaker output through your glasses frame.',
            '<button class="btn btn-teal btn-sm" onclick="toast(\'🔊 Audio: Turn left in 50 feet\')">Play Audio</button>')
    +     step(5, false, 'Fall Detection',
            'Activate automatic fall detection and caregiver alerts.',
            '<button class="btn btn-teal btn-sm" onclick="toast(\'✓ Fall detection activated\')">Activate</button>')
    +   '</div>'
    + '</div>'

    /* Right — device details + lens config */
    + '<div>'
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>Device Details</div></div>'
    +     '<div class="form-group"><label class="form-label">Device Name</label><input class="form-input" value="SafeSight Gen 1" type="text"></div>'
    +     '<div class="form-group"><label class="form-label">User Name</label><input class="form-input" value="Alex Johnson" type="text"></div>'
    +     '<div class="form-group"><label class="form-label">Firmware Version</label><input class="form-input" value="2.1.4 — Up to date" readonly type="text"></div>'
    +     '<div class="btn-row">'
    +       '<button class="btn btn-teal"  onclick="toast(\'✓ Settings saved\')">Save Changes</button>'
    +       '<button class="btn btn-ghost" onclick="toast(\'🔄 Checking for updates…\')">Check Updates</button>'
    +     '</div>'
    +   '</div>'
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>Lens Configuration</div></div>'
    +     c.toggleRow('Auto-Tint in Sunlight',      'Darken lenses in bright conditions', true)
    +     c.toggleRow('Night Vision Enhancement',   'Boost low-light camera sensitivity', false)
    +     c.toggleRow('Heads-Up Display',           'Project minimal guidance overlay',   true)
    +   '</div>'
    + '</div>'

    + '</div></div>';
};
