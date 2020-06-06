function repeatedString(s, n) {
  let count = 0;
  let factor = Math.floor(n/s.length);
  let remainder = n-(factor * s.length);
  for (let i of s){
    if( i === "a"){
      count++;
    }
  }
  count *= factor
  for(let i = 0; i< remainder; i++){

    if( s[i] === "a"){
      count++;
    }
  }
  return(count);
}
