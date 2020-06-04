function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;

  arr = arr.sort()
  for(let i = 0; i < arr.length - 1; i ++) {
      minSum += arr[i];
  }
  for (let j = 1; j < arr.length; j++) {
      maxSum += arr[j];
  }

  console.log(minSum, maxSum);
}

miniMaxSum([1,2,3,4,5])
miniMaxSum([7, 69, 2, 221, 8974])