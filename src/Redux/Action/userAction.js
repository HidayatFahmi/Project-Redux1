import axios from "axios";
import { types } from "../types";

export const getUsers = (token) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_USERS_REQUEST });
    const response = await axios.get("https://reqres.in/api/users?page=1", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const users = response.data.data;
    dispatch({ type: types.GET_USERS_SUCCESS, payload: users });
  } catch (error) {
    dispatch({ type: types.GET_USERS_FAILURE, payload: error.message });
  }
};
