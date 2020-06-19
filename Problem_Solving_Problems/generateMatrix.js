var generateMatrix = function(n) {


  const arr = new Array();
  for(let i = 0; i < n; i++){
    arr.push(new Array(n).fill(0))
  }
  
  let direction = "right" // up
  const upToValue = n * n
  let counter = 1 // 12
  let row = 0 // 1
  let col = 0 // 0
  
  while(counter <= upToValue) { // false
    // actual actions
    if(direction == "right") {
      arr[row][col] = counter++
      col++
    }
    
    if(direction == "down") {
      arr[row][col] = counter++
      row++
    }
    
    if(direction == "left") {
      arr[row][col] = counter++
      col--
    }
    
    if(direction == "up") {
      arr[row][col] = counter++
      row--
    }

    // post directional check
    if(direction == "right" && (col === n || arr[row][col] !== 0)) {
      direction = "down"
      col--
      row++
    } else if(direction == "down" && (row === n || arr[row][col] !== 0)) {
      direction = "left"
      col--
      row--
    } else if(direction == "left" && (col === -1 || arr[row][col] !== 0)) {
      direction = "up"
      col++
      row--
    } else if(direction == "up" && (row === -1 || arr[row][col] !== 0)) {
      direction = "right"
      col++
      row++
    }
  }
  
  return arr
};

console.log(generateMatrix(4))

