import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import helloReducer from "./helloReducer";

const store = createStore(helloReducer, applyMiddleware(thunk));

export default store;
