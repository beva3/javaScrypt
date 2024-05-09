function majuscule(morceau,...valeur){
    let str =''
    for(let i in morceau){
        console.log(morceau[i],valeur[i])
        str += morceau[i] + (valeur[i] || '').toUpperCase()
    }
    return str
}
/**
 * j'ai pas compris
 */
let test = majuscule('rakoto mikalo')
console.log(test)