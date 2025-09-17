// Zoe Scott 9/17/2025
// Adapted from https://javascript30.com/ - JavaScript Drum Kit

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  
	// Added function to switch background image based off different key presses to match the bird sound with image of bird
  document.addEventListener('keydown', function(e) {
  const body = document.getElementById('image');
  switch(e.key) {
    case 'a':
      body.style.backgroundImage = "url('albatross.png')";	// https://freesvg.org/albatross
      break;
    case 's':
      body.style.backgroundImage = "url('starling.png')"; // https://freesvg.org/starsw
      break;
	case 'd':
		body.style.backgroundImage = "url('duck.png')"; // https://freesvg.org/black-and-white-duck
	  break;
	case 'f':
		body.style.backgroundImage = "url('flicker.png')"; // https://freesvg.org/flicker-image
	  break;
	case 'g':
		body.style.backgroundImage = "url('goose.png')"; // https://freesvg.org/goose-136991
	  break;
	case 'h':
		body.style.backgroundImage = "url('heron.png')"; // https://freesvg.org/heron-color-graphics
	  break;
	case 'j':
		body.style.backgroundImage = "url('jay.png')"; // https://freesvg.org/image-of-blue-jay
	  break;
	case 'k':
		body.style.backgroundImage = "url('killdeer.png')"; // https://freesvg.org/killdeer
	  break;
	case 'l':
		body.style.backgroundImage = "url('lark.png')"; // https://freesvg.org/meadow-lark-vector-drawing
	  break;
  }
});
