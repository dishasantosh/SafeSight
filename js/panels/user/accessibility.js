/* ════════════════════════════════════════════════════
   SafeSight · js/panels/user/accessibility.js
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['u-accessibility'] = function () {
  var c = window.SS.c;

  var gestures = [
    ['Single Tap',  'Toggle audio guidance'],
    ['Double Tap',  'Send SOS alert'],
    ['Triple Tap',  'Read surroundings aloud'],
    ['Long Press',  'Call primary contact'],
  ];

  return '<div class="panel active">'
    + c.pageHeader('<em>Accessibility</em>', 'Personalise the app and glasses experience for your needs.')
    + '<div class="grid-2">'

    + '<div>'
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>Display</div></div>'
    +     '<div class="form-group"><label class="form-label">App Font Size</label>'
    +       '<input type="range" min="1" max="5" value="3">'
    +       '<div class="range-labels"><span>Small</span><span>Default</span><span>Large</span></div>'
    +     '</div>'
    +     c.toggleRow('High Contrast Mode', 'Increase colour contrast throughout the app', false)
    +     c.toggleRow('Reduce Motion',      'Minimise animations and transitions',          false)
    +     c.toggleRow('Bold Text',          'Increase font weight for readability',         false)
    +   '</div>'

    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>Frame Gestures</div></div>'
    +     gestures.map(function (g) {
            return '<div class="toggle-row">'
              + '<div class="toggle-info">'
              + '<div class="toggle-label">' + g[0] + '</div>'
              + '<div class="toggle-sub">'   + g[1] + '</div>'
              + '</div>'
              + '<button class="btn btn-ghost btn-sm" onclick="toast(\'Customising: ' + g[0] + '\')">Edit</button>'
              + '</div>';
          }).join('')
    +   '</div>'
    + '</div>'

    + '<div>'
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>Audio & Haptic</div></div>'
    +     c.toggleRow('Screen Reader Compatible', 'Optimised for VoiceOver and TalkBack',            true)
    +     c.toggleRow('Haptic Feedback',          'Vibrate glasses frame at key moments',             true)
    +     c.toggleRow('Audio Descriptions',       'Narrate environment through glasses speaker',      true)
    +     c.toggleRow('Earcon Sounds',            'Distinctive tones for different alert types',      false)
    +     '<div class="form-group" style="margin-top:18px"><label class="form-label">Voice Language</label>'
    +       '<select class="form-select"><option>English (US)</option><option>English (UK)</option>'
    +         '<option>Spanish</option><option>French</option><option>Mandarin</option><option>Japanese</option>'
    +       '</select>'
    +     '</div>'
    +   '</div>'
    +   '<button class="btn btn-teal" onclick="toast(\'✓ Accessibility preferences saved\')">Save Preferences</button>'
    + '</div>'

    + '</div></div>';
};
