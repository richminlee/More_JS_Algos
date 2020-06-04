function disUnion(arr1, arr2){
    let obj1 = {};
    let obj2 = {};
    let newArr = [];
    for(let i of arr1){
        obj1[i] =  (obj1[i] || 0) +1;
    }
    for(let i of arr2){
        obj2[i] =  (obj2[i] || 0) +1;
    }
    for(let key in obj1){
        if (!(key in obj2)){
            newArr.push(Number(key));
        }
    }
    for(let key in obj2){
        if (!(key in obj1)){
            newArr.push(Number(key));
        }
    }
    return newArr;
}
console.log(disUnion([1,2],[2,1]))
console.log(disUnion([1,2,3],[4,5,6]))
console.log(disUnion([4, 1, 2, 3, 4], [1, 2, 3, 5, 5]))