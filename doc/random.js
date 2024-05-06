const alleatoir = ()=>{
    return Math.floor(Math.random()*10)
}
/**
 * La fonction Math.random() renvoie un nombre 
 * flottant pseudo-aléatoire compris dans l'intervalle [0, 1[ 
 * (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu) 
 * selon une distribution approximativement uniforme sur cet intervalle. Ce nombre 
 * peut ensuite être multiplié afin de couvrir un autre intervalle. La graine (seed) 
 * du générateur est choisie par l'algorithme et ne peut pas être choisie 
 * ou réinitialisée par l'utilisateur.
 */
function getRandom(){
    for(let i=1; i<20; i++)
        console.log(alleatoir())
}
getRandom()