// Scoping = Local Scope  & Global Scope

      let a = 10; /* This is the global scope*/

      if (a <= 4) {

        let b = 10; /* This is the local scope */
        console.log(`value of local scope is ${b}`);
      }

      console.log(`value of global scope a is ${a}`);

      //  Arrow function

    //   1. Sum of two number with arrow function

      let tot = (a, b) => {
        return a + b;
      };

      console.log(tot(4, 5));

      // 2. Square of Each humber in array

      let arr = [2, 3, 4];

      arr.forEach((num) => {
        console.log(num * num);
      });

      // 3. If input value is even then square the actual value but if value is string then store the value in  object form.

      let ques1 = prompt("enter the value 1");
      let ques2 = prompt("enter the value 2");
      let ques3 = prompt("enter the value 3");
      let ques4 = prompt("enter the value 4");

      let data = Array.of(ques1, ques2, ques3, ques4);
      let sum;
      if (ques1 >= 0 && ques2 >= 0) {
        ques3 >= 0 && ques4 >= 0;

        let evenfunc = () => {
          console.log(data);
          data.forEach((val) => {
            sum = val * val;
            console.log(sum);
          });
        };
        evenfunc();
      } else if (
        typeof ques1 == "string" &&
        typeof ques2 == "string" &&
        typeof ques3 == "string" &&
        typeof ques4 == "string"
      ) {
        const obj = { ...data };
        console.log(obj);
      } else {
        console.log("Enter suitable value");
      }

      // Uses of This Keyword

      // 1.

      let obj = {
        name: "Nitin",
        age: 18,
        city: "Alwar",
        Intro: function () {
          return console.log(
            ` My name is ${this.name} ,I am ${this.age} year old. And i am from ${this.city}`
          );
        },
      };

      obj.Intro();

      // 2. Using Bind Method

      function greet() {
        console.log(`Hello, ${this.name}!`);
      }

      const person = { name: "Nitin" };
      const greetPerson = greet.bind(person);
      greetPerson();
