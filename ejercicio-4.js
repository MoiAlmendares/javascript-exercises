function compPalindromo(palabra){
    let palabraInvertida = palabra.split('').reverse().join('');
    
    if(palabra == palabraInvertida){
        return 'Es palíndromo';
    } else {
        return 'No es palíndromo';
    }
}

function compAnagrama(palabra2, palabra3){
    palabra2 = palabra2.toLowerCase().split('').sort().join('')
    palabra3 = palabra3.toLowerCase().split('').sort().join('')
    if(palabra2 == palabra3){ 
        return 'Es anagrama'
    }else{
        return 'No es anagrama'
    }
}

function compIsograma(palabra){
    // Convertir a minúsculas y dividir en caracteres
    let caracteres = palabra.toLowerCase().split('');
    
    // Crear Set para eliminar duplicados
    let caracteresUnicos = new Set(caracteres);
    
    // Si el tamaño del Set es igual a la longitud original, es isograma
    if(caracteres.length === caracteresUnicos.size){
        return 'Es isograma';
    } else {
        return 'No es isograma';
    }
}

let compPalabra = "pato"
console.log(compPalindromo(compPalabra))
console.log(compIsograma(compPalabra, "leche"))
