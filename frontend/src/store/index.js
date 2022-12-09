import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// redux thunk synchronus and asynchronus system handle
import ThunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({});

const middleware = [ThunkMiddleware];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
