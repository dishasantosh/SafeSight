/* ════════════════════════════════════════════════════
   SafeSight · js/router.js
   Navigation config, panel routing, sidebar, toggles
   ════════════════════════════════════════════════════ */

window.SS = window.SS || {};

window.SS.router = (function () {

  var NAV = {
    user: [
      { id: 'u-home',          icon: '◈', label: 'Dashboard'          },
      { id: 'u-howto',         icon: '📖', label: 'How to Use Glasses' },
      { id: 'u-setup',         icon: '⌁', label: 'Glasses Setup'      },
      { id: 'u-navigation',    icon: '◎', label: 'Navigation'         },
      { id: 'u-safety',        icon: '⬡', label: 'Safety Settings'    },
      { id: 'u-contacts',      icon: '◷', label: 'Emergency Contacts' },
      { id: 'u-accessibility', icon: '◉', label: 'Accessibility'      },
    ],
    caregiver: [
      { id: 'c-home',      icon: '◈', label: 'Dashboard'        },
      { id: 'c-tracking',  icon: '◎', label: 'Live Tracking'    },
      { id: 'c-alerts',    icon: '⬡', label: 'Alerts'           },
      { id: 'c-safezones', icon: '⌁', label: 'Safe Zones'       },
      { id: 'c-history',   icon: '◷', label: 'Activity History' },
      { id: 'c-settings',  icon: '◉', label: 'Settings'         },
    ]
  };

  function buildSidebar(role) {
    var sb = document.getElementById('sidebar');
    sb.innerHTML = '<div class="nav-section">Navigation</div>';
    NAV[role].forEach(function (item) {
      var el = document.createElement('div');
      el.className = 'nav-item';
      el.id = 'nav-' + item.id;
      el.innerHTML = '<span class="nav-icon">' + item.icon + '</span>' + item.label;
      el.onclick = function () { showPanel(item.id); };
      sb.appendChild(el);
    });
  }

  function showPanel(id) {
    var role = window.SS.app.role;
    document.querySelectorAll('.nav-item').forEach(function (n) {
      n.classList.remove('active', 'teal-active', 'gold-active');
    });
    var activeEl = document.getElementById('nav-' + id);
    if (activeEl) {
      activeEl.classList.add('active');
      activeEl.classList.add(role === 'user' ? 'teal-active' : 'gold-active');
    }
    var main = document.getElementById('main');
    main.innerHTML = window.SS.panels[id]
      ? window.SS.panels[id]()
      : '<p style="color:var(--muted);padding:40px">Panel not found.</p>';
    bindToggles();
  }

  function bindToggles() {
    document.querySelectorAll('.toggle-switch').forEach(function (sw) {
      sw.onclick = function () {
        sw.classList.toggle('on');
        var row = sw.closest('.toggle-row');
        var lbl = row ? row.querySelector('.toggle-label').textContent : 'Feature';
        window.SS.toast.show(sw.classList.contains('on') ? 'Enabled: ' + lbl : 'Disabled: ' + lbl);
      };
    });
  }

  return { NAV: NAV, buildSidebar: buildSidebar, showPanel: showPanel, bindToggles: bindToggles };
})();

function showPanel(id) { window.SS.router.showPanel(id); }
