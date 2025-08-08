
//Calcula la resistencia equivalente para encontrar la Rent(base)
function resistenciaEquivalenteParaleloAlterna(...resistencias){
    if(resistencias.some(r => r <= 0)) {
        throw new Error("Las resistencias deben ser positivas")
    }
    
    let suma = 0
    for(let resistencia of resistencias ){
        suma += 1/resistencia
    }

    return 1/suma
}

//r1 = 0
//r2 = 0
//r3 = 0

console.log(resistenciaEquivalenteParaleloAlterna(r1 = 1,r2 = 1 ,r3 = 1))

//Calcula la resistencia rc(CA) usando rC(CD) y rL(CD)
const rc = (rC, rL) =>  {return ((rC*rL)/(rC + rL))}
let rC = 1000
let rL = 5000

console.log(`Rc = ${rc(rC, rL)}`)

//Calcula el voltaje de salida
function vSalida(Av, Vb){Av*Vb}

//Calcula Vb

function calcVbz(){

}