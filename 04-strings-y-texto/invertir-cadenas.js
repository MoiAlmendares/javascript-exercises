function inverted(palabra){
    let newPalabra = []
    console.log(palabra)
    palabra = palabra.split('')
    wordSize = palabra.length
    for(let i = 0; i < wordSize; i++){
        newPalabra.push(palabra.pop())
    }
    console.log(newPalabra.join(''))
}

inverted('Riñonera')