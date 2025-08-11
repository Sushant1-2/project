import mainEndPoint from "./User/mainEndPoint";

const productDataapi = async (setMainData) => {
  const request = await fetch(mainEndPoint + "/product");
  const response = await request.json();
  console.log("responce of data", response);
  if (request.status == 200) {
    setMainData(response.data);
  } else {
    setMainData([]);
  }
};
export default productDataapi;
