

const productDataapi = async (setProductData) => {
  const request = await fetch("https://dummyjson.com/recipes");
  const response = await request.json();

  if (request.status === 200) {
    setProductData(response.recipes);
  } else {
    console.error("Failed to fetch product data");
  }
};

export default productDataapi;
