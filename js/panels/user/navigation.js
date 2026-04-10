/* ════════════════════════════════════════════════════
   SafeSight · js/panels/user/navigation.js
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['u-navigation'] = function () {
  var c = window.SS.c;

  var favourites = [
    ['🏠', 'Home',         '123 Maple St'],
    ['🏥', 'Dr. Rivera',   '400 Medical Drive'],
    ['☕', 'Corner Café',  '88 Park Avenue'],
    ['🛒', 'Grocery',      '220 Oak Boulevard'],
  ];

  return '<div class="panel active">'
    + c.pageHeader('Audio <em>Navigation</em>', 'Set a destination and begin spoken turn-by-turn guidance.')
    + '<div class="grid-2">'

    /* Left col */
    + '<div>'
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>Plan a Route</div></div>'
    +     '<div class="form-group"><label class="form-label">Starting Point</label><input class="form-input" value="Current Location" type="text"></div>'
    +     '<div class="form-group"><label class="form-label">Destination</label><input class="form-input" id="dest-input" placeholder="Enter an address or place name…" type="text"></div>'
    +     '<div class="form-group"><label class="form-label">Mode of Travel</label>'
    +       '<select class="form-select"><option>Walking</option><option>Public Transit</option><option>Driving</option></select>'
    +     '</div>'
    +     '<div class="btn-row">'
    +       '<button class="btn btn-teal"  onclick="startNav()">◎ &nbsp;Start Navigation</button>'
    +       '<button class="btn btn-ghost" onclick="toast(\'★ Saved to favourites\')">★ &nbsp;Save</button>'
    +     '</div>'
    +   '</div>'

    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>Favourite Places</div></div>'
    +     favourites.map(function (p) {
            return '<div class="toggle-row" style="padding:12px 0">'
              + '<div class="toggle-info">'
              + '<div class="toggle-label">' + p[0] + ' &nbsp;' + p[1] + '</div>'
              + '<div class="toggle-sub">' + p[2] + '</div>'
              + '</div>'
              + '<button class="btn btn-teal btn-sm" onclick="toast(\'◎ Navigating to ' + p[1] + '\')">Go</button>'
              + '</div>';
          }).join('')
    +   '</div>'
    + '</div>'

    /* Right col */
    + '<div>'
    +   '<div class="card">'
    +     '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>Audio Settings</div></div>'
    +     c.toggleRow('Voice Guidance',              'Spoken turn-by-turn directions',                true)
    +     c.toggleRow('Intersection Warnings',       'Alert before every street crossing',            true)
    +     c.toggleRow('Obstacle Detection',          'Warn about objects in path',                    true)
    +     c.toggleRow('Ambient Sound Pass-Through',  'Allow surrounding sounds through speaker',       true)
    +     '<div class="form-group" style="margin-top:20px"><label class="form-label">Voice Speed</label>'
    +       '<input type="range" min="0.5" max="2" step="0.1" value="1">'
    +       '<div class="range-labels"><span>Slow</span><span>Normal</span><span>Fast</span></div>'
    +     '</div>'
    +     '<div class="form-group"><label class="form-label">Volume</label>'
    +       '<input type="range" min="0" max="100" value="72">'
    +       '<div class="range-labels"><span>Quiet</span><span></span><span>Loud</span></div>'
    +     '</div>'
    +     '<div class="form-group"><label class="form-label">Voice Language</label>'
    +       '<select class="form-select"><option>English (US)</option><option>English (UK)</option><option>Spanish</option><option>French</option><option>Mandarin</option></select>'
    +     '</div>'
    +   '</div>'
    + '</div>'

    + '</div></div>';
};
