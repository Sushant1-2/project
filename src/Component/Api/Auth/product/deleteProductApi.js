import mainEndPoint from "../../User/mainEndPoint";
import SecureFetch from "../ApiConfiguration";

const deleteProductApi = async (id) => {
      const request = await SecureFetch(
        mainEndPoint+"/product",
        "DELETE",
        {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        id
      );
      if(request.status == 200){
        alert("product delete sucessfully");
        window.location.href = "/"
      }else{
        alert("someting is wrong");
      }
};
export default deleteProductApi;