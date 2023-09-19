const quesJSON = [
  {
    correctAnswer: "1999",
    options: ["1995", "1986 ", "1999", "2000"],
    question: "When was G20 established?",
  },
  {
    correctAnswer: "Its main aim is to eliminate poverty from the world",
    options: [
      "Now the G20 summits are attended by the Finance Ministers and Central Bank Governors of the member countries only.",
      "India never hosted any G20 summit",
      "Its main aim is to eliminate poverty from the world",
      "Its meetings are held annually.",
    ],
    question:
      "Which of the following statements is not correct regarding the G 20?",
  },
  {
    correctAnswer: "One Earth-One Family-One Future",
    options: [
      "One Earth-One Family-One Future",
      "Shaping an Interconnected World",
      "Making the world together",
      "Fighting poverty with rigidity",
    ],
    question: "What is the theme of the G20 summit happening in India?",
  },
  {
    correctAnswer: "India",
    options: ["Brisbane", "India", "Antalya", "Osaka"],
    question:
      "Which of the following cities is organizing the recent G20 summit going to be held in 2023?",
  },
  {
    correctAnswer: "Singapore",
    options: ["Mexico", "Indonesia", "Singapore", "Turkey"],
    question: "Which of the following is not the member of the G20?",
  },
  {
    correctAnswer: "USA",
    options: ["Britain", "USA", "Singapore", "Canada"],
    question: "Where was the first summit of G20 held?",
  },
  {
    correctAnswer: "18",
    options: ["12", "9", "18", "5"],
    question: "To date how many summits of G20 have been held?",
  },
  {
    correctAnswer:
      "The Presidency of G20 is supported by a troika made up of the current, immediate past, and future host countries",
    options: [
      "The G20 has a permanent secretariat",
      "In 2015 the G20 Presidency was held by China",
      "The Presidency of G20 is supported by a troika made up of the current, immediate past, and future host countries",
      "The G20 Presidency rotates every two year",
    ],
    question: "Which of the following statements is correct about G20?",
  },
  {
    correctAnswer: "India’s national flag",
    options: [
      "Mexico's national flag",
      "India’s national flag",
      "Russia's national flag ",
      "France's national flag ",
    ],
    question: "What is the inspiration for G20 2023 logo?",
  },
  {
    correctAnswer: "Group of 20",
    options: [
      "Group of 20",
      "Grand 20 nations",
      "Great 20 countries",
      "None of the above",
    ],
    question: "What is the meaning of G20?",
  },
  {
    correctAnswer: "None of the above",
    options: ["India", "USA", "Both (a) and (b)", "None of the above"],
    question: "Where is the headquarters of G20?",
  },
  {
    correctAnswer: "All of the above",
    options: ["English", "French", "Spanish", "All of the above"],
    question: "What is the official language of the G 20 Summit?",
  },
  {
    correctAnswer: "Brazil",
    options: ["Mexico", "Indonesia", "Brazil", "Turkey"],
    question: "Which country will host G20 Summit in 2024?",
  },
  {
    correctAnswer: "Luiz Inacio Lula Da Silva",
    options: [
      "Carmen Lucia",
      "Jair Bolsonaro",
      "Luiz Inacio Lula Da Silva",
      "Michel Temer",
    ],
    question: "PM Modi transferred the G20 presidency to",
  },
  {
    correctAnswer: "Italy",
    options: ["Mexico", "Indonesia", "Italy", "Turkey"],
    question: "Which country hosted the 2021 G20 Summit?",
  },
  {
    correctAnswer: "2009",
    options: ["2006", "2009", "2011", "2000"],
    question:
      "In which year, G20 declared itself the primary venue for international economic and financial cooperation?",
  },
  {
    correctAnswer: "Argentina",
    options: ["Argentina", "Bharat", "Singapore", "Turkey"],
    question: "Which country is the most recent addition to the G20?",
  },
  {
    correctAnswer: "The United States",
    options: ["Japan", "The United States", "Singapore", "Turkey"],
    question: "Which G20 member has the largest economy?",
  },
  {
    correctAnswer: "South Africa",
    options: ["Mexico", "Indonesia", "Japan", "South Africa"],
    question: "Which country has the smallest economy in the G20?",
  },
  {
    correctAnswer: "43",
    options: ["48", "43", "33", "29"],
    question:
      "A delegation of how many members will be participating in the New Delhi Summit of G20?",
  },
];

let score = 0;
let currentQuestion = 0;
const totalScore=quesJSON.length;

//Accessing all the elements:
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl=document.getElementById('next');

showQuestion();

// Adding event listner to the skip button 
nextEl.addEventListener('click',  ()=>{
  scoreEl.textContent = `Score: ${score}/ ${totalScore}`;
  nextOuestion();
})

function showQuestion() {
  // Destructuring the object
  const { correctAnswer, options, question } = quesJSON[currentQuestion];

  //Setting question text content
  questionEl.textContent = question;

  const shuffledOptions = shuffleOptions(options);

  //Populating the Options div with the buttons.
  shuffledOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);

    // Event handling on the button:
    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }

      scoreEl.textContent = `Score: ${score}/ ${totalScore}`;
      nextOuestion();
    });
  });
}

// calling next question
function nextOuestion() {
  currentQuestion++;
  optionEl.textContent = "";
  if (currentQuestion >= quesJSON.length) {
    questionEl.textContent = "Quiz Completed!!";
     nextEl.remove();
  } else {
    showQuestion();
  }
}

//Shuffling the Options
function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}
 
