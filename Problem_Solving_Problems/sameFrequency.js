function sameFrequency(intone, inttwo){
    let inte1 = intone.toString();
    let inte2 = inttwo.toString();
    if(inte1.length != inte2.length){return false;}
    let obj1 = {};
    let obj2 = {};
    for (let i of inte1){
        obj1[i] = (obj1[i] || 0) +1;
    }
    for (let i of inte2){
        obj2[i] = (obj2[i] || 0) +1;
    }
    for(let key in obj1){
        if (obj1[key] != obj2[key]){
            return false;
        }
    }
    return true;
}
console.log(sameFrequency(182,281));
console.log(sameFrequency(34,14));
console.log(sameFrequency(3589578,5879385));
console.log(sameFrequency(22,222));
console.log(sameFrequency(987654,446789));