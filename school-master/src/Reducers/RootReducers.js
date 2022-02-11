import { combineReducers } from "redux";
import  SchoolReducers from "./SchoolReducers";

const rootReducer = combineReducers({
    AllSchools:SchoolReducers,
  });
  
  export default rootReducer;