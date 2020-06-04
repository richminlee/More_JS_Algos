function honor(str, arr){
    let newArr = [];
    let idx = 0;
    if (arr.length == 0){
        return newArr;
    }
    for (let i in arr){
        let lName = "";
        let fName = "";
        for (let j in arr[i]){
            if(arr[i][j] == ","){
                idx = Number(j);
            }
        }
        for (let k = 0; k<idx; k++){
            lName += arr[i][k];
            console.log(lName);
        }
        for (let h = idx+2; h < arr[i].length; h++){
            fName += arr[i][h];
            console.log(fName);
        }
        
        newArr.push((str+" "+fName+" "+lName));
    }
    return newArr;
}
// Inputs
const honorific1 = "Mr.";
const names1 = [];
// Output: []

// Inputs
const honorific2 = "Sir";
const names2 = ["John, Elton", "Mckellen, Ian"];
// Output: ["Sir Elton John", "Sir Ian Mckellen"]

// Inputs
const honorific3 = "Dr.";
const names3 = ["Wright, Jane"];
// Output: ["Dr. Jane Wright"]
console.log(honor(honorific2, names2));
