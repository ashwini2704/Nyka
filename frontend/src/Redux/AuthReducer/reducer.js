import { AUTH_FAILURE, AUTH_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes"

const initalState = {
      isLoading: false,
      isError: false,
      isAuth: false,
      token: "",
  }

export const reducer = (state= initalState, {type,payload}) => {
      switch(type) {
            case AUTH_REQUEST : {
                  return {...state, isLoading : true}
            }
            case LOGIN_SUCCESS : {
                  return {...state, isLoading : false, isAuth : true, token : payload, isError:false}
            }
            case AUTH_FAILURE : {
                  return {...state,
                        isLoading : false, 
                        isAuth : false, 
                        token : "",
                        isError : true
                  }
            }
            case LOGOUT_SUCCESS : {
                  return {...state, 
                        isLoading : false, 
                        isAuth : false, 
                        token : "",
                        isError : false
                  }
            }
            default:{
                  return state;
            }
      }
}