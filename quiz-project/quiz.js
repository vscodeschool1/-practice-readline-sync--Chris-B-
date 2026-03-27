const readlineSync = require('readline-sync');

// Declare variables to store user answers
let userName;
let answer1;
let answer2;
let answer3;
let answer4;
let answer5;

// Prompt user for their name and store it in variable
userName = readlineSync.question("What is your name? ");

// Greet the user using stored variable
console.log("Hello, " + userName + "!");



// Question 1 - Store answer in answer1 variable
console.log("QUESTION 1:");
answer1 = readlineSync.question('What data type is the value 123? ');

if (answer1.toLowerCase() === "number") {
    console.log("✓ Correct!");
    
} else {
    console.log("✗ Incorrect. The correct answer is: number");
}

// Question 2 - Store answer in answer2 variable (Number input)
console.log("QUESTION 2:");
answer2 = readlineSync.questionInt('What is the result of 20 / 4? Enter a number: ');

if (answer2 === 5) {
    console.log("✓ Correct!");
    
} else {
    console.log("✗ Incorrect. The correct answer is: 5");
}

// Question 3 - Store answer in answer3 variable
console.log("QUESTION 3:");
answer3 = readlineSync.question('What is the result of "5" + 5 in JavaScript? ');

if (answer3 === "55" || answer3 === '"55"' || answer3 === "'55'") {
    console.log("✓ Correct!");
    
} else {
    console.log("✗ Incorrect. The correct answer is: \"55\"");
}

// Question 4 - Store answer in answer4 variable
console.log("QUESTION 4:");
answer4 = readlineSync.question('What does typeof true return? ');

if (answer4.toLowerCase() === "boolean") {
    console.log("✓ Correct!");
   
} else {
    console.log("✗ Incorrect. The correct answer is: boolean");
}

// Question 5 - Store answer in answer5 variable
console.log("QUESTION 5:");
answer5 = readlineSync.question('What value does Boolean(1) return? ');

if (answer5.toLowerCase() === "true") {
    console.log("✓ Correct!");
    
} else {
    console.log("✗ Incorrect. The correct answer is: true");
}


// Print each stored answer variable
console.log("Your Answer to Question 1: " + answer1);
console.log("Your Answer to Question 2: " + answer2);
console.log("Your Answer to Question 3: " + answer3);
console.log("Your Answer to Question 4: " + answer4);
console.log("Your Answer to Question 5: " + answer5);

// Print stored answers
console.log("Q1: What data type is the value 123?");
console.log("    → You answered: " + answer1);
console.log("    → Correct answer: number");
console.log("");

console.log("Q2: What is the result of 20 / 4?");
console.log("    → You answered: " + answer2);
console.log("    → Correct answer: 5");
console.log("");

console.log("Q3: What is the result of \"5\" + 5?");
console.log("    → You answered: " + answer3);
console.log("    → Correct answer: 55");
console.log("");

console.log("Q4: What does typeof true return?");
console.log("    → You answered: " + answer4);
console.log("    → Correct answer: boolean");
console.log("");

console.log("Q5: What value does Boolean(1) return?");
console.log("    → You answered: " + answer5);
console.log("    → Correct answer: true");





