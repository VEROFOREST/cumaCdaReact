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
export const isLogin = () =>{
    
    const token = window.localStorage.getItem("authToken");
    if(token){
            // console.log('ppl');
            const jwtData = jwtDecode(token)
            
            if (jwtData.exp *1000 > new Date().getTime()){
            axios.defaults.headers["Authorization"] = "Bearer " + token
            return true
            }
            // console.log('ppl');
            
            return false
        }
    return false
    
 }
export const setFirstName = () => {
    const token = window.localStorage.getItem("authToken");
    if(token){
            // console.log('ppl');
            const jwtData = jwtDecode(token);
            // console.log(jwtData.firstName)
            if (jwtData.exp *1000 > new Date().getTime()){
            //     let firstNameToken = jwtData.firstName;
            //    console.log(firstNameToken)
                return jwtData.firstName
            }
        }
}


export const setLastName = () => {
    const token = window.localStorage.getItem("authToken");
    if(token){
            // console.log('ppl');
            const jwtData = jwtDecode(token);
            if (jwtData.exp *1000 > new Date().getTime()){
                // let lastNameToken = jwtData.lastName;
                // console.log(lastNameToken)
                return jwtData.lastName
            }
        }
}


export default{setup, setFirstName, setLastName};