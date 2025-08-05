function fibonacci (){
    let sucesion = [0, 1]
    for(let i = 2; i <= 50; i++){        
        let ultimo = sucesion[sucesion.length - 1]
        let penultimo = sucesion[sucesion.length - 2]
        sucesion.push(ultimo + penultimo)
    }
    
    console.log(sucesion)
}   
fibonacci()