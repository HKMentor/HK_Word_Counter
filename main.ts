
import inquirer from "inquirer"

const answer =await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your paragraph and to count the words!"
    }
]);
const words = answer.Sentence.trim().split(" ");
//print the array of word to the console....
console.log(words);
//print the word count of the sentence  to the console....
console.log(`the total word are ${words.length}`);
console.log('The End')