import { types } from "../types";

const initialState = {
  isLoading: false,
  token: null,
  error: null,
  inSuccess : false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { 
        ...state, 
        isLoading: true, 
        error: null 
    };

    case types.LOGIN_SUCCESS:
      return { ...state, 
        isLoading: false, 
        token: action.payload ,        
        inSuccess:action.success,
    };

    case types.LOGIN_FAILURE:
      return { 
        ...state, 
        isLoading: false, 
        error: action.payload 
    };

    default:
      return state;
  }
};
