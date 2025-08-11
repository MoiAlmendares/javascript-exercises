// ========================================
// 🔧 CALCULADORA DE TRANSISTOR BJT
// ========================================

function transistorCalcultor(betaDC, RE, RC, R1, R2, VCC){
    console.log("🔧 ========================================");
    console.log("   📊 ANÁLISIS DE TRANSISTOR BJT");
    console.log("========================================");
    
    let RENTBASE = betaDC * RE

    rigidez = RENTBASE >= 10 * R2

    let VB = 0

    if(rigidez){
        VB = (R2/(R1 + R2)) * VCC 
        console.log('✅ Es rigido')
    }else{
        VB = (paralelos(R2, RENTBASE)/(R1 + paralelos(R2, RENTBASE)))*VCC
        console.log('⚠️  No es rigido')
    }

    let VE = VB - 0.7
    let IE = VE/RE
    let VC =  VCC - IE*RC
    let VCE = VC - VE
    let IC = IE

    console.log(`\n⚡ RESULTADOS:`)
    console.log(`   VB = ${VB.toFixed(3)} V`)
    console.log(`   VE = ${VE.toFixed(3)} V`)
    console.log(`   IE = ${formatearCorriente(IE)} `)
    console.log(`   VC = ${VC.toFixed(3)} V`)
    console.log(`   VCE = ${VCE.toFixed(3)} V`)
    console.log(`   IC = ${formatearCorriente(IC)} `)
    console.log(`   RENTBASE = ${RENTBASE.toLocaleString()} Ω`)
    console.log("========================================\n");
}

function paralelos(val1, val2){
    let result = 0
    result = ((val1*val2)/(val1+val2))  // Fórmula correcta: (R1*R2)/(R1+R2)
    return result
}

// Función para mostrar corriente con unidad apropiada
function formatearCorriente(corrienteEnAmperios) {
    if (corrienteEnAmperios >= 1) {
        return `${corrienteEnAmperios.toFixed(3)} A`;
    } else if (corrienteEnAmperios >= 0.001) {
        return `${(corrienteEnAmperios * 1000).toFixed(3)} mA`;
    } else {
        return `${(corrienteEnAmperios * 1000000).toFixed(3)} μA`;
    }
}

// 🚀 Parámetros del transistor
let betaDC = 150
let RE = 50
let RC = 330
let R1 = 12000
let R2 = 3300
let VCC = 8

transistorCalcultor(betaDC, RE, RC, R1, R2, VCC)

console.log(paralelos())