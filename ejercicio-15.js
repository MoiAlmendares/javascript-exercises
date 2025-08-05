// Scientist number

function secretFunction(number){
    let digits = number.toString()
    let newDigits = []
    let finalNumber = []
    digits = digits.split('')
    for(let digit of digits){
        newDigits.push(digit ** digits.length)  // Agregar '25' a cada dígito
    }

    newDigits = newDigits.join('')

    for(let newDigit of newDigits){
        finalNumber += newDigit
    }
    console.log(finalNumber)
}

secretFunction(23)