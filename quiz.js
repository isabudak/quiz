class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.score = 0;
      this.currentIndex = 0;
    }
  
    getCurrentQuestion() {
      return this.questions[this.currentIndex];
    }
  
    selectAnswer(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentIndex++;
    }
  
    hasEnded() {
      return this.currentIndex === this.questions.length;
    }
  
    reset() {
      this.score = 0;
      this.currentIndex = 0;
    }
  }
  
  class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
  
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  
  const questions = [
    new Question("En popüler programlama dili hangisidir?", ["Java", "Python", "JavaScript", "C++"], "JavaScript"),
    new Question("Hangisi bir HTML etiketi değildir?", ["div", "span", "link", "json"], "box"),
    new Question("Hangi şirket JavaScript motoru V8'i geliştirdi?", ["Microsoft", "Apple", "Google", "Facebook"], "Google"),
    new Question("Hangisi bir Git komutu değildir?", ["git commit", "git push", "git save", "git branch"], "git save"),
    new Question("Hangisi bir CSS özelliği değildir?", ["margin", "padding", "border-style", "font-weight-style"], "font-weight-style")
  ];
  
  const quiz = new Quiz(questions);
  
  function populate() {
    if (quiz.hasEnded()) {
      showScores();
    } else {
      const questionElement = document.getElementById("question");
      questionElement.innerHTML = quiz.getCurrentQuestion().text;
  
      const choicesElement = document.getElementById("choices");
      choicesElement.innerHTML = "";
      const choices = quiz.getCurrentQuestion().choices;
      for (let i = 0; i < choices.length; i++) {
        const choice = choices[i];
        const button = document.createElement("button");
        button.innerHTML = choice;
        button.onclick = function() {
          quiz.selectAnswer(choice);
          populate();
        };
        choicesElement.appendChild(button);
      }
  
      const progressElement = document.getElementById("progress");
      progressElement.innerHTML = "Soru " + (quiz.currentIndex + 1) + " / " + quiz.questions.length;
    }
  }
  
  function showScores() {
    const quizEndHtml = "<h1>Sınav Tamamlandı</h1>" +
                        "<h2>Skorunuz: " + quiz.score + "/" + quiz.questions.length + "</h2>";
    const quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHtml;
  }
  
  populate();
  