function stockPairs(stocksProfit, target) {
    let count = 0;
    for (let i = 0; i < stocksProfit.length; i++ ){
        for (let j = i+1; j < stocksProfit.length; j++){
            if(stocksProfit[i] + stocksProfit[j] == target){
                count++;
            }
        }
    }
    return count;
}
// function balancedSum(arr) {
//     let sum = 0;
//     let leftsum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(leftsum == sum - leftsum - arr[i]){
//             return i;
//         }
//         leftsum += arr[i];
//     }
// return 1;
// }
// console.log(balancedSum([4,2,2,3,3]))