import isLogin from '../services/authApi';

const INITIAL_STATE = {

    username : "",
    password : "",
    lastName:"",
    firstName:"",
    isAuthenticated: null,
    
  };

function loginReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'USERNAME':
            return {
                ...state,
                username: action.email,
            }
        case 'PASSWORD':
            return {
                ...state,
                password:action.password,
            }
        case 'FIRSTNAME':
            return {
                ...state,
                firstName:action.firstName,
            }
        case 'LASTNAME':
            return {
                ...state,
                lastName:action.lastName,
            }
            case 'ISAUTHENTICATED':
            return {
                    ...state,
                    isAuthenticated: action.isAuthenticated,
                } 
            case 'LOGIN':
                return {
                    ...state,
                    payload:action.payload
                }   
                case 'LOGOUT':
        return {
                ...state,
            
            }   
                
        default:
            return state
        }
              
}
export default loginReducer;
