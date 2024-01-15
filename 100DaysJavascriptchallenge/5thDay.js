 // Conditional statement And looping (if else,switch,ternary operator,nullish  ,for,while,dowhile,foreach,for of,for in)

      // Q: Write a simple if-else statement that checks if a variable x is greater than 10 and logs a message accordingly.

      let x = 20;

      if (x > 10) {
        console.log(`${x} is greator than 10`);
      }

      //   Q: Rewrite the above if-else statement using the ternary operator.

      let y = 20;

      console.log(
        y > 10 ? `${y} is greator than 10` : `${y} is smaller than 10`
      );

      // Q: Create a switch statement that checks the value of a variable day and logs a message based on the day.

      let day = "sunday";

      switch (day) {
        case "sunday":
          console.log(` today is holiday due to ${day} `);
          break;

        default:
          console.log("this is default");
      }

      // Q: Explain the use of the nullish coalescing operator (??) and provide an example.

      let data = null;
      let name = "Nitin";

      let nullish = data ?? name;

      console.log(nullish);

      // Q: Write a for loop that iterates table from 1 to 5.

      for (let i = 1; i <= 5; i++) {
        console.log(`table of : ${i}`);
        for (let j = 1; j <= 10; j++) {
          console.log(`${i} * ${j} = ${i * j}`);
        }
      }

      //   Q: Implement a while loop that prints even numbers from 2 to 10.

      let i = 1;
      while (i <= 10) {
        if (i % 2 == 0) {
          console.log(`${i} is even number`);
        }
        i++;
      }

      // Q: Use a do-while loop to prompt the user for a number until they enter a positive number.

      let num;
      do {
        num = prompt("enter any number");
        console.log(`${num}  you enter negative number`);
      } while (num <= 0);

      // Q: Explain how the forEach loop works and provide an example iterating over an array.

      let fruit = ["Apple", "Mango", "Banana"];

      fruit.forEach((val) => console.log(val));

      // Q: Iterate over the characters of a string using the for-of loop.

      let char = "Nitin";

      for (const val of char) {
        console.log(val);
      }

      // Q: Use a for-in loop to loop through the properties of an object and log them.

      let obj = {
        name: "Nitin",
        age: 18,
        city: "Alwar",
      };

      for (const key in obj) {
        console.log(key + ":" + obj[key]);
      }

      //Q: Create a program that uses a combination of if-else statements, loops, and the ternary operator to simulate a simple quiz game with multiple questions and user input.

      let score = 0;
      const questions = [
        { question: "What is the capital of India", answer: "new delhi" },
        {
          question: "Which planet is known as the Blue Planet?",
          answer: "earth",
        },
        {
          question: "who is the PM of India",
          answer: "narendra modi",
        },
      ];

      for (let i = 0; i < questions.length; i++) {
        let userAnswer = prompt(questions[i].question);
        score +=
          userAnswer.toLowerCase() === questions[i].answer.toLowerCase()
            ? 1
            : 0;
      }

      console.log(`Your final score is ${score}/${questions.length}`);

      //   Q: Use the Object.entries() method to iterate over the entries of an object and log both the key and value.

      const car = {
        car1: "Thar",
        car2: "fortuner",
        car3: "BMW",
      };

      for (let [key, value] of Object.entries(car)) {
        console.log(`${key}: ${value}`);
      }