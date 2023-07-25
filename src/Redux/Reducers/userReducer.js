import { types } from "../types";

const initialState = {
  isLoading: false,
  users: [],
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case types.GET_USERS_SUCCESS:
      return { ...state, isLoading: false, users: action.payload };
    case types.GET_USERS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
