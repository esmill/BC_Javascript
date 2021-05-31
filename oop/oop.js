class Animal {

    constructor(age, color, weight) {
        this.age    = age
        this.color  = color
        this.weight = weight
    }

    talk() {
        return 'The animal makes some sounds...'
    }
}

class AnimalWithBreed extends Animal {
    
    constructor(age, color, weight, breed) {
        super(age, color, weight)
        this.breed = breed
    }
}

class Dog extends AnimalWithBreed {

    constructor(age, color, weight, breed) {
        super(age, color, weight, breed)
    }

    talk() {
        return 'Woof!'
    }

    rideOnHippo(hippo) {
        let hippoSound = hippo.talk()
        if (!hippo.isPeaceful) {
            hippo.isPeaceful = true
        }
        console.log('Hippo makes sound ' + hippoSound)
        console.log('The dog makes sound ' + this.talk())
        console.log('Everyone is happy everafter!')
    }
}

class Hippo extends Animal {

    constructor(age, color, weight, isPeaceful) {
        super(age, color, weight)
        this.isPeaceful = isPeaceful
    }

    talk() {
        return 'GROWOWWLWLL!!!'
    }
}

class Cat extends AnimalWithBreed {

    constructor(age, color, weight, breed, hasClaws) {
        super(age, color, weight, breed)
        this.hasClaws = hasClaws
    }

    talk() {
        return 'Meow'
    }
}

class Direction {
    constructor(dir) {
        this.dir = dir
    }
}

class CareGiver {
    constructor(name, age, yearsOfExeperience) {
        this.name = name
        this.age = age
        this.yearsOfExeperience = yearsOfExeperience
    }

    introduce() {
        return `Hello! My name is ${this.name}, and I am ${this.age} years old.\n
                I have ${this.yearsOfExeperience} years of experience.`
    }
}

class CaregiverInfo {

    constructor(personName, personAge, personYearsOfExperience) {
        this.personName = personName
        this.personAge  = personAge
        this.personYearsOfExperience = personYearsOfExperience
    }
}

class NationalPark {
    
    constructor(name) {

        this.name = name

        this.southHabitat = []
        this.westHabitat  = []
        this.northHabitat = []
        this.eastHabitat  = []
        this.unassignedAnimals = []

        this.availableCaregivers = []
        this.busyCaregivers = []
    }

    assignCaregiverToPark(careGiverInfo) {
        let caregiver = new CareGiver(careGiverInfo.personName, careGiverInfo.personAge, careGiverInfo.personYearsOfExperience)
        this.availableCaregivers.push(caregiver)
    }

    putAnimalToHabitat(dirObject, animal) {
        let dir = dirObject.dir.toUpperCase()
        let caregiver = this.availableCaregivers.pop()

        if (!caregiver) {
            console.log('No available caregivers found.')
            return
        }
        this.busyCaregivers.push(caregiver)

        switch(dir) {
            case 'NORTH':
                this.northHabitat.push(animal)
                break
            case 'SOUTH':
                this.southHabitat.push(animal)
                break
            case 'WEST':
                this.westHabitat.push(animal)
                break
            case 'EAST':
                this.eastHabitat.push(animal)
                break
            default:
                this.unassignedAnimals.push(animal)
        }
        console.log(`Animal of color ${animal.color} is put into the ${dir} habitat.`)
    }

}

let np = new NationalPark('Yellow Stone')

let caregiverInfoOne = new CaregiverInfo('Albert', 70, 33)
let caregiverInfoTwo = new CaregiverInfo('Hoffman', 60, 55)
np.assignCaregiverToPark(caregiverInfoOne)
np.assignCaregiverToPark(caregiverInfoTwo)



let dog   = new Dog(10, 'brown', 20, 'Bloodhound')
let cat   = new Cat(5, 'white', 10, 'Siam', true)
let hippo = new Hippo(40, 'gray', 15, true)
np.putAnimalToHabitat(new Direction('north'), dog)
np.putAnimalToHabitat(new Direction('north'), cat)
np.putAnimalToHabitat(new Direction('south'), hippo)


let canvas = document.getElementById('myCanvas')
let ctx    = canvas.getContext('2d')


const CENTER_POINT = {
    X: canvas.width  / 2,
    Y: canvas.height / 2
}

class Circle {

    constructor(middleX, middleY, radius) {
        this.middleX = middleX
        this.middleY = middleY
        this.radius  = radius
    }

    setColor(color) {
        this.color = color
    }

    draw() {
        ctx.beginPath()
        if (this.color) {
            ctx.fillStyle = '#ff0000'
        }
        ctx.arc(this.middleX, this.middleY, this.radius, 0, 2 * Math.PI, false)
        // ctx.fill()
        ctx.stroke()
    }
}


for (let i = 0; i < 100; i++) {
    let randomX = Math.floor(Math.random() * canvas.width)
    let randomY = Math.floor(Math.random() * canvas.height)
    let randomRadius = Math.floor(Math.random() * 100)
    let circle = new Circle(randomX, randomY, randomRadius)
    circle.draw()
}









class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

let newMap = new Map()
newMap.set(123, new Person('Geralt', 'Rooney', '40'))

let person = newMap.get(123)
console.log(person)