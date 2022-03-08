import searchReducer from "./searchReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  searchReducer: searchReducer,
});

export default allReducers;
