
function longestSubstring(str){
    let count = 0;
    let idx = 0;
    let newArr = [];
    let strObj = {};
    let subArr = [];
    let str1 = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] in strObj){
            newArr.push(count);
            subArr.push(str1);
            count = 1;
            i = idx;
            str1 = str[i];
            delete strObj[str[i]];
            idx++;
        }
        else{
            str1+=str[i];
            strObj[str[i]] =  (strObj[str[i]] || 0) +1;
            count++;
        }
        newArr.push(count);
        subArr.push(str1);
    }
    let max =newArr[0];
    let maxIdx = 0;
    for(let i in newArr){
        if(newArr[i] > max){
        max = newArr[i];
        maxIdx = i;
        }
    }
    console.log(max);
    return subArr[maxIdx];
}
console.log(longestSubstring("dvadf"));