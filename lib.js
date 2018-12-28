let lamp = document.getElementById('lamp');
let lampSwitch = document.getElementById('switch');
let switchSound = document.getElementById('sound');

let lampStatus = off;

lampSwitch.addEventListener('click', toggleSwitch);

function toggleSwitch() {
  lampStatus = lampStatus === on ? off : on;

  switchSound.load();
  switchSound.play();

  if (lampStatus === on) {
    lamp.className = 'lampOn';
  } else {
    lamp.className = 'lampOff';
  }
}
