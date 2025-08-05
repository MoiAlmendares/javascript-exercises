//Palabras diferente
const diffPalabras = (str1, str2) => {
    str1 = str1.toLowerCase().split('')
    str2 = str2.toLowerCase().split('')

    let out1 = []
    for(let letra of str1){
        
        if(!str2.includes(letra)){
            out1.push(letra)
        }
        
    }
    let out2 = []
    for(let letra of str2){
        
        if(!str1.includes(letra)){
            out2.push(letra)
        }
        
    }

    console.log(out1, out2)
}

diffPalabras('Manantial', 'Camaleon')