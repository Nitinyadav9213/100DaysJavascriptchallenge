  // const obj = new Object()         Singleton Object

      // const obj = {}                   nonsingleton object

      // 1.

      let obj = {
        Name: "Nitin",
        Cource: "BCA",
        Lang: "Javascript",
      };

      function details(objdeta) {
        return Object.keys(objdeta).length;
      }

      console.log(details(obj));

      // 2. Delete property

      let sum = {
        a: 20,
        b: 10,
        c: 10,
      };

      function remove() {
        delete sum.a;
      }
      remove();
      console.log(sum);

      // 3 . use of spread operator

      let num = {
        a: 20,
        b: 10,
        c: {
          d: 1,
        },
      };

      let num2 = {
        f: 30,
        g: 40,
      };

      let spr = { ...num, ...num2 };

      console.log(spr);

      // 4. use of Entries

      let data = {
        name: "nitin",
        age: 18,
      };

      let newdata = Object.entries(data);

      console.log(newdata);

      // 5. Object Constructor

      function finddata(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
      }

      data = new finddata("nitin", "18", "alwar");

      console.log(data);

      // 6.

      data = {
        name: "nitin",
        age: 18,
        city: "Alwar",
      };

      function displaydata() {
        console.log(`${this.name}, ${this.age}, ${this.city}`);
      }

      displaydata();

      // 7. Change the key value

      data = {
        name: "nitin",
        age: 18,
        city: "Alwar",
      };

      data.name = "Nitin Yadav";

      console.log(data.name);

      // 8. Check the type of Key in objects

      data = {
        name: "nitin",
        age: 18,
        city: "Alwar",
      };

      let checktype = typeof data.name;
      console.log(checktype);