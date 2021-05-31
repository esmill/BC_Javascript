/**
 * Homework Exercises 15.04.
 */


// Given a string name, e.g. "Johnny", return a greeting of the form "Hello, Johnny!".
function personalGreeting(name) {
    return "Hello, " + name + "!"
}
// Uncomment next line (Ctrl+/) and run the program. Comment it back once the function is working as intended.
console.log(personalGreeting('Geralt')) // This should print 'Hello, Geralt!' to the console


// Given current year and the year of birth, return how old the person in.
function calculateAge(currentYear, yearOfBirth) {
return currentYear - yearOfBirth
}
// console.log(calculateAge(2021, 1990)) // 31
// console.log(calculateAge(2000, 1960)) // 40


// Swap values a and b by creating a third variable
let a = 5
let b = 3
let c = a
a = b
b = c

console.log(a) // 3
console.log(b) // 5

// Given three parameters, add the first two together and subtract the third one. Return the result.
function addSubtract(first, second, third) {

}
// console.log(addSubtract(1, 2, 3))     //  0
// console.log(addSubtract(-10, 10, -5)) // -5


// Create an object and save it to a variable named 'circle'
// Assign value 10 to property named radius.
// Create a method getArea() that will return the area of the circle ( 2 * 3.14 * radius ).

let circle = {
    radius: 10,

    getArea: function() {
        return 2 * 3.14 * this.radius
    }
}

console.log(circle.getArea().toFixed(1))


// The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation.
// We can turn off the alarm clock if it is not a weekday or we're on vacation. Return true if we turn off the alarm clock.
function turnOffAlarmClock(isWeekDay, isVacation) {
return !isWeekDay || isVacation
}
console.log(turnOffAlarmClock(false, false)) // true
console.log(turnOffAlarmClock(true, false))  // false
console.log(turnOffAlarmClock(false, true))  // true


// Given 2 integer values, return True if one is negative and one is positive.
// Except if the parameter "negative" is True, then return True only if both are negative.
function positiveNegative(first, second, negative) {
if (negative) {
    return first < 0 && second < 0
} else {
    return first > 0 && second < 0 || (first < 0 && second > 0)
}
}
console.log(positiveNegative(-7, -5, false)) // false
console.log(positiveNegative(1, 1, false))   // false
console.log(positiveNegative(1, -1, false))  // true
console.log(positiveNegative(-1, 1, false))  // true
console.log(positiveNegative(-4, -5, true))  // true
console.log(positiveNegative(-4, -5, false)) // false


// Given a string, return true if the string starts with "Summer" and false otherwise.
function startsWithSummer(text) {
let firstSixLetters = text.slice (0, 6)
return firstSixLetters === 'Summer'
}

console.log(startsWithSummer('Summer is not that far away!')) // true
console.log(startsWithSummer('Sum of two variables')) // false
console.log(startsWithSummer('Summerwood is somewhere north from here')) // true
console.log(startsWithSummer('summertimes vs Summertimes')) // false


// We'll say that a number is "teen" if it is in the range 13..19 inclusive.
// Given 3 integer values, return true if 1 or more of them are teen.
function isTeen(first, second, third) {
return ( first >= 13 && first <= 19) || (second > 13 && second <= 19) || (third >= 13 && third <= 19)
}
console.log(isTeen(13, 20, 10)) // true
console.log(isTeen(20, 19, 10)) // true
console.log(isTeen(20, 10, 13)) // true
console.log(isTeen(10, 12, 20)) // false


// Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie.
// Note that Math.abs(n) returns the absolute value of a number.
function closeToTen(a, b) {
let distanceA = Math.abs(10 - a)
let distanceB = Math.abs(10 - b) 
if (distanceA < distanceB){
    return a
} else if (distanceB <distanceA) {
    return b
} else {
    return 0
}
}
console.log(closeToTen(8, 13)) // 8
console.log(closeToTen(13, 8)) // 8
console.log(closeToTen(13, 7)) // 0


// Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.
function mixStart(s) {
    let firstTwoCharacters = s.slice(1, 3)
    return firstTwoCharacters === 'ix'
}
console.log(mixStart("mix snacks")) // true
console.log(mixStart("pix snacks")) // true
console.log(mixStart("piz snacks")) // false


// For the first parameter a 4-letter string is provided, for the second parameter a string of length >= 1.
// Calling the function with '<<>>' for the first and 'Daisy' for the second parameter, it will return '<<Daisy>>'
function makeOutWord(pattern, text) {
return pattern.slice(0, 2) + text + pattern.slice(2, 4) // pattern[0] + pattern[1] + text + pattern[2] + pattern[3]
}
console.log(makeOutWord('<<>>', 'Yay'))    // '<<Yay>>'
console.log(makeOutWord('<<>>', 'WooHoo')) // '<<WooHo>>'
// console.log(makeOutWord('[[]]', 'word'))   // '[[word]]'


