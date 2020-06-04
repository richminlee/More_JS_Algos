function palindrome(str){
    let obj = {};
    let count = 0;
    for(let i of str){
        obj[i] =  (obj[i] || 0) +1;
    }
    if(str.length % 2 === 0){
        for (let key in obj){
            if(obj[key] % 2 !== 0){
                return false;
            }
        }
    }
    if(str.length % 2 !== 0){
        for(let key in obj){
            if(obj[key] % 2 !== 0){
                count++;
            }
        }
        if(count > 1){
            return false;
        }
    }
    return true
}
console.log(palindrome("aabbccdde"))
console.log(palindrome("bcda"))
console.log(palindrome("racecar"))