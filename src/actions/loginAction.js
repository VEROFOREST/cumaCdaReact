
import axios from "axios";


export const updateUsername = (value) => {
    return {
        type: 'USERNAME',
        email: value
    
    }
}
export const updatePassword = (value) => {
    return {
        type: 'PASSWORD',
        password: value
    }
}

export const isAuthenticated = (value) =>{
    
    return {
        type: 'ISAUTHENDICATED',
        isAuthenticated: value
    
    }

}
 
export const login = (event,email,password) =>{
    // console.log(email,password);
    event.preventDefault()
    return async dispatch =>
    {
        try{
             const token = await axios
             .post("http://127.0.0.1:8000/api/login_check",{email:email,password:password})
             .then(response=>response.data.token)

             window.localStorage.setItem("authToken",token);
             axios.defaults.headers["Authorization"] = "Bearer " + token;
             isAuthenticated(true);
        }
        catch (error){
            alert(error);
        }
    }
}

export const logout = () => {
    return ( 
        window.localStorage.removeItem("authToken"),
        isAuthenticated(false),
        delete axios.defaults.headers["Authorization"]   
     );
}

