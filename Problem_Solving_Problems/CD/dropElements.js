function dropElements(arr, func) {
    let newArr = [];
    for (let i of arr){
        if(func(i) == true){
            newArr.push(i);
        }
    }
    return newArr;
  }
  
  console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));