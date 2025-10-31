// Zoe Scott, 10/30/25
/* Adapted from https://javascript30.com/
	Key Sequence Detection */

      const pressed = [];
     // const secretCode = "wesbos";
	  const secretCode = "jupiter"; // Changed secret code to my cat's name :) 
	  
	  const jupiter = 'url("jupiter.jpeg")';

      window.addEventListener("keyup", (e) => {
        console.log(e.key);
        pressed.push(e.key);
        pressed.splice(
          -secretCode.length - 1,
          pressed.length - secretCode.length
        );
        if (pressed.join("").includes(secretCode)) {
          console.log("DING DING!");
          cornify_add();
		  alert("Correct!"); // Added popup alert for correct code entered
		  document.querySelector("body").style.backgroundImage = 'url("jupiter.jpeg")'; // Changes background to image of jupiter
			document.body.style.backgroundSize = 'cover';
			document.body.style.backgroundRepeat = 'no-repeat';
			document.body.style.backgroundPosition = 'center top';
        }
        console.log(pressed);
      });
	
		// Added a secret event where typing "blue" changes the background to blue, my favorite color.
	  const color = [];
	  const blue = "blue";	 
	  
	  window.addEventListener("keyup", (e) => {
        console.log(e.key);
        color.push(e.key);
        color.splice(
          -blue.length - 1,
          color.length - blue.length
        );
        if (color.join("").includes(blue)) {
        document.querySelector("body").style.backgroundColor = "blue";
        }
        console.log(pressed);
      });	  
