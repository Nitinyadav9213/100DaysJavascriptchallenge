
      let randomnumber = parseInt(Math.random() * 50 + 1);
      const Submit = document.querySelector("#subt");
      const userinput = document.querySelector("#guessField");
      const remaining = document.querySelector(".lastResult");
      const loworhi = document.querySelector(".loworHi");
      const startover = document.querySelector(".resultpass");
      const p = document.querySelector("p");

      let numguess = 1;

      let playgame = true;
      let guess;
      if (playgame) {
        Submit.addEventListener("click", (e) => {
          e.preventDefault();
          guess = parseInt(userinput.value);

          validateguess(guess);
        });
      }

      function validateguess(guess) {
        if (isNaN(guess)) {
          alert("please enter a valid number");
        } else if (guess < 1) {
          alert("Number greater then 1");
        } else if (guess > 50) {
          alert("Number less then 50");
        } else {
          if (numguess === 11) {
            displayguess(guess);
            displaymessage(`Game over ! random number was ${randomnumber}`);
            endgame();
          } else {
            displayguess();
            checkguess(guess);
          }
        }
      }

      function checkguess(guess) {
        if (guess === randomnumber) {
          displaymessage(`You guesses it right`);
          endgame();
        } else if (guess < randomnumber) {
          displaymessage(`Num is Too Low`);
        } else if (guess > randomnumber) {
          displaymessage(`Number is Too High`);
        }
      }

      function displayguess(guess) {
        userinput.value = "";
        numguess++;
        remaining.innerHTML = `${11 - numguess}`;
      }

      function displaymessage(message) {
        loworhi.innerHTML = `<h5>${message}</h5>`;
      }

      function endgame() {
        userinput.value = "";
        userinput.setAttribute(`disabled`, "");
        p.classList.add("button");
        p.innerHTML = `<h2 id = "newgame"> Start new game</h2>`;
        startover.appendChild(p);
        playgame = false;
        newgame();
      }

      function newgame() {
        const newgamebutton = document.querySelector("#newgame");
        newgamebutton.addEventListener("click", function (e) {
          randomnumber = parseInt(Math.random() * 50 + 1);
          numguess = 1;
          guessslot.innerHTML = "";
          remaining.innerHTML = `${11 - numguess}`;
          userinput.removeAttribute("disabled");
          startover.removeChild(p);
          playgame = true;
        });
      }
   