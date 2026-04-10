/* ════════════════════════════════════════════════════
   SafeSight · js/components.js
   Shared HTML builder functions used across all panels
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};

window.SS.c = {

  /* ── Page header ───────────────────────────────── */
  pageHeader: function (title, sub) {
    return '<div class="page-header">'
      + '<div class="page-title">' + title + '</div>'
      + '<div class="page-sub">' + sub + '</div>'
      + '<div class="page-divider"></div>'
      + '</div>';
  },

  /* ── Stat tile ─────────────────────────────────── */
  statTile: function (emoji, label, value, sub, cls) {
    return '<div class="stat-tile">'
      + '<span class="stat-emoji">' + emoji + '</span>'
      + '<div class="stat-label">' + label + '</div>'
      + '<div class="stat-value ' + (cls || '') + '">' + value + '</div>'
      + '<div class="stat-sub">' + sub + '</div>'
      + '</div>';
  },

  /* ── Toggle row ────────────────────────────────── */
  toggleRow: function (label, sub, on, color) {
    on    = (on !== false);
    color = color || 'teal';
    return '<div class="toggle-row">'
      + '<div class="toggle-info">'
      + '<div class="toggle-label">' + label + '</div>'
      + (sub ? '<div class="toggle-sub">' + sub + '</div>' : '')
      + '</div>'
      + '<div class="toggle-switch ' + (on ? 'on ' + color : '') + '"></div>'
      + '</div>';
  },

  /* ── Key-value row ─────────────────────────────── */
  kvRow: function (label, value) {
    return '<div class="kv-row">'
      + '<div class="kv-label">' + label + '</div>'
      + '<div class="kv-value">' + value + '</div>'
      + '</div>';
  },

  /* ── Alert item list ───────────────────────────── */
  alertItems: function (items) {
    var colorMap = { green: 'ai-green', amber: 'ai-amber', red: 'ai-red', teal: 'ai-teal' };
    return items.map(function (a) {
      return '<div class="alert-item">'
        + '<div class="alert-icon-wrap ' + (colorMap[a.c] || 'ai-teal') + '">' + a.ico + '</div>'
        + '<div class="alert-body">'
        + '<div class="alert-title">' + a.title + '</div>'
        + '<div class="alert-desc">' + a.desc + '</div>'
        + '</div>'
        + '<div class="alert-time">' + a.time + '</div>'
        + '</div>';
    }).join('');
  },

  /* ── Contact row ───────────────────────────────── */
  contactRow: function (name, rel, ico, bg, editable) {
    var actions = editable !== false
      ? '<div class="contact-actions">'
        + '<button class="btn btn-ghost btn-sm" onclick="toast(\'Editing ' + name + '\')">Edit</button>'
        + '<button class="btn btn-danger btn-sm" onclick="toast(\'Removed ' + name + '\')">✕</button>'
        + '</div>'
      : '';
    return '<div class="contact-row">'
      + '<div class="contact-avatar" style="background:' + bg + '">' + ico + '</div>'
      + '<div><div class="contact-name">' + name + '</div>'
      + '<div class="contact-rel">' + rel + '</div></div>'
      + actions
      + '</div>';
  },

  /* ── Map mockup ────────────────────────────────── */
  map: function (heightClass) {
    heightClass = heightClass || 'h-280';
    return '<div class="map-wrap ' + heightClass + '">'
      + '<div class="map-bg-layer"></div>'
      + '<div class="map-road h" style="top:42%"></div>'
      + '<div class="map-road h" style="top:65%"></div>'
      + '<div class="map-road v" style="left:28%"></div>'
      + '<div class="map-road v" style="left:58%"></div>'
      + '<div class="map-block" style="top:8%;left:4%;width:21%;height:28%"></div>'
      + '<div class="map-block" style="top:8%;left:32%;width:22%;height:28%"></div>'
      + '<div class="map-block" style="top:8%;left:62%;width:30%;height:28%"></div>'
      + '<div class="map-block" style="top:48%;left:4%;width:21%;height:18%"></div>'
      + '<div class="map-block" style="top:48%;left:32%;width:22%;height:18%"></div>'
      + '<div class="map-block" style="top:72%;left:4%;width:21%;height:22%"></div>'
      + '<div class="map-block" style="top:72%;left:62%;width:30%;height:22%"></div>'
      + '<div class="map-safe-zone" style="width:130px;height:130px;top:calc(42% - 65px);left:calc(28% - 65px)"></div>'
      + '<div class="map-user-pin"  style="top:calc(42% - 7px);left:calc(28% - 7px)"></div>'
      + '<div class="map-label"     style="top:10%;left:4%">🏠 Home</div>'
      + '<div class="map-label safe" style="top:calc(42% - 38px);left:calc(28% + 22px)">Safe Zone</div>'
      + '<div class="map-label danger" style="top:10%;left:63%">🏥 Urgent Care</div>'
      + '<div class="map-label"     style="bottom:18%;left:33%">☕ Café</div>'
      + '<div class="map-live-badge"><span class="dot-live green"></span>Live</div>'
      + '</div>';
  },

  /* ── Glasses SVG graphic ───────────────────────── */
  glassesSVG: function () {
    return '<svg width="120" height="52" viewBox="0 0 200 70" fill="none">'
      + '<rect x="10" y="22" width="72" height="32" rx="12" stroke="rgba(232,226,216,0.4)" stroke-width="3.5"/>'
      + '<rect x="118" y="22" width="72" height="32" rx="12" stroke="rgba(232,226,216,0.4)" stroke-width="3.5"/>'
      + '<path d="M82 38H118" stroke="rgba(232,226,216,0.35)" stroke-width="3.5" stroke-linecap="round"/>'
      + '<path d="M10 36Q4 36 2 32" stroke="rgba(232,226,216,0.2)" stroke-width="3" stroke-linecap="round"/>'
      + '<path d="M190 36Q196 36 198 32" stroke="rgba(232,226,216,0.2)" stroke-width="3" stroke-linecap="round"/>'
      + '<circle cx="46" cy="38" r="9" fill="rgba(74,155,184,0.35)"/>'
      + '<circle cx="154" cy="38" r="9" fill="rgba(74,155,184,0.35)"/>'
      + '<circle cx="46" cy="38" r="4" fill="rgba(74,155,184,0.65)"/>'
      + '<circle cx="154" cy="38" r="4" fill="rgba(74,155,184,0.65)"/>'
      + '</svg>';
  },

  /* ── Activity block (stat in a box) ────────────── */
  activityBlock: function (value, label, sub) {
    return '<div class="activity-block">'
      + '<div class="activity-block-value">' + value + '</div>'
      + '<div class="activity-block-label">' + label + '</div>'
      + (sub ? '<div class="activity-block-sub">' + sub + '</div>' : '')
      + '</div>';
  },
};
