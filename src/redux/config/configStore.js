import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({
  todos,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;
