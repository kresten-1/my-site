// machine.js — a switch that switches itself off
const button = document.getElementById('switch');
const flips = document.getElementById('flips');
const escapes = document.getElementById('escapes');

let count = 0;
let jumps = 0;

function startAgain() {
  count = 0;
  jumps = 0;
  flips.textContent = count;
  escapes.textContent = jumps;
  button.style.left = '45%';
  button.style.top = '45%';
}

button.addEventListener('click', function () {
  count = count + 1;
  flips.textContent = count;

  // every third flip the switch jumps somewhere else inside the box
  if (count % 3 === 0) {
    jumps = jumps + 1;
    escapes.textContent = jumps;
    button.style.left = Math.random() * 60 + '%';
    button.style.top = Math.random() * 50 + '%';
  }
});

document.getElementById('reset').addEventListener('click', startAgain);
