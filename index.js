/**
 * Concept of this lesson?
 * (a) Array,
 * (b) accessing it with an index
 * (c) length of the array
 */

const readline = require("readline");
var readlineSync = require("readline-sync");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Tanay's quiz on FRIENDS");

/**
 * list of something is an array
 */

const queBank = [
  {
    question: `
	Joey was never roommate with one of these people?
	a: Ross
	b: Phoebe
	c: Rachel\n`,
    answer: "b"
  },
  {
    question: `
	How did Ross count to 5?
	a: Like a normal person
	b: One Mississippi, Two Mississippi\n`,
    answer: "b"
  },
  {
    question: `
	Who said, "It's a Moo Point"?
	a: Joey
	b: Chandler
	c: Ross
	d: Monika\n`,
    answer: "a"
  },
  {
    question: `
	What's Ichiban?
	a: Bag for men
	b: Lipstick for men
	c: Winner's cup\n`,
    answer: "b"
  }
];

var highScores = [
  {
    name: 'Nikita',
    score: '10'
  },
  {
    name: 'Amit',
    score: '09'
  }
];

let questionIndex = 0;
let score = 0;


function question() {
  rl.question(queBank[questionIndex].question, (answer) => {
    console.log(`You answered: ${answer}`);

    if (answer.toLowerCase() == queBank[questionIndex].answer.toLowerCase()) {
      console.log("right answer");
      score++;
      questionIndex++;
      serve();
    } else {
      console.log("wrong answer");
      console.log("try again");
      question();
    }
  });
}

function serve() {
  if (isQuestionBankExhausted()) {
    console.log("thanks for playing....");
    highScores.add({ name: userName, score: score });
    console.log(highScores);
    rl.close();
  } else {
    rl.question("what do you want to do? \n Press e to exit, any other key to continue....  ", (choice) => {
      console.log(`You selected ${choice}`);

      if (choice.toLowerCase() !== "e") {
        question();
      } else {
        console.log("thanks for playing....");
        highScores.add({ name: userName, score: score });
        console.log(highScores);
        rl.close();
      }
    });
  }
}

/**
 * checks array length with index and exits game
 */
function isQuestionBankExhausted() {
  if (queBank.length == questionIndex) {
    return true;
  }
}

function welcome() {
  userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW Tanay?");
}


welcome();
serve();
