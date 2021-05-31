const OPERATION_DIVISION        = 'divide'
const OPERATION_ADDITION        = 'addition'
const OPERATION_SUBTRACTION     = 'asubtraction'
const OPERATION_MULTIPLICATION  = 'multiplication'
const OPERATION_EQUAL           = 'equals'


const MAX_NUMBERS_AFTER_DECIMAL_POINT = 4
const MAX_INPUT_LENGTH = 15
const ERROR_MSG_INPUT_TOO_LONG = 'Too long!'

let firstNumber     = ''
let secondNumber    = ''
let operation       = null
let repeatingOp     = null
let commaEnabled    = false

let result = document.getElementById('displayedResult')

function setValue(button) {

    if (result.iinerText === ERROR_MSG_INPUT_TOO_LONG) {return}
    if (tooLong(firstNumber) || tooLong(secondNumber)) {
        return
    }

    if (! operation) {
        if (firstNumber.length === 0 && button.innerText === '0'){return}
        firstNumber += button.innerText
        result.innerText = firstNumber
    } else {
        if (secondNumber.length === 0 && button.innerText === '0'){return}
        secondNumber += button.innerText
        result.innerText = secondNumber
    }
}

function tooLong(input) {
    return input.length > MAX_INPUT_LENGTH
}

function setOperator(op) {


    if (repeatingOp  && repeatingOp !== op) {
        starNewOperation(op)
        repeatingOp = null
        return
    }

    if (firstNumber.length > 0 && secondNumber.length > 0 && operation) {
        switch (operation) {
            case OPERATION_DIVISION:
                firstNumber = (parseFloat(firstNumber) / parseFloat(secondNumber))
                break;
            case OPERATION_ADDITION:
                firstNumber = (parseFloat(firstNumber) + parseFloat(secondNumber))
                break; 
            case OPERATION_SUBTRACTION:
                firstNumber = (parseFloat(firstNumber) - parseFloat(secondNumber))
                break; 
            case OPERATION_MULTIPLICATION:
                firstNumber = (parseFloat(firstNumber) * parseFloat(secondNumber))
                break; 
            default:
                alert('Unrecognizable operation' + operation)
        } 
        firstNumber = parseFloat(firstNumber).toFixed(MAX_NUMBERS_AFTER_DECIMAL_POINT)
        
        result.innerText = firstNumber
        
    }

    if ( op !== OPERATION_EQUAL) {
        starNewOperation(op)
    } else {
        repeatingOp = op
    }
    
    if (result.iinerText === ERROR_MSG_INPUT_TOO_LONG) {return}
    if (tooLong(firstNumber) || tooLong(secondNumber)) {
        result.innerText = ERROR_MSG_INPUT_TOO_LONG
    }
}

function setCommaEnabled(enabled) {
    if (enabled && !commaEnabled && result.innerText.indexOf ('.') === -1) {
        result.innerText += '.'
        secondNumber.length === 0 ? firstNumber += '.' : secondNumber += '.'
    }
    commaEnabled = enabled
}

function starNewOperation() {
    operation = op
    secondNumber = ''
    setCommaEnabled(false)
}      


function reset() {
    starNewOperation(null)
    firstNumber = ''
    result.inerText = ''
}







































// let firstNumber = null
// let secondNumber = null
// let operator = null

// function setValue(nr) {
//     let res = document.getElementById('displayedResult')
//     if (!firstNumber) {
//         firstNumber= nr
//         res.value = nr
//     } else if (firstNumber) {
//         if (!operator) {
//             firstNumber = firstNumber.toString() + nr.toString()
//             res.value = firstNumber
//         } else {
//             if(!secondNumber) {
//                 secondNumber = nr
//                 res.value = secondNumber
//             } else { secondNumber = secondNumber.toString() + nr.toString() 
//                 res.value = secondNumber

//             }   
//         }
//     }
// }

// function setOperator(op) {
//     let res = document.getElementById('displayedResult')

//    if (firstNumber && secondNumber && operator) {
//     let result = doOperator()
//     firstNumber = result
//     secondNumber = null
//     res.value = firstNumber
//    }
//     operator = op
// }

// function doOperator() {

//     let fn = parseInt(firstNumber)
//     let sn = parseInt(secondNumber)
//     switch(operator) {
//         case '+' :
//             return fn + sn
//             case '-' :
//                 return fn - sn
//                     case '*' :
//                         return fn * sn
//                             case '/' :
//                              return fn / sn

//     }
// }

// function reset() {
//     starNewOperation(null)
//     firstNumber = ''
//     result.inerText = '0'
// }










