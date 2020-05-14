function sums(arr, k){
  let p1 = 0;
  let p2 = 1;
  let total = arr[p1];
  let curOutput = [arr[p1]];
  let totalOutput = [];
  while(p2< arr.length){
    if(total === k){
      totalOutput.push([...curOutput]);
    }
    total += arr[p2];
    if(total <= k){
      curOutput.push(arr[p2]);
      p2++;
    }
    else{
      p1 ++;
      p2 = p1+1;
      total = arr[p1];
      curOutput = [arr[p1]]
    }
  }
  return totalOutput;
}
console.log(sums([2,5,3,6,7,0,0,23,12], 16))