// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: My answer would have been "indigo"
// b) Verify and explain: the answer is 5 because the .push() method returns the new length of the array. 
//    This was a great example that shows it is important to verify the output of code is what you need it to be. 

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The length includes everything in the string, even the spaces, and it is counted naturally unlike indexes. 

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: the "o" is the character at index 4 of the string. 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: the parameter "index" has a value of "1" and languages at index 1 has the value "Ruby"

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: the .toUpperCase() method is a string method, not an array method, so I got an error instead of what I expected. To make this work as I had expected:

// const toUpperCaseArray = (workingArray) => {
//     for (let i = 0; i < workingArray.length; i++){
//         workingArray[i] = workingArray[i].toUpperCase()
//     }
//     return workingArray
// }

// const testUpperArray = toUpperCaseArray(weekendDays)
// console.log(testUpperArray) // --> [ 'SATURDAY', 'SUNDAY' ]

// Note about this code:
// This function will work for arrays containing only strings. Adding numbers or other data types will throw an error. 
//Numbers represented as a string "10" will just return the same value without an error.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: the length of an array is a number and here we are asking the typeof array.length
