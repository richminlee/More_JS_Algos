function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let recMin = 0;
  let recMax = 0;
  let newArr = [];
  for(let i of scores){
    if(i > max){
      max = i;
      recMax ++;
    }
    else if( i < min){
      min = i;
      recMin ++;
    }
  }
  newArr.push(recMax);
  newArr.push(recMin);
  return newArr;

}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));