import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { userReducer } from "./Public/Redux/Reducers/User";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { watchLoadUserData } from "./Public/saga";

// initializing saga middleware for the store
const sagaMiddleware = createSagaMiddleware();

// creating the store with our reducer
const store = createStore(
  combineReducers({
    user: userReducer
  }),
  applyMiddleware(sagaMiddleware)
);

// triggering watchLoadUserData when there is a LOAD_USER_DATA
sagaMiddleware.run(watchLoadUserData);

// wrapping the App in a Provider to work with React and Redux
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
