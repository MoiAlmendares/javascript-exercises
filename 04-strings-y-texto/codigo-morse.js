//Codigo morse

const morseCode = (palabra) => {
    
    palabra = palabra.toLowerCase()

    const alfabeto = {
        'a': '.- ',
        'b': '-... ',
        'c': '-.-. ',
        'd': '-.. ',
        'e': '. ',
        'f': '..-. ',
        'g': '--. ',
        'h': '.... ',
        'i': '.. ',
        'j': '.--- ',
        'k': '-.- ',
        'l': '.-.. ',
        'm': '-- ',
        'n': '-. ',
        'o': '--- ',
        'p': '.-- .',
        'q': '--.- ',
        'r': '.-. ',
        's': '... ',
        't': '- ',
        'u': '..- ',
        'v': '...- ',
        'w': '.-- ',
        'x': '-..- ',
        'y': '-.-- ',
        'z': '--.. ',
        
        // Números
        '0': '----- ',
        '1': '.---- ',
        '2': '..--- ',
        '3': '...-- ',
        '4': '....- ',
        '5': '..... ',
        '6': '-.... ',
        '7': '--... ',
        '8': '---.. ',
        '9': '----. ',
        
        // Signos de puntuación comunes
        '.': '.-.-.- s',
        ',': '--..-- ',
        '?': '..--.. ',
        "'": '.----. ',
        '!': '-.-.-- ',
        '/': '-..-. ',
        '(': '-.--. ',
        ')': '-.--.- ',
        '&': '.-... ',
        ':': '---... ',
        ';': '-.-.-. ',
        '=': '-...- ',
        '+': '.-.-. ',
        '-': '-....- ',
        '_': '..--.- ',
        '"': '.-..-. ',
        '$': '...-..- ',
        '@': '.--.-. ',
        ' ': ' ' // Espacio entre palabras
    };

    let wordToArray = palabra.split('')
    let morseArray = []

    for(let letra of wordToArray){
        morseArray.push(alfabeto[letra])
        
    }
    console.log(morseArray.join(''))

}

morseCode('Palabra de prueba')