function func(limit) {
    if (limit < 0) {
        return
    }
    console.log(limit)
    func(limit -1)
}

func()

function fibonacci(n) {
    
    let firstNumber = 0
    let secondNumber = 1
    let currentNumber = null

    for (let i = 2; i < n; i++ ) {
        currentNumber = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = currentNumber
    }
    return currentNumber
}

console.log(fibonacci(9))

function fibonacciRecursive(n) {
    if (n <= 1) {
        return n
    }

    return fibonacciRecursive(n - 2) +fibonacciRecursive(n - 1)
}


fibonacciRecursive(10)