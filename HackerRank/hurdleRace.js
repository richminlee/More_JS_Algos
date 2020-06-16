function hurdleRace(k, height) {
  let Potions = 0;//2
  for( let i = 0; i< height.length; i++){
    if(height[i] - k > Potions){
      Potions = height[i] - k;
    }
  }
  return Potions;
}
console.log(hurdleRace(4, [1, 6, 3, 5, 2]));

/*
input natural height k
array of hurdles heights

let NumberofPotions = 0;// 2
forloop height
  if height [i] - k > NumberofPotions
    NumberofPotions = height[i]-k;
return NumberofPotions








*/