const searchFor = {
    firstName: "Bob",
    age: 31
};

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// return a new list of objects containing the same key pair values
const output = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

function searchItems(oneItem, arrItems){

    let output = [];

    for(let key in arrItems){
        if (!(key in oneItem)){
            console.log(oneItem[key])
            // return false;
        }
        console.log(arrItems[key])
        if(oneItem[key] === arrItems[key]){
        }
    }
    return output;
}
console.log(searchItems(searchFor, items))