// function fib(num){
//     let number = 1;
//     let nthnum = [1];
//     function helper(fibo){
//         if (fibo === 1){
//             return number;
//         }
//         nthnum.push(number);
//         number += nthnum[nthnum.length-2];
//         return helper(fibo-1);
//     }
//     helper(num-1);
//     return number;
// }

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
console.log(fib(28));