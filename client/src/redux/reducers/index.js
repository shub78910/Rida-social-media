import { combineReducers } from "redux";
import authReducer from "./authReducer";
import notifyReducer from "./notifyReducer";

export default combineReducers({
  authReducer,
  notifyReducer,
});
