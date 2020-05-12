function isSubsequence(str1, str2){
    let p1 = 0;
    let p2 = 0;
    while(p2 != str2.length){
        if(p1 == str1.length-1 && str1[p1] == str2[p2]){
            return true;
        }
        else if(str1[p1] == str2[p2]){
            p1++;
            p2++;
        }
        else{
            p2++
        }
    }
    return false;
}
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "acb"));
console.log(isSubsequence("abc", "abracadabra"))