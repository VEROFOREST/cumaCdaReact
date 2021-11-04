const INITIAL_STATE = {

    username : "",
    password : "",
    isAuthenticated: false,
    
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
            case 'ISAUTHENTICATED':
                return {
                    ...state,
                    isAuthenticated: action.isAuthenticated
                } 
            case 'LOGIN':
                return {
                    ...state,
                    payload:action.payload
                }   
                // case 'LOGOUT':
        // return {
        //         ...state,
        //         payload:action.payload
        //     }   
                
        default:
            return state
        }
              
}
export default loginReducer;
