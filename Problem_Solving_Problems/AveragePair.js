function averagePair(arr, target){
    if(arr.length < 2) {
        return false;
    }
    let goal = target*2;
    let p1 = 0;
    let p2 = arr.length-1;
    while(p2 > p1){
        if(arr[p1] + arr[p2] == goal) {
            return true;
        }
        else if(arr[p1] + arr[p2] > goal) {
            p2--;
        }
        else {
            p1++;
        }
    }
    return false;
}
console.log(averagePair([1,2,3],2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([-1,0,3,4,5,6],4.1));
console.log(averagePair([],4));
