const leftImgs  = document.querySelectorAll('.left .hero-img');
const rightImgs = document.querySelectorAll('.right .hero-img');
const dynamicText = document.querySelector('.hero-dynamic-text');

// Messages for each image pair
const heroMessages = [
  "Componentes eléctricos y electrónicos",
  "Automatización y control industrial",
  "Soluciones mecánicas y motorizadas"
  // Add more if you have more image pairs
];

let i = 0;
const DURATION = 4000; // must match your CSS animations (4s)

function swapPair() {
  leftImgs[i].classList.remove('active');
  rightImgs[i].classList.remove('active');

  i = (i + 1) % leftImgs.length;

  leftImgs[i].classList.add('active');
  rightImgs[i].classList.add('active');

  // Update dynamic text
  if (dynamicText) {
    dynamicText.textContent = heroMessages[i] || "";
  }
}

// start with first pair visible and message
leftImgs[0]?.classList.add('active');
rightImgs[0]?.classList.add('active');
if (dynamicText) dynamicText.textContent = heroMessages[0] || "";

// change pair and message at the same interval
setInterval(swapPair, DURATION);
