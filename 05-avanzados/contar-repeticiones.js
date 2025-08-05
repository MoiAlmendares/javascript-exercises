//Este programa cuenta la cantidad de palabras que se repiten en una lista
function countRepetition(list){
    setList = new Set(list)
    let contador = 0
    for(let original of setList){
        for(let repeticion of list){
            if(original == repeticion){
                contador++
            }
        }
        console.log(`La palabra ${original} aparece ${contador} veces.`)
        contador = 0
    }


}

countRepetition([1, 1, 1, 1, 2, 3, 2, 4, 2, 5])