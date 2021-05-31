// /**
//  * Return the full name of a person.
//  * @param {*} firstName string
//  * @param {*} lastName string
//  */
// function getFullName(firstName, lastName) {
// return firstName + ' ' + lastName
// }
// console.log(getFullName('Elon', 'Musk')) // Returns 'Elon Musk'



// /**
//  * Return a string in the form of 'Good evening!', if it is the evening, else return a string 'Good day!' .  
//  * @param {*} isEvening boolean
//  */
// function sayHello(isEvening) 
// if (isEvening){
//     return 'Good evening!'
// } else if (!isEvening)


// console.log(sayHello(true))  // Good evening
// console.log(sayHello(false)) // Good day


// /**
//  * Return true if the person is allowed to gamble (is at least 21 years old).
//  * @param {*} age number
//  */
// function gamble(age) {
//     return age >= 21 
// }
// console.log(gamble(17)) // false
// console.log(gamble(18)) // false
// console.log(gamble(21)) // true 



// /**
//  * Return true if the number is even. Use modulus % operator.
//  * @param {*} n number
//  */
//  function isEven(n) {
//     return n % 2 === 0
// }
// console.log(isEven(2))  // true
// console.log(isEven(-5)) // false
// console.log(isEven(9))  // false



// /**
//  * Return the temperature in fahrenheit.
//  * T(F) = T(C) * 1.8 + 32
//  * @param {*} temperatureInCelsius number
//  */
//  function fromCelsiusToFahrenheit(temperatureInCelsius) {
    
// }
// // console.log(fromCelsiusToFahrenheit(-50)) // -58
// // console.log(fromCelsiusToFahrenheit(20))  //  68



// /**
//  * Depending on where in time we are going, return either:
//  *  1) 'Back to the past!' , 2) 'Staying in the present!' or 3) 'Into the future!'.
//  * @param {*} fromYear number
//  * @param {*} toYear number
//  */
//  function timeTravel(fromYear, toYear) {
//     if (fromYear > toYear) {
//         return "Back to the past!"
//     } 
// }
// // console.log(timeTravel(2021, 500))  // 'Back to the past!'
// // console.log(timeTravel(5000, 5000)) // 'Staying in the present!'
// // console.log(timeTravel(1, 2)        // 'Into the future!'



// /**
//  * Return true if the words are equal. Ignore case, e.g. 'abc' === 'aBC'  is true.
//  * @param {*} word string
//  * @param {*} otherWord string
//  */
//  function compareStringsIgnoreCase(word, otherWord) {

// }
// // console.log(compareStringsIgnoreCase('ABC', 'aBc'))               // true
// // console.log(compareStringsIgnoreCase('JAVAscripT', 'JavaSCRIPT')) // true
// // console.log(compareStringsIgnoreCase('hello', 'Hello!'))          // false



// /**
//  * Return the word that has more characters in it.
//  * @param {*} word string
//  * @param {*} otherWord string
//  */
// function chooseLongestWord(word, otherWord) {
// if (word.length >= otherWord.length) {
//     return word
// } else if 





/**
 * Given some words separated by a comma, return the last word in capital letters.
 * @param {*} text string 
 */
function getLastWordFromText(text) {
let split = text.split(',')
let lastWord = split[split.length - 1].toUpperCase()
return lastWord
}




/**
 * A married female with the name 'Ashley Cooper' would be 'Mrs. Ashley C.'
 * Not married woman is 'Ms.' , male is 'Mr.' 
 * @param {*} fullName string
 * @param {*} isMarried boolean
 * @param {*} isFemale boolean
 */
// function addressFormally(fullName, isMarried, isFemale) {
//     let firstPart = ''
//     if (isFemale){
//         if (isMarried){
//             firstPart = 'Mrs.'
//             } else {
//                 firstPart = 'Ms.'
//             }
//         } else {
//             firstPart = 'Mr.'
//         }
//         let name = ''
//         let nameSplit = fullName.split(' ')
//         name = nameSplit[0]

//         let firstCharacterOfName = nameSplit[0]

//         return firstPart + name + ' ' + firstCharacterOfLastName

//     }
// console.log(addressFormally('Ashley Cooper', true, true))     // 'Mrs. Ashley C.'
// console.log(addressFormally('Ryan Sheckler', true, false))    // 'Mr. Ryan S.'
// console.log(addressFormally('Hermione Granger', false, true)) // 'Ms. Hermione G.'



/**
 * Return the average of provided ages. If the age is negative, do not consider it in calculations.
 * @param {*} ages array of numbers 
 */
function averageAge(ages) {
    let sum = 0
    let negativeCount = 0
    for (age of ages) {
        if (age >= 0){
            sum += age
        }else{
            negativeCount++
        }
    }
    return sum / (age.length - negativeCount)
}
// console.log(averageAge([5, 10, 15]))  // 10
// console.log(averageAge([-10, -5, 5])) // 5



/**
 * Return a new array with only odd numbers inside.
 * @param {*} numbers Array of numbers
 */
function getOddNumbers(numbers) {
    let oddNumbers = []
    for (nr of numbers) {
        if (nr % 2 !== 0) {
            oddNumbers.push(nr)
        }
    }
    return oddNumbers
}
console.log(getOddNumbers([-5, 2, 10, 3])) // [-5, 3]
console.log(getOddNumbers([9]))            // []



/**
 * Return a new array where each number from the initial array is squared (multiplied by itself).
 * Except, if the number is a prime number (can only be divided by 1 and itself), then skip it.
 * PS! Number 1 is not a prime number.
 * To square a number, use function Math.pow(n, power) or double-star operator **
 * @param {*} numbers Array of numbers
 */
function getSquaredNonPrimes(numbers) {

}
// console.log(getSquaredNonPrimes([1,2,3]))       // [1]
// console.log(getSquaredNonPrimes([1,4,5,7,8]))   // [1, 16, 64]
// console.log(getSquaredNonPrimes([2,3,7,11]))    // []



/**
 * Return true if the array contains at least a single name with hyphen(-) in it, e.g. 'Matthias-Christopher'
 * P.S. Use String indexOf(text) method. It returns -1  if provided text is not found in the string.
 * @param {*} names Array of strings
 */
function containsComplexName(names) {

}
// console.log(containsComplexName(['Tyrion', 'Jacob', 'Sansa']))       // false
// console.log(containsComplexName(['Lily-Rose', 'Johnny', 'Vanessa'])) // true



/**
 * Return reversed text.
 * @param {*} text string
 */
function reverseText(text) {
    let reversed = ''
    for (let i = text.length - 1; i>=0; i--) {
        reversed += text[i]
    }
    return reversed
}
console.log(reverseText("ABC")) // 'CBA'


/**
 * Return an array of arrays (2-dimensional array), where each element in the inner arrays is set to initialValue.
 * @param {*} outerArrayElementCount number
 * @param {*} innerArrayElementCount number
 * @param {*} initialValue any
 */
function createTwoDimensionalArray(outerArrayElementCount, innerArrayElementCount, initialValue) {
    
}
// console.log(createTwoDimensionalArray(2, 3, '#')) // [ ['#', '#', '#'], ['#', '#', '#'] ]






















