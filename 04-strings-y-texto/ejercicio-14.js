"use strict"

function cienToZero(numero = 0){
    numero <= 0 ? console.log(0) : console.log(numero) & cienToZero(numero - 1)
    }



//Factorial

function factorial(numero = 0){
    if(numero <= 1){
        return 1
    }
    return numero * (numero - 1)
}

console.log(factorial(5))