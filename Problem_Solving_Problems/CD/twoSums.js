function twoSums(nums,target){
    let p1 = 0;
    let p2 = 1;
    let newArr = [];
    while(p1 !== nums.length){
        if(nums[p1] + nums[p2] === target){
            newArr.push(p1);
            newArr.push(p2);
            return newArr;
        }
        else if(p2 === nums.length){
            p1++;
            p2 = p1+1;
        }
        else {
            p2++;
        }
    }
}
console.log(twoSums([2,7,11,15], 22))