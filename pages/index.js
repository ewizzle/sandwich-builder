import React, { Component } from "react";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "../src/App";
import sandwichBuilderReducer from "../src/store/reducers/sandwichBuilderReducer";
import orderReducer from "../src/store/reducers/order";
import authReducer from "../src/store/reducers/auth";

// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

const rootReducer = combineReducers({
  sandwichBuilder: sandwichBuilderReducer,
  order: orderReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}