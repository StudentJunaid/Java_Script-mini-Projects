const quetions = [
  {
    que: "Which of the Following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was JavaScript Launched?",
    a: "1996",
    b: "1995",
    c: "1997",
    d: "1998",
    correct: "b",
  },
  {
    que: "CSS What does stand for?",
    a: "Hyper Text Markup language",
    b: "CaseCading Style sheet",
    c: "Jason Object Notation",
    d: "CaseCading Style document",
    correct: "b",
  },
];

let total = quetions.length;
let right = 0,
  wrong = 0;
let index = 0;
const queBox = document.getElementById("queBox");
const OptionsIput = document.querySelectorAll(".Options");

const loadQuitons = () => {
    if (index === total){
        return endQuiz();
    }
  reset();
  const data = quetions[index];
  
  queBox.innerText = `${index + 1}) ${data.que}`;
  OptionsIput[0].nextElementSibling.innerText = data.a;
  OptionsIput[1].nextElementSibling.innerText = data.b;
  OptionsIput[2].nextElementSibling.innerText = data.c;
  OptionsIput[3].nextElementSibling.innerText = data.d;
};

submitQuiz = () => {
  const data = quetions[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuitons();
  return;
};

const getAnswer = () => {
    let answer;
  OptionsIput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () =>{
    OptionsIput.forEach((input) => {
        input.checked = false
      });
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <h3>Thankyou for playin the quiz</h3>
    <h2> ${right} / ${total} are correct </h2>
    `
}

loadQuitons();


