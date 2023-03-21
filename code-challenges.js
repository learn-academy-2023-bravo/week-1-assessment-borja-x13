// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
// create a function: stringCompare that accepts two string inputs
// inputs: two strings
// compare the inputs using if/else if statements and equality operators: stringName.length > < otherStringName.length
// return the longest string

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// // Expected outcome: "cherry"

// ---------------- my code is below -----------------

// const stringCompare = (firstString, secondString) => {
//     if(firstString.length > secondString.length){
//         return firstString
//     } else if(secondString > firstString){
//         return secondString
//     } else {
//         return "I don't know what just happened..."
//     }
// }

// console.log(stringCompare(fruit1, fruit2)) // --> banana
// console.log(stringCompare(fruit3, fruit4)) // --> cherry



// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// create a function: boilingPointTester that accepts one numeral input
// create a constant boilingPoint = 212
// compare the input against boilingPoint using a if/else if statements and equality operators
// return whether input is below, at, or above boilingPoint
// use string interpolotion for the return `${checkedTemp} is + = - boiling point`

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

// ---------------- my code is below -----------------

// const boilingPointTester = (checkedTemp) => {
//     const boilingPoint = 212
//     if (checkedTemp < boilingPoint) {
//         return `${checkedTemp} is still below the boiling point`
//     } else if (checkedTemp === boilingPoint) {
//         return `${checkedTemp} is exactly at the boiling point`
//     } else if (checkedTemp > boilingPoint){
//         return `${checkedTemp} is above the boiling point... no touchy!`
//     } else {
//         return "...was that even a temperature?"
//     }
// }

// console.log(boilingPointTester(temperature1))  // --> 42 is still below the boiling point
// console.log(boilingPointTester(temperature2))  // --> 350 is above the boiling point... no touchy!
// console.log(boilingPointTester(temperature3))  // --> 212 is exactly at the boiling point
// console.log(boilingPointTester("it burns us"))  // --> ...was that even a temperature?



// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// I couldn't remember the array method to combine the arrays. I went to w3Schools.com/js/js_array_methods .concat()
// create an array to hold the merged arrays
// merge the arrays using .concat()... do this in place at the array declaration 
// console log the length of the new array

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// ---------------- my code is below -----------------

// const padresCombined = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
// console.log(padresCombined.length) // --> 9



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// create a function: stringReverse(reversingString) that will reverse the letters of any string it receives... because I have a feeling this won't be the last time
// function converts string to an array with the .split() string method... I couldn't remember the correct names of the methods, so I looked them up on w3schools
// function uses the .reverse() array method... I did remember this one but since i was at w3 anyway, I verified it :)
// function converst back into a string using the .join() array method
// function returns the reversed string
// create a variable reversedCohort outside the function that will hold the new string

const currentCohort = "Bravo 2023"
// Expected output: "3202 ovarB"

// ---------------- my code is below -----------------

// const stringReverse = (reversingString) => {
//     let reversed = reversingString.split("").reverse().join("")
//     return reversed
// }

// const reversedCohort = stringReverse(currentCohort)
// console.log(reversedCohort) // -->  3202 ovarB

// const test2 = stringReverse("this is just another test")
// console.log(test2) // --> tset rehtona tsuj si siht

// Aftermath: 
// The initial code didn't work. I realized that the .split() and .join() methods are accessor methods, not mutators. 
// I tried to put all the methods in one line as they currently are, rather than three different lines as my pseudo code suggested.
// That still didn't work, so I created a variable inside the function to hold the string as it changed, but that didn't work either.
// I put all the console logs and then saw nothing was ever changing, and I realized I wasn't splitting because I didn't give it a parameter in the split.
// Long-story-short I fixed it with .split("") and found the same issue with .join() which became .join("") and now we are all good and happy. 
// I hate typing console.log() and would love it, if it could just be print() like a normal language :P but console.log() is my best friend all the same. 
// Also, now that I realized I could put it all in one line, I didn't really need to create a function at all and could have done it in a single line + console logging it.

// ---------------- my refactored code is below -----------------

// let reversedCohort = currentCohort.split('').reverse().join('')
// console.log(reversedCohort) // --> 3202 ovarB



// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// my initial thought was to do a function, but after what I just went through on the previous question...
// not much to be said here. We used the lastIndexOf() method during a different challenge. I did go to mdn to verify the syntax
// console.log the array using the lastIndexOf() method with the give values as the parameters.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// ---------------- my code is below -----------------

// console.log(myNumbers.lastIndexOf(givenValue1)) // --> 7
// console.log(myNumbers.lastIndexOf(givenValue2)) // --> 8



// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Thoughts:
// I looked up the .sort() method on mdn and w3schools to see if there was anything special about it and found that numeric sorting requires a comparative 
// function in order to work correctly array.sort(function(a,b){return a - b})
// Actually I decided to test out the sorting function fist just to see what it did, and it looks like it works with just .sort() without adding
// functions as parameters. Perhaps what I found was old information. 

// Pseudo code:
// since the .sort() and .reverse are mutator methods, there is no need to create a new variable to hold them
// use the .sort() method first to sort them, but it sorts in ascending.
// add the .reverse() method to change it to descending order as the exercise requires.
// console log each array.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

// ---------------- my code is below -----------------

// sanDiegoSummerTemperatures.sort().reverse()
// console.log(sanDiegoSummerTemperatures) // --> [82, 80, 79, 77, 76, 73, 72]
// sanDiegoWinterTemperatures.sort().reverse()
// console.log(sanDiegoWinterTemperatures) // --> [68, 67, 66, 66, 62, 59, 59]
