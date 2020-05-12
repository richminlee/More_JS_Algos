function addupto(n){
    let total =0;
    for (let i=1; i<=n; i++){
        total+=i;
    }
    return total;
}
let t1 = performance.now();
addupto(1000000000);
let t2 = performance.now();
console.log('Time Elapsed:${(t2-t1)/1000}seconds.')

// function ad+dition(n){
//     return n*(n+1)/2;
// }
// console.log(addition(3))