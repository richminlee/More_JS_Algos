
function countUniqueValues(arr){
    if(arr.length === 0){
        return 0;
    }
    let one = 0;
    let two = 1;
    let count  = 1;
    while (two !== arr.length){
        if(arr[one] === arr[two]){
            one++;
            two++;
        }
        else if (arr[one] !== arr[two]){
            count ++;
            one++;
            two++;
        }
    }
    return count;
}
console.log("countUniqueValues")
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([1,1,1,1,1,1,2]));
console.log(countUniqueValues([]));

function countUniqueValues2(arr){
    if(arr.length === 0){
        return 0;
    }
    let one = 0;
    let two = 1;
    while (two !== arr.length){
        if(arr[one] === arr[two]){
            two++;
        }
        else {
            one++;
            arr[one] = arr[two]
            two++;
        }
    }
    return one += 1;
}
console.log("countUniqueValues2")
console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues2([1,1,1,1,1,1,2]));
console.log(countUniqueValues2([]));