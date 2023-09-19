const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "1999",
  options: ["1995", "1999 ", "1996", "2000"],
  question: "When was G20 established?",
};

const { question, correctAnswer, options } = questionObj;

//Fetching elements 
const questionEl = document.getElementById("question");
const optionEl=document.getElementById("options");
const scoreEl=document.getElementById("score");


questionEl.textContent = question;


// populating the option div with the buttons

options.forEach((opt)=>{
  const btn=document.createElement("button");
  btn.textContent=opt;
  optionEl.appendChild(btn);
  
})

 