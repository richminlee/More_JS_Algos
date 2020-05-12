// function mergeSortedArrays (arr1, arr2){
//     let newArr =[];
//     while(arr1.length != 0 || arr2.length != 0 ){
//         if (arr1[0] < arr2[0]) {
//             newArr.push(arr1.shift());
//         }
//         else{
//             newArr.push(arr2.shift());
//         }
//     }
//     return newArr;
// }
// console.log(mergeSortedArrays([1,2,6,7,8],[4,5,7,8,9]))


function mergeSort(arr){
    if (arr.length < 2) return arr;
    let arr1 = arr.slice(0, Math.floor(arr.length/2))
    let arr2 = arr.slice(Math.floor(arr.length/2))
    return mergeSortedArrays(mergeSort(arr1), mergeSort(arr2))
}

function mergeSortedArrays (arr1, arr2){
    let newArr =[];
    while(arr1.length != 0 || arr2.length != 0 ){
        if (arr1[0] < arr2[0]) {
            newArr.push(arr1.shift());
        }
        else{
            newArr.push(arr2.shift());
        }
    }
    return newArr;
}
console.log(mergeSort([1,4,7,5,3,2,8,5,3,2,6,9,3,1]))