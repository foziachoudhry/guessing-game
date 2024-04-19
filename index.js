#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\twellcom to code with fozia - ClI Number Guessing game\n");
const randomNum = Math.floor(Math.random() * 5 + 1);
const userInput = await inquirer.prompt([
    {
        name: "guessNumber",
        type: "number",
        message: "please guess a number range 1 to 5",
    },
]);
if (userInput.guessNumber === randomNum) {
    console.log("Well done! your guess number is right");
}
else {
    console.log("your guess number is wrong");
}
