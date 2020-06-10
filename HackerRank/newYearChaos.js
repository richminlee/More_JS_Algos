function minimumBribes(q) {
  let count = 0;
  let obj = {};
  for(let i = 0; i < q.length; i++){
    if(q[i] > q[i+1]){
      if(obj[q[i]] !== undefined){
        obj[q[i]]++;
        if(obj[q[i]] > 2){
          console.log("Too chaotic")
          count = 0;
          break;
        }
      }else{
        obj[q[i]] = 1;
      }
      var temp = q[i];
      q[i] = q[i+1];
      q[i+1] = temp;
      i=-1;
      count++;
    }
  }
  if(count !== 0){
  console.log(count)
  }
}
minimumBribes([2,5,1,3,4]);