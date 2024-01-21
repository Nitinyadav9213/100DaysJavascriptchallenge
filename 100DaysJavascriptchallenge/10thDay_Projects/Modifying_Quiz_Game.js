
      let Question = document.querySelector(".Question");
      let maincontainer = document.querySelector(".dataContainer");
      let Checkbtn = document.querySelector(".Checkbtn");
      let Nextbtn = document.querySelector(".Nextbtn");
      let PrevBtn = document.querySelector(".prevBtn");
      let Result = document.querySelector(".Result span");
      let option_box = document.querySelector(".option_box");
      let resultcontainer = document.querySelector(".resultcontainer");
      let questionHub = [
        {
          question: "1. CSS stands for",
          Ans: "Cascading style sheets",

          options: [
            "Cascade style sheets",
            "Color and style sheets",
            "Cascading style sheets",
            "None of the above",
          ],
        },
        {
          question:
            "2. Which of the following CSS selectors are used to specify a group of elements?",
          Ans: "class",

          options: ["tag", "id", "class", "both class and tag"],
        },
        {
          question:
            "3. Which of the following CSS framework is used to create a responsive design?",
          Ans: "bootstrap",

          options: ["django", "rails", "larawell", "bootstrap"],
        },
        {
          question:
            "4. Which of the following CSS property is used to make the text bold?",
          Ans: "font-weight: bold",

          options: [
            "text-decoration: bold",
            "font-weight: bold",
            "font-style: bold",
            "text-align: bold",
          ],
        },
        {
          question:
            "5. Which of the following CSS style property is used to specify an italic text?",
          Ans: "font-style",

          options: ["style", "font", "font-style", "@font-face"],
        },
        {
          question:
            "6. Which of the following CSS property sets the font size of text?",
          Ans: "font-size",

          options: ["font-size", "text-size", "text", "size"],
        },
        {
          question:
            "7. Which of the following function defines a linear gradient as a CSS image?",
          Ans: "linear-gradient()",

          options: [
            "gradient()",
            "linear-gradient()",
            "grayscale()",
            "image()",
          ],
        },
        {
          question:
            "8. Which of the following is not the property of the CSS box model?",
          Ans: "color",

          options: ["margin", "color", "width", "height"],
        },
        {
          question:
            "9. Which of the following CSS property specifies the look and design of an outline?",
          Ans: "outline-style",

          options: [
            "outline-style",
            "outline-format",
            "outline-font",
            "none of the mentioned",
          ],
        },
        {
          question:
            "10. Which of the following CSS property sets the shadow for a box element?",
          Ans: "linear-gradient()",

          options: ["set-shadow", "box-shadow", "shadow", "canvas-shadow"],
        },
      ];

      let questionCount = 0;
      let score = 0;
      let questionIndex = questionHub[questionCount];
      function LoadQuestion() {
        let option_statement = "";
        Question.innerText = questionHub[questionCount].question;

        for (let i = 0; i < questionIndex.options.length; i++) {
          option_statement += `<button id="QueBtn"  class="Option color">${questionHub[questionCount].options[i]}</button>`;
        }
        option_box.innerHTML = option_statement;

        let Answers = document.querySelectorAll("#QueBtn");

        for (let i = 0; i < Answers.length; i++) {
          Answers[i].setAttribute("onclick", "useranswer(this)");
        }
      }
      LoadQuestion();

      function useranswer(answer) {
        let UserAns = answer.innerText;
        let correctAns = questionHub[questionCount].Ans;
        let AllOption2 = option_box.querySelectorAll("#QueBtn");

        if (UserAns == correctAns) {
          console.log("right answer");
          answer.classList.remove("color");
          answer.classList.add("correct");
          score++;

          answer.classList.add("disabled");
        } else {
          console.log("wrong answer");
          answer.classList.remove("color");
          answer.classList.add("incorrect");

          for (let i = 0; i < AllOption2.length; i++) {
            if (AllOption2[i].innerText == correctAns) {
              AllOption2[i].classList.remove("color");
              AllOption2[i].classList.add("correct");
            }
          }
        }
        for (let i = 0; i < AllOption2.length; i++) {
          AllOption2[i].classList.add("disabled");
        }
      }

      //   NEXT   PREV BUTTON FUNCTIONALITY

      let Nextfunction = () => {
        questionCount++;
        if (questionHub.length > questionCount) {
          LoadQuestion();
        } else {
          console.log(`${score}`);
          maincontainer.classList.add("inactive");

          resultcontainer.classList.remove("inactive");
          Result.innerText = `Your Question ${score} Correct Out Of 10`;
        }
      };

      let prevBtnFunction = () => {
        questionCount--;

        LoadQuestion();
      };

      Nextbtn.addEventListener("click", function () {
        Nextfunction();
      });
      PrevBtn.addEventListener("click", function () {
        prevBtnFunction();
      });
   