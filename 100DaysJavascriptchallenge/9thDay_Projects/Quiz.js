
let Question = document.querySelector(".Question");
let OptionA = document.querySelector(".OptionA");
let OptionB = document.querySelector(".OptionB");
let OptionC = document.querySelector(".OptionC");
let OptionD = document.querySelector(".OptionD");
let Next = document.querySelector(".Nextbutton");
let check = document.querySelector(".Checkbutton");
let InputAnswer = document.querySelectorAll(".InputAnswer");
let correctAnswer = document.querySelector(".correctAnswer");

let questionHub = [
  {
    question: "CSS stands for",
    opt1: "Cascade style sheets",
    opt2: "Color and style sheets",
    opt3: "Cascading style sheets",
    opt4: "None of the above",
    Ans: "Opt 3 ",
  },
  {
    question: "The CSS property used to control the element's font-size is ",
    opt1: "text-style",
    opt2: "text-size",
    opt3: "font-size",
    opt4: "None of the above",
    Ans: "Opt 3",
  },
  {
    question: "The HTML attribute used to define the inline styles is",
    opt1: "style",
    opt2: "styles",
    opt3: "class",
    opt4: "None of the above",
    Ans: "Opt 1",
  },
];

let questionIndex = 0;
let Questionnumber;
function loadQuestion() {
  Questionnumber = questionHub[questionIndex];
  Question.innerText = Questionnumber.question;
  OptionA.innerText = Questionnumber.opt1;
  OptionB.innerText = Questionnumber.opt2;
  OptionC.innerText = Questionnumber.opt3;
  OptionD.innerText = Questionnumber.opt4;
}
loadQuestion();
let answer;
const getCheckAnswer = () => {
  InputAnswer.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};

check.addEventListener("click", function () {
  const checkedAnswer = getCheckAnswer();
  console.log(checkedAnswer);
  if (checkedAnswer == questionHub[questionIndex].Ans) {
    correctAnswer.innerHTML = `<h4> Your correct Answer = ${questionHub[questionIndex].Ans}</h4>`;
    correctAnswer.classList.remove("correctopt");
  } else {
    correctAnswer.innerHTML = `<h4> you are wrong Correct Answer = ${questionHub[questionIndex].Ans}</h4>`;
  }
});

Next.addEventListener("click", function () {
  questionIndex++;
  loadQuestion();
});
