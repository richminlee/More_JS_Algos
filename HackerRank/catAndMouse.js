function catAndMouse(x, y, z) {
  if(Math.abs(y-z)> Math.abs(x-z)){
    return "Cat A"
  }else if(Math.abs(y-z)< Math.abs(x-z)){
    return "Cat B"
  }else{
    return "Mouse C"
  }

}
console.log(catAndMouse(1, 3, 2));
/*
cat x
cat y

mouse z




if (cat x is closer than cat y to mous
console cat x
else if cat y is closer than cat x to mous
console.log(cat y )
else if( math.abs(cat y-mousx) === math.abs(cat x - mouse)){
  mous gets away
}






*/