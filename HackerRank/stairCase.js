function staircase1(n){
  let newArr = [];
  for(let i=0; i< n; i++){
      newArr.push(' ');
  }
  for(let i=0; i< n; i++){
      newArr.shift();
      newArr.push('#');
      console.log(newArr.join(''));
  }
}
staircase1(6);