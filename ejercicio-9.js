//Convierte de decimal a binario
const binarioDecimal = (numero) => {
    let binario = []
    for(let i = numero; i >= 1; i = Math.floor(i/2)){
        if(i%2 == 0){
            binario.unshift(0)
        }else if(i%2 != 0)
            binario.unshift(1)
    }
    
    return binario
}
console.log(binarioDecimal(255))