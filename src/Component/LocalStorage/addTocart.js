const addToCart = (productData) => {
productData.quantity = 1;
  let localData = localStorage.getItem("cart1");
  if (localData == null) {
    let tempArray =[];
    tempArray.push(productData);
    console.log("temp array", tempArray);
    localStorage.setItem("cart1", JSON.stringify(tempArray));
  } else {
    
    let tempArray = JSON.parse(localData);
    let tempCheck = tempArray.filter((item)=>item.id == productData.id);
    if(tempCheck.length != 0){
      return;
    }
    tempArray.push(productData);
    localStorage.setItem("cart1", JSON.stringify(tempArray));
  }
};
export default addToCart;