// Given three integers, a b c, return true if it is possible to add two of the ints to get the third.
function twoAsOne(a, b, c) {
return (a + b === c) || (a + c === b) || (b + c ===a)
}
console.log(twoAsOne(1, 2, 3)) // true
console.log(twoAsOne(3, 1, 2)) // true
console.log(twoAsOne(3, 2, 2)) // false


//Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.
function omitFirstLetterAndConcatenate(first, second) {
    return first.slice(1) + second.slice(1)
}
console.log(omitFirstLetterAndConcatenate('Hello', 'There')) //'ellohere'
console.log(omitFirstLetterAndConcatenate('js', 'code'))     // 'sode'
console.log(omitFirstLetterAndConcatenate('shotl', 'java'))   // 'hotlava'


// Given an array of ints, return true if 6 appears as either the first or last element in the array.
// The array will be length 1 or more.
function firstLast6(arr) {
    return arr[0] === 6 || arr[arr.length - 1]
}
console.log(firstLast6([1, 2, 6]))        // true
console.log(firstLast6([6, 1, 2, 3]))     // true
console.log(firstLast6([13, 6, 1, 2, 3])) // false


// Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element.
// Both arrays will be length 1 or more.
function commonEnd(firstArr, secondArr) {
    let i = firstArr.length - 1
    let j = secondArr.length - 1
    return (firstArr[0] === secondArr[0]) || (firstArr[i] === secondArr[j])
}
// console.log(commonEnd([1, 2, 3], [7, 3]))    // true
// console.log(commonEnd([1, 2, 3], [7, 3, 2])) // false
// console.log(commonEnd([1, 2, 3], [1, 3]))    // true










// Given 2 arrays, a and b, each length 3, return a new array length 2 containing their middle elements.
function middleWay(a, b) {
    return [a[1], b[1]]
}
console.log(middleWay([1, 2, 3], [4, 5, 6])) // [2, 5]
console.log(middleWay([7, 7, 7], [3, 8, 0])) // [7, 8]
console.log(middleWay([5, 2, 9], [1, 4, 5])) // [2, 4]


// Given an array , return a new array with the elements in reverse order, so [1, 2, 3] becomes [3, 2, 1].
function reverseArray(arr) {

}
// console.log(reverse([1, 2, 3]))  // [3, 2, 1]
// console.log(reverse([5, 11, 9])) // [9, 11, 5]
// console.log(reverse([7, 0, 0]))  // [0, 0, 7]


// Given a number array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0.
// Return the changed array.
function fix23(arr) {

}
// console.log(fix23([1, 2, 3])) // [1, 2, 0]
// console.log(fix23([2, 3, 5])) // [2, 0, 5]
// console.log(fix23([1, 2, 1])) // [1, 2, 1]






// Given a number array, return the sum of all elements
function findSum(arr) {

}
// console.log(findSum([1,2,3]))    // 6
// console.log(findSum([100,10,1])) // 111


// We'll say that a 1 immediately followed by a 3 in an array is "lucky" 1.
// Return true if the given array contains a lucky 1 in the first 2 or last 2 positions in the array.
function lucky1(arr) {

}
// console.log(lucky1([1, 3, 4, 5]))    // true
// console.log(lucky1([2, 1, 3, 4, 5])) // true
// console.log(lucky1([1, 1, 1]))       // false


// Given 2 integer arrays, a and b, of any length,
// return a new array with the first element of each array. If either array is length 0, ignore that array.
function front11(arrOne, arrTwo) {

}
// console.log(front11([1, 2, 3], [7, 9, 8])) // [1, 7]
// console.log(front11([1], [2])) // [1, 2]
// console.log(front11([1, 7], [])) // [1]


// Return the sum of the numbers in the array, returning 0 for an empty array.
// Except the number 13 is very unlucky, so it does not count and numbers that come immediately after and 13 also does not count.
function sum13(arr) {
 let sum = 0
 for (number of arr) {
     if (number === 13) {
        break
     } else {
         sum += number
     }
 }
 return sum
}
console.log(sum13([1,2,3])) // 6
console.log(sum13([1,13,123,500])) // 1
console.log(sum13([13,5,1000000])) // 0
console.log(sum13([])) // 0


// Prints to the console
// #
// ##
// ###
// ####
function marioEasy(height) {

}
// marioEasy(4)


// Prints to the console
//      #
//     ##
//    ###
//   ####
// ######
function marioHard(height) {

}
// marioHard(5)




let text = "This is some text here are some more words"
let word = text.slice(8, 12)

let textSplit = text.split('')
console.log(textSplit)


let z = 5 % 2  // 1
let y = 13 % 5 // 3
let w = 14 % 5 // 4
let o = 15 % 5 // 0
let p = 16 % 5 // 1
let k = 17 % 5 // 2

function isEven(number) {
    return number % 2 === 0
}

console.log(isEven(15))


alert('Warning')

let age = prompt('How old are you')
console.log(age)

if (age) {
alert('You are not adult yet')
} else {
    alert('You are an adult')
}
