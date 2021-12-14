
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

export const updateFirstName = (value)=> {
    return {
        type: "FIRSTNAME",
        firstName: value
    }

}
export const updateLastName = (value)=> {
    return {
        type: "LASTNAME",
        lastName: value
    }

}

export const isAuthenticated = (status) =>{
    
    return {
        type: 'ISAUTHENTICATED',
        isAuthenticated: status
    }    
}
export const login = (email,password) =>{
    // console.log(email,password);  
    return async (dispatch)=>
    {
        try{
            const token = await axios
            .post("http://api.cda2-devops-veronique.simplon-roanne.com/api/login_check",{email:email,password:password})
            .then(response=>response.data.token)
            // stockage du token dans le storage du pc
            window.localStorage.setItem("authToken",token);
            axios.defaults.headers["Authorization"] = "Bearer " + token;
             window.location.href = '/DashboardPage'
            dispatch({type: 'LOGIN', payload: token })
        }
        catch (error){
            alert(error);
        }
    }
}

export const logout = () => {
    return ( 
        window.localStorage.removeItem("authToken"),
        delete axios.defaults.headers["Authorization"],
        window.location.href = '/Login'
        );
    }
