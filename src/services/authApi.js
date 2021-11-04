import jwtDecode  from "jwt-decode"
import axios from "axios";
function setup(){
 const token = window.localStorage.getItem("authToken");
 if(token){
    const jwtData = jwtDecode(token)
    if (jwtData.exp *1000 > new Date().getTime()){
        axios.defaults.headers["Authorization"] = "Bearer " + token
        }
    }
}
export default{
    setup,
};