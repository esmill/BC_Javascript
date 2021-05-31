// function findSum(numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {


//         for (let nr of numbers) {
//             sum += nr
//         }
//     }

//     return sum
// }

// // console.log(findSum([1, 5, 10]))

// for (let i = 0; i <= 100; i++) {
//     console.log(i)
// }

// // << shifted right

// let nr = 8
// let shifted = nr >> 2
// console.log(shifted)


// let arr = [1, 9, 5]
// arr.sort(function(a,b) {
//     return a-b
// })
// console.log(arr)


// function greetEveryone(names) {
//     for (let i = 0; i <names.length; i++) {
//         console.log('Hello' + names[i])
//     }
// }

// let arr = [1, 2, 3]

// class Array {
//     constructor() {
//         this.collection = []

//     }


//     selectionSort() {
//         // selection sort
//         for (let i = 0; i < this.collection.length; i++){
//             let min = this.collection.length[i]
//             let ri = -1
//             for (let j = i; j < this.collection.length; j++) {
//                 if (this.collection[j] < min) {
//                     min = this.collection[j]
//                     ri = j
//                 }
//             }

//             if (ri !== -1) {
//                 let replacable = this.collection[i]
//                 this.collection[i] = min
//                 this.collection[ri] = replacable

//             }
//         }
//     }
            

//     bubbleSort() {
//         let sorted = true
//         do {
//             for (let i = 0; i < this.collection.length - 1; i++) {
//                 if (this.collection[i] > this.collection[i +1]) {
//                     let original = this.collection[i]
//                     this.collection[i] = this.collection[i +1]
//                     this.collection[i + 1] = original
//                     sorted = false
//                 }
//             }
//         } while(!sorted)
//     }
// }
        

// let myArray = new Array()
// myArray.push(9)
// myArray.push(4)
// myArray.push(1)
// myArray.sort(5)
// myArray.bubbleSort()
// console.log(myArray)


class Dog{

    constructor() { }

    eat() {
        console.log('nom nom nom')
    }

    static talk() {
        console.log('Woof')
    }
}


new Dog()
