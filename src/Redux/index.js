
import { combineReducers } from "redux";
import { loginReducer } from "./Reducers/loginRecucer";
import { userReducer } from "./Reducers/userReducer";

export const reducers = combineReducers({
  login: loginReducer,
  users: userReducer,
});
