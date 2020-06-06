function priceCheck(products, productPrices, productSold, soldPrice) {
  let prodObj = {};
  let soldObj = {};
  let count = 0;
  for(let i in products){
    prodObj[products[i]] =  productPrices[i]
  }
  for(let i in productSold){
    soldObj[productSold[i]] =  soldPrice[i]
  }
  for (let key in prodObj){
    for (let i in productSold){
      if(productSold[i] === key && soldPrice[i] !== prodObj[key]){
        console.log(productSold[i])
        console.log(prodObj[key])
          count ++;
        
      }

    }
  }
return count;
}

console.log(priceCheck(
  ['rice', 'sugar', 'wheat', 'cheese'],
  [16.89, 56.92, 20.89, 345.99],
  ['rice', 'cheese'],
  [18.99, 400.89]));