const nbr = [3,5,0,10,4]
nbr.sort()
console.log(nbr) //! comparaison par alphabet

nbr.sort(
    (a,b) => a-b
)
console.log(nbr) //TODO : what does it mean