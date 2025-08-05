function areaPoligono(poligono, base, altura){    
    switch(poligono){
        case 'cuadrado':{
            altura = base
            console.log(`El area es de ${base * altura }`)
            break
        }

        case 'triangulo': {
            console.log(`El area es de ${(base * altura)/2}`)
            break
        }

        case 'rectangulo': {
            console.log(`El area es de ${base * altura}`)
            break
        }
    }
}

areaPoligono('triangulo', 3, 5)