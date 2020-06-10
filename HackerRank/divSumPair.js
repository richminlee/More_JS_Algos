// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {
  let i = 0;
  let j = 1;
  let count = 0;
  while (i < n -1){
    if((ar[i] + ar[j]) % k === 0){
      count++;
      j++
        }else if(j < n){
      j++;
    }else{
      i++;
      j = i + 1;
    }
  }
  return count;

}
console.log(divisibleSumPairs(6,3,[1, 3, 2, 6, 1, 2]))