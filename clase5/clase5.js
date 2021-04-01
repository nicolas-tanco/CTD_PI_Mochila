let films=["star wars", "totoro", "rocky","pulp fiction","la vida es bella"]
console.log(films[1])

let otrasPelis=[];
otrasPelis[0]=films[0].toUpperCase()
otrasPelis[1]=films[1].toUpperCase()
otrasPelis[2]=films[2].toUpperCase()
otrasPelis[3]=films[3].toUpperCase()
otrasPelis[4]=films[4].toUpperCase()

console.log(otrasPelis)

let cartoons=["toy story","finding Nemo","kung-fu panda","wally","fortnite"]
films.push(cartoons[0])
films.push(cartoons[1])
films.push(cartoons[2])
films.push(cartoons[3])
films.push(cartoons[4])

console.log(films)


films.pop()
console.log(films)

asiaScores=[8,10,6,8,10,6,7,9]
euroScores=[8,10,6,8,10,6,7,9]
function esIgual(n){
    return asiaScores[n]===euroScores[n]
}

console.log(asiaScores.toString()===euroScores.toString())