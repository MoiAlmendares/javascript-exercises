/*Dificultad extra - ejercicio 2*/

function multiplos(cadena1, cadena2){

    for(let i = 0; i <=100; i++){
        
        if(i % 3 == 0 && i % 5 == 0){
            console.log(`${cadena1} y ${cadena2}`); // O combinar ambas cadenas
        }else if(i % 3 == 0){
            console.log(cadena1);
        }else if(i % 5 == 0){
            console.log(cadena2);
        }else{
            console.log(i); // Solo se ejecuta si no es múltiplo de 3 ni de 5
        }
    }
}

multiplos("arroy", "pollo")