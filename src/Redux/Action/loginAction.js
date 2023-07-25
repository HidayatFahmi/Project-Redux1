import axios from "axios";
import { types } from "../types";

export const onLogin = (email, password) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  
  if(email !== "eve.holt@reqres.in" && email !== "cityslicka"){
    dispatch({
      type: types.LOGIN_FAILURE,
      payload: "Email/Pasword Salah",
    });
    return;
  }
  
  const loginData = {
    email: email,
    password: password,
  };

  axios
    .post("https://reqres.in/api/login", loginData)
    .then((res) => {
      const token = res.data.token;
      console.log(token);
      dispatch({ 
        type: types.LOGIN_SUCCESS, 
        payload: token,
        success : true,
      });
    })
    .catch((error) => {
      console.error("Gagal login:", error);
      dispatch({ 
        type: types.LOGIN_FAILURE, 
        payload: error.message 
      });
    });
};
