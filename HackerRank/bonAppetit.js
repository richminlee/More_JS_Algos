function bonAppetit(bill, k, b) {
  let bActualSplit = 0;
      let finalBill = 0;
      for (let i = 0; i < bill.length; i++) {
          bActualSplit += bill[i];
      }
      bActualSplit = (bActualSplit - bill[k]) / 2;
      finalBill = b - bActualSplit;
      if (finalBill === 0) {
          console.log( "Bon Appetit");
      }else{
          console.log( finalBill);
      }
  
  }