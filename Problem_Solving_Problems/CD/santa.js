const students = [
    {
        firstName: "FN1",
        lastName: "LN1",
        habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
        ],
    },
    {
        firstName: "FN2",
        lastName: "LN2",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "FN3",
        lastName: "LN3",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "FN4",
        lastName: "LN4",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];



function naughtynaughty(arr, habit){
    var output = [];
    var namestring = "";
    for(var i = 0; i < arr.length; i++){
        var student = arr[i].habits;
        for(var j = 0; j < student.length; j++){
            if(student[j] == habit){
                namestring = `${arr[i].firstName} ${arr[i].lastName}`;
                output.push(namestring);
            }
        }
    }
    return output;
}
console.log(naughtynaughty(students, "doesn't wash car"))

function okthenrichard(arr,habit){
    var output = [];
    for(var i = 0; i < arr.length; i++){
        var student = arr[i].habits;
        const result = student.filter(hab => hab == habit);
        if(result > 0){
            output.push(`${arr[i].firstName} ${arr[i].lastName}`);
        }
    }
    return output;
}