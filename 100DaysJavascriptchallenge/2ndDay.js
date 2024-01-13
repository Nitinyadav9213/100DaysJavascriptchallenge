// Array Related Question

      // 1. Number Guessing Game

      let number = [1, 2, 3, 4, 5, 6];

      let targetnumber = number[Math.floor(Math.random() * number.length)];

      console.log(`Guessing number is ${targetnumber}`);

      // 2. Color Picker:

      let color = ["red", "black", "white"];

      color.map((colour) => console.log(colour));

      // 3. Simple calculator

      let symbol = ["-", "+", "/", "*"];

      let randomsymbol = symbol[Math.floor(Math.random() * symbol.length)];

      console.log(randomsymbol);

      let number1 = prompt("enter value first");
      let number2 = prompt("enter value second");

      console.log(eval(`${number1} ${randomsymbol} ${number2}`));

      // 4. Day of the week

      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const today = new Date().getDay();
      console.log(daysOfWeek[today]);

      //5. simple question answer name

      const questions = ["Q1", "Q2", "Q3"];
      const answers = [
        ["A1", "A2"],
        ["A3", "A4"],
        ["A5", "A6"],
      ];
      for (let i = 0; i < questions.length; i++) {
        console.log(`Question: ${questions[i]}`);
        console.log(`Answers: ${answers[i].join(", ")}`);
      }
