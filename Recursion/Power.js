function power(base, expo){
    if(expo === 0) return 1;
    if(expo === 1) return base;
    return base * power(base, expo-1);
}
console.log(power(2,2));
console.log(power(2,0));
console.log(power(2,4));