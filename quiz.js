const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "1999",
  options: ["1995", "1999", "1996", "2000"],
  question: "When was G20 established?",
};

// destructing the objects
const { question, correctAnswer, options } = questionObj;

let score = 0;

//Fetching elements
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

questionEl.textContent = question;


//suffling the option
const shuffledOptions=shuffleOptions(options);

// populating the option div with the buttons
shuffledOptions.forEach((opt) => {
  //creating button and appendint it to the option div
  const btn = document.createElement("button");
  btn.textContent = opt;
  optionEl.appendChild(btn);

  // Event handling on the buttons
  btn.addEventListener("click", () => {
    if (opt === correctAnswer) {
      score++;
    } else {
      score = score - 0.25;
    }

    scoreEl.textContent = `Score : ${score}`;
    if (opt != correctAnswer) {
      scoreEl.textContent = `  Score : ${score} || Correct answer: ${correctAnswer}`;
    }
    questionEl.textContent = "Quiz Completed !!";
    optionEl.textContent = " ";
  });
});

//Shuffling the options

function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i  );
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}
// shuffleOptions(options);
