// Zoe Scott 10/1/2025
// Adapted from https://javascript30.com/ - Whack A Mole Game

  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const cats = document.querySelectorAll('.cat'); // Replaced every instance of "mole" with "cat"
  let lastHole;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log('Ah nah thats the same one bud');
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(500, 1500); // Changed min and max time from (200, 1000) --> (500, 1500)
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 30000) // Changed game length to 30 seconds instead of 10 because I felt it was too short
  }

	const banjo = document.getElementById("banjo"); // Added banjo variable
	const duration = 2000; // Added duration variable to be for 2 seconds
  function bonk(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
	
/* Added timeout function to only play 2 seconds of a 6 second long audio file because there was 4 seconds of an awkward pause I wanted to exclude so you could hear the sound effect in closer succession when "bonking" each cat. */
	banjo.currentTime = 0; // Reset to start before playing
	banjo.play();

  setTimeout(() => {
    banjo.pause();
    banjo.currentTime = 0; // Reset again after pause
  }, duration);
  };

  cats.forEach(cat => cat.addEventListener('click', bonk));
