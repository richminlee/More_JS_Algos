function deleteProducts(ids, m) {
  let obj1 = {};
  let x = 0;
  let newArr = [];
  for(let i of ids){ 
    obj1[i] =  (obj1[i] || 0) +1;
  }
  for(let i in obj1){
    newArr.push(i)
  
    while (x < m){
      if(obj1[i] === m){
        obj1[i]-+ x;
        x += x
      }else if(obj1[i] <== ){
        x++

      }
    }
    if(obj[i] !== 0){
      newArr.push(i)
    }
  }
return newArr.length;
}
console.log(deleteProducts([1,3,1,2,1,2],2));