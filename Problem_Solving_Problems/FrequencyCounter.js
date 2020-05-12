// function validAnagram(str1, str2){
//     let obj1 = {};
//     let obj2 = {};
//     for(let i = 0; i < str1.length; i++){
//         obj1[i] =  str1[i];
//     }
//     for(let i = 0; i < str2.length; i++){
//         obj2[i] =  str2[i];
//     }
//     for(let i = 0; i < str1.length; i++){
//         if(obj1[i] != obj2[str2.length-(1+i)]){
//             console.log("false")
//             return false;
//         }
//     }
//     console.log("true")
//     return true;
// }
function validAnagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    let obj1 = {};
    let obj2 = {};
    for(let i of str1){
        obj1[i] =  (obj1[i] || 0) +1;
    }
    for(let i of str2){
        obj2[i] =  (obj2[i] || 0) +1;
    }
    for(let key in obj1){
        if (!(key in obj2)){
            return false;
        }
        if(obj2[key] !== obj1[key]){
            return false;
        }
    }
    return true;
}

validAnagram("hello", "elloh")



