'use strict';
function numPlayers(k, scores) {
  let count = 0;
  for(let i of scores){
    if(scores.length === k && i !== 0){
      return k;
    }
  }
    let sortedScores = scores.sort(function(a, b){return b-a});
    for (let i =0; i < k; i++){
      if(sortedScores[i] !== 0){
        count ++;
      }
    }
  
return count
}
console.log(numPlayers(5,[4,5,2,2,3,4,5]));