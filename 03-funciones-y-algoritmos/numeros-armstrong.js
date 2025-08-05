// Scientist number

function secretFunction(number){
    let digits = number.toString() //lo convierte a cadena
    let newDigits = [] 
    let finalNumber = []
    digits = digits.split('') //lo convierte en arreglo
    for(let digit of digits){
        newDigits.push(digit ** digits.length)  // potencia de cada dígito dependiendo del número
    }
    let suma = 0
    for(let digit of newDigits){
        suma += digit
    }
    
    for(let newDigit of newDigits){
        finalNumber += newDigit
    }

    return number == suma ? 'Armstrong' : 'No es Armstrong'
    
}

console.log(secretFunction(150))