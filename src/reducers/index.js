import searchReducer from "./searchReducer";
import movieReducer from "./movieReducer";
import movieDetailReducer from "./movieDetailReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  searchReducer: searchReducer,
  movieReducer: movieReducer,
  movieDetailReducer: movieDetailReducer,
});

export default allReducers;
