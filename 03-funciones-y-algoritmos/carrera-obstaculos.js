//Carrera de obstáculos

const pistaDeObstaculos = (corrida = 'run', pista = '_') => { 
    try{
        for(let item of corrida){
                if(typeof item != 'string'){
                    throw new Error('Solo se aceptan cadenas')
                }
            }

        for(let item of pista){
                if(typeof item != 'string'){
                    throw new Error('Solo se aceptan cadenas')
                }
            }
        }catch(error){
            console.log('Error:', error)
            return
        }

        
    
    let sizeCorrida = 0
    if(corrida.length > pista.length){
        sizeCorrida = corrida.length
    }else{
        sizeCorrida = pista.length
    }
    
    let result = []
    for(let i = 0; i < sizeCorrida; i++ ){
        let step = corrida[i]
        let place = pista[i]
        switch(step + place){
            case 'run_' : {
                result[i] = '_'
                break
            } 

            case 'run|': {
                result[i] = '/'
                break
            }

            case 'jump_' : {
                result[i] = 'X'
                break
            }

            case 'jump|' : {
                result[i] = '_'
                break
            }
        }
    }
    
    return result
}

let corrida2 = ['run', 'run', 'jump', 'run', 'jump', 'run', 'jump', 'jump']
let pista2 = ['_', '|', '|', '_', '|', '_', '|', '_']

console.log(pistaDeObstaculos(corrida2, pista2 ))