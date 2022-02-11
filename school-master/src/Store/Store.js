import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/RootReducers";

const middlewares=[thunk];



const Store = () => {
  return createStore(rootReducer, applyMiddleware(...middlewares));
};

export default Store;