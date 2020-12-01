new Card {
  constructor(id, question, possibleAnswers, answer) {
    this.id = id;
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.answer = answer;
  }
};

const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?",
["object", "array", "function"], "object");
const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
