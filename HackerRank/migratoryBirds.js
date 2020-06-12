'use strict';
function migratoryBirds(arr) {
let arrObj = {};
let finalKey = 0;//1
let finalVal = 0;//1
for ( let i = 0; i < arr.length; i++){
  if(arrObj[arr[i]]){
    arrObj[arr[i]]++
  }else{
    arrObj[arr[i]] = 1;
  }
}
for ( let i in arrObj){
  if (arrObj[i] > finalVal || arrObj[i] === finalVal && parseInt(i) < finalKey){
    finalVal = arrObj[i];
    finalKey = parseInt(i);
  }

}
return finalKey;
}
console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))
/*
{
  1:1,
  5:3
  4:3
  3:1
}
interate through object and if the value is higher then i
ll store it in a var and if there are more than one 
var object for everything
var object for highest value, but lowest key
for loop to create the object
for loop to check each object's value
  ifcheck to find the highest value and store the property
    if check if the highest value is equal && the key is lower than the store'd key


if highest value store the key 
if there are more that one go through [] and if check for the lowest number




*/