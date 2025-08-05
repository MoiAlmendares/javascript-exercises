

function palindromo(frase){
    frase = frase.split('')
    frase = frase.filter(letra => letra!==' ')
    reverseFrase = frase.reverse()
    
    return reverseFrase==frase
    
}

console.log(palindromo('Ana lleva al oso la avellana'))