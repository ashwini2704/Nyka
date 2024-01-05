import axios from "axios";
import { AUTH_FAILURE,AUTH_REQUEST,LOGIN_SUCCESS } from "./actionTypes";
export const login = (user) => (dispatch) => {
  // Complete login logic here
  dispatch({ type : AUTH_REQUEST });
  axios
  .post("https://kind-lime-lobster-hem.cyclic.app/api/login",user)
  .then((res) => {
    console.log(res.data);
    dispatch({ type : LOGIN_SUCCESS, payload : res.data.token })
  })
  .catch((err) => {
    console.log(err);
    dispatch({ type : AUTH_FAILURE })
  })
};


