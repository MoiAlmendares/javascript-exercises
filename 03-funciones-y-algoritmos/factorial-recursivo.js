function secretFunction(numero){
    if(numero <= 1) return 1n;
    
    let resultado = 1n;
    for(let i = 2n; i <= BigInt(numero); i++){
        resultado *= i;
    }
    return resultado;
}
console.time('ahora')
console.log(secretFunction(90700).toString()); 
console.timeEnd('ahora')