
      let display = document.querySelector(".Timedisplay");
      let stop = document.querySelector(".Stop");
      let start = document.querySelector(".Start");

      stop.addEventListener("click", function (e) {
        clearInterval(Localtime);
      });
      let Localtime;
      start.addEventListener("click", function (e) {
        Localtime = setInterval(() => {
          let Time = new Date();
          display.innerHTML = Time.toLocaleTimeString();
        }, 1000);
      });
    