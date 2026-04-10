/* SafeSight · js/panels/user/howto.js */
window.SS = window.SS || {};
window.SS.panels = window.SS.panels || {};

window.SS.panels['u-howto'] = function () {
  var c = window.SS.c;

  function guideCard(icon, title, color, steps) {
    return '<div class="card">'
      + '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-' + color + '"></span>'
      + icon + ' &nbsp;' + title + '</div></div>'
      + steps.map(function (s, i) {
          return '<div class="step-item" style="animation-delay:' + (i * 0.08) + 's">'
            + '<div class="step-num">' + (i + 1) + '</div>'
            + '<div class="step-content">'
            + '<div class="step-title">' + s[0] + '</div>'
            + '<div class="step-desc">' + s[1] + '</div>'
            + '</div></div>';
        }).join('')
      + '</div>';
  }

  function gestureRow(gesture, action, detail) {
    return '<div class="toggle-row">'
      + '<div class="toggle-info">'
      + '<div class="toggle-label">'
      + '<span style="font-family:\'Cormorant Garamond\',serif;font-size:1.05rem;color:var(--teal);margin-right:8px">' + gesture + '</span>'
      + action + '</div>'
      + '<div class="toggle-sub">' + detail + '</div>'
      + '</div></div>';
  }

  return '<div class="panel active">'
    + c.pageHeader('How to Use Your <em>Glasses</em>', 'Complete guide to getting started with SafeSight.')

    /* Quick-start hero — always dark bg for readability */
    + '<div class="device-hero" style="margin-bottom:28px">'
    + '<svg width="110" height="48" viewBox="0 0 200 70" fill="none">'
    + '<rect x="10" y="22" width="72" height="32" rx="12" stroke="rgba(123,189,208,0.7)" stroke-width="3"/>'
    + '<rect x="118" y="22" width="72" height="32" rx="12" stroke="rgba(123,189,208,0.7)" stroke-width="3"/>'
    + '<path d="M82 38H118" stroke="rgba(123,189,208,0.6)" stroke-width="3" stroke-linecap="round"/>'
    + '<path d="M10 36Q4 36 2 32" stroke="rgba(123,189,208,0.3)" stroke-width="2.5" stroke-linecap="round"/>'
    + '<path d="M190 36Q196 36 198 32" stroke="rgba(123,189,208,0.3)" stroke-width="2.5" stroke-linecap="round"/>'
    + '<circle cx="46" cy="38" r="9" fill="rgba(74,155,184,0.4)"/>'
    + '<circle cx="154" cy="38" r="9" fill="rgba(74,155,184,0.4)"/>'
    + '<circle cx="46" cy="38" r="4" fill="rgba(74,155,184,0.8)"/>'
    + '<circle cx="154" cy="38" r="4" fill="rgba(74,155,184,0.8)"/>'
    + '</svg>'
    + '<div class="device-text">'
    + '<div class="device-name">Quick Start</div>'
    + '<div class="device-fw" style="margin-top:8px;line-height:1.75;font-size:.84rem;color:rgba(232,226,216,0.75)">'
    + 'Charge for 2 hours before first use. Hold the right temple button for 3 seconds to power on. '
    + 'A soft chime confirms the glasses are active and GPS is connected.'
    + '</div>'
    + '<div style="margin-top:18px">'
    + '<button class="btn btn-teal" onclick="showPanel(\'u-setup\')" style="background:rgba(74,155,184,0.25);color:#7BBDD0;border-color:rgba(74,155,184,0.4)">⌁ &nbsp;Open Setup Wizard</button>'
    + '</div>'
    + '</div>'
    + '</div>'

    + '<div class="grid-2">'

    /* Left column */
    + '<div>'
    + guideCard('🔋', 'Charging & Power', 'teal', [
        ['Charge via USB-C', 'Connect the included cable to the port on the right temple. Amber LED = charging, green = full.'],
        ['Power on', 'Hold right temple button 3 seconds. A chime and short vibration confirm power-on.'],
        ['Power off', 'Hold right temple button 5 seconds until you hear two descending tones.'],
        ['Check battery', 'Single-tap right temple — the glasses announce battery percentage aloud.'],
      ])

    + guideCard('🧭', 'Navigation', 'teal', [
        ['Open the SafeSight app', 'Tap "Start Navigation" on your dashboard, or say your destination aloud.'],
        ['Confirm destination', 'Glasses announce route distance and time before starting.'],
        ['Follow audio cues', 'Turn instructions are spoken 30 ft in advance through the glasses speaker.'],
        ['Arrive & end', 'Two chimes and "You have arrived" signals your destination.'],
      ])
    + '</div>'

    /* Right column */
    + '<div>'
    + guideCard('📷', 'Object & Text Recognition', 'gold', [
        ['Look at the object', 'Aim your gaze at a food label, sign, or document and hold still for 1 second.'],
        ['Double-tap left temple', 'AI reads text or identifies the object aloud within 2 seconds.'],
        ['Nutrition labels', 'Point at any nutrition panel and double-tap to hear calories, nutrients, and allergens.'],
        ['Currency', 'Hold a banknote in front of you and double-tap to hear the denomination.'],
      ])

    + '<div class="card">'
    + '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-teal"></span>👆 &nbsp;Frame Gestures</div></div>'
    + gestureRow('1× right', 'Announce battery level', 'Quick status check without opening the app')
    + gestureRow('2× right', 'Send SOS alert', 'Alerts your caregiver with your GPS location instantly')
    + gestureRow('3× right', 'Read surroundings', 'AI describes objects and scene around you')
    + gestureRow('Hold right', 'Call primary contact', 'Initiates a phone call to your caregiver')
    + gestureRow('2× left', 'Capture & read text', 'Object recognition and OCR on whatever you are looking at')
    + gestureRow('Hold left', 'Toggle audio guidance', 'Mute or unmute navigation voice')
    + '</div>'

    + guideCard('🛡️', 'Emergency & Safety', 'gold', [
        ['SOS alert', 'Double-tap right temple. Caregiver receives push + SMS with exact GPS in 10 seconds.'],
        ['Fall detection', 'Impact + 15 seconds no movement = automatic alert. Tap once to cancel if you are fine.'],
        ['Safe zone exit', 'Walking outside a defined zone vibrates the glasses and notifies your caregiver.'],
        ['Low battery', 'At 20% the glasses announce the level. At 10% a caregiver notification is sent.'],
      ])
    + '</div>'

    + '</div>'

    /* Care tips */
    + '<div class="card" style="margin-top:4px">'
    + '<div class="card-header"><div class="card-title"><span class="card-title-mark mark-gold"></span>🧼 &nbsp;Care & Maintenance</div></div>'
    + '<div class="grid-3">'
    + [
        ['Clean lenses weekly', 'Use the included microfibre cloth. Never use paper towels or household cleaners — they scratch the lens coating.'],
        ['Splash-resistant only', 'SafeSight Gen 1 is splash-resistant, not waterproof. Remove before showering, swimming, or heavy rain.'],
        ['Store in case', 'Always return glasses to their hard case when not in use to protect the camera lens and frame sensors.'],
      ].map(function (t) {
          return '<div style="padding:18px;background:var(--navy-raised);border:1px solid var(--navy-border);border-radius:var(--r-md);transition:transform .2s" onmouseenter="this.style.transform=\'translateY(-2px)\'" onmouseleave="this.style.transform=\'none\'">'
            + '<div style="font-size:.88rem;font-weight:500;color:var(--cream);margin-bottom:8px">' + t[0] + '</div>'
            + '<div style="font-size:.79rem;color:var(--muted);font-weight:300;line-height:1.7">' + t[1] + '</div>'
            + '</div>';
        }).join('')
    + '</div>'
    + '</div>'

    + '</div>';
};
