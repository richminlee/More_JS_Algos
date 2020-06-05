function kangaroo(x1, v1, x2, v2) {
  let kStart1 = x1;
  let kStart2 = x2;

  if(x1 < x2 && v1 < v2 || x1 > x2 && v1 > v2 || v1 === v2 && x1 !== x2){
      return "NO";
  }
  else if(x1 < x2){
      while (kStart1 < kStart2) {
          kStart1 += v1;
          kStart2 += v2;
          console.log(kStart1)
          console.log(kStart2);
          
          if (kStart1 === kStart2) {
              return "YES";
          }
      }
      return "NO";
  }
  else if(x2<x1){
      while (kStart2 < kStart1) {
          kStart1 += v1;
          kStart2 += v2;
          console.log(kStart1)
          console.log(kStart2);
          
          if (kStart1 === kStart2) {
              return "YES";
          }
      }
      return "NO";
  }
}

console.log(kangaroo(43,2,70,2));