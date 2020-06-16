function designerPdfViewer(h, word) { 
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let newArray = []
  let number = 0;
  for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
          if (word[i] === alphabet[j]) {
              newArray.push(j)
          }
      }
  }
  for (let i = 0; i < newArray.length; i++) {
      if (h[newArray[i]] > number) {
          number = h[newArray[i]]
      }
  }
  number *= word.length;
  return number
}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba"))