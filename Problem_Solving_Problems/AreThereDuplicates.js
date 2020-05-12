const areThereDuplicates = function(){
    let obj1 = {};
    for(let i = 0; i<arguments.length; i++){
        let j = arguments[i];
        obj1[j] = (obj1[j] || 0) +1;
    }
    for (let key in obj1){
        if(obj1[key] >= 2){
            return true;
        }
    }
    return false;
}
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a","b","c","a"));




function areThereDuplicates(...args) {
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }
  