let current_year = 2021;

let current_month = "april"

console.log(current_month)


let isSunny = true
let isSpring = true
let isRaining = false
let isHumid = true
let isSummerSoon = isSunny && isSpring
let itsGoingToBeThunder = isRaining || isHumid


if (isSummerSoon){
    console.log('Lets get the beach body ready!')
} else if(itsGoingToBeThunder){
    console.log('Im going to need my umbrella!')
} else if (5 == 5) {
console.log('hi!')
} else {
    console.log('What is the weather then?')
}

// for (let i = 0; i < 10; i = i + 1){
//   console.log(i)
// }

for (let i = 0; i < 10; i += 5){
    console.log(i)
}

let seasons = ['Winter', 'Spring', 'Summer', 'Autumn']
console.log(seasons.length)
console.log(seasons[1])
console.log(seasons[3])

seasons[1] = 'The seasons of the flowers'
console.log(seasons)

for (let i = 0; i < seasons.length; i++) {
    console.log(seasons[i])
}

// For-Of loop

let numbers = [1, 2, 3, 4, 5]
let sum = 0
for (nr of numbers) {
    sum += nr
}
console.log(sum)


