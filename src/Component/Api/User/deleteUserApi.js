import mainEndPoint from "./mainEndPoint";

const deleteuserApi = async () => {
  const request = await SecureFetch(mainEndPoint+"/user/", "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });
  if (request.status == 200) {
    alert("account delete sucessfully");
    localStorage.removeItem("token");
    localStorage.removeItem("userDetail");
    localStorage.removeItem("cart1");
    window.location.href = "/";
  }
};
export default deleteuserApi;
