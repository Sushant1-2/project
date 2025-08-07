import mainEndPoint from "../../User/mainEndPoint";
import SecureFetch from "../ApiConfiguration";

const updateProductApi = async(productDetail)=>{
  const request = await SecureFetch(
    mainEndPoint+"/product",
    "PATCH",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    productDetail
  );
  if(request.status == 200){
    alert("product update sucessfully");
  }else{
    alert("something went wrong");
  }
}
export default updateProductApi;