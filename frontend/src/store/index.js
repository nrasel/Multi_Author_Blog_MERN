import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// redux thunk synchronus and asynchronus system handle
import ThunkMiddleware from "redux-thunk";
import { adminReducer } from "./reducers/adminReducers";
import { dashCategoryReducers } from "./reducers/dashCategoryReducers";
import { tagReducer } from "./reducers/dashTAgReducer";

const rootReducer = combineReducers({
  adminReducer,
  dashCategoryReducers,
  tagReducer,
});

const middleware = [ThunkMiddleware];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
