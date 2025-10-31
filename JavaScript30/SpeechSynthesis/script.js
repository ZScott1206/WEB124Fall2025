// Zoe Scott, 10/22/25 - 10/30/25
/* Adapted from https://javascript30.com/
	Speech Synthesis */
	
  const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const defaultSettings = {
  rate: 1,
  pitch: 1,
  text: "Hello! I love JavaScript 👍",
  voice: ""
}; // Added variable for the default speech settings
  const resetButton = document.querySelector('#reset'); // Added variable for reset button
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  msg.text = document.querySelector('[name="text"]').value;

  function populateVoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en'))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }

  function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
  }

  function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }

  function setOption() {
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
  }
  
  function resetSettings () {
	document.querySelector('[name="rate"]').value = defaultSettings.rate;
	document.querySelector('[name="pitch"]').value = defaultSettings.pitch;
	document.querySelector('[name="text"]').value = defaultSettings.text;
	voicesDropdown.value = defaultSettings.voice;
	
	msg.rate = defaultSettings.rate;
	msg.pitch = defaultSettings.pitch;
	msg.text = defaultSettings.text;
	msg.voice = null;
  } // Added function that resets speech settings to the defaults

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOption));
  speakButton.addEventListener('click', toggle);
  stopButton.addEventListener('click', () => toggle(false));

resetButton.addEventListener('click', resetSettings); // Applied new function to the reset button event of "click"
