function beautifulDays(i, j, k) {
  let count = 0

  for (let h = i; h <= j; h++) {
      let finalNum;
      let parseNum = "";
      let RevNum = h.toString()
      for (let r = RevNum.length - 1; r >= 0; r--) {
          parseNum += RevNum[r];
      }
      parseNum = parseInt(parseNum);
      finalNum = Math.abs(h - parseNum)
      if (finalNum % k === 0) {
          count++
      }
  }
  return count;
}

console.log(beautifulDays(13,45,3))