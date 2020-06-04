// var reverseString = function(s) {
//   for( let i = 0; i < Math.floor(s.length/2); i++){
//     var t = s[i];
//     s[i]=s[s.length-1-i];
//     s[s.length-1-i]=t;
//   }
//   return s;
// };
// console.log(reverseString(["h","e","l","l","o"]));

var reverseString = function(s) {
  var left = 0;
  var right = s.length-1;
  var temp;
  while(left < right){
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
};
console.log(reverseString(["h","e","l","l","o"]));
