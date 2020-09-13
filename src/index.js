import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Spring Boot + React: JWT Authentication with Spring Security
// https://bezkoder.com/spring-boot-react-jwt-auth/

// – Back-end:
// Spring Boot Token based Authentication with Spring Security & JWT
// https://bezkoder.com/spring-boot-jwt-authentication/

// – Front-end:
// React Redux: Token Authentication example with JWT & Axios
// https://bezkoder.com/react-redux-jwt-auth/

// Provider を利用する
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can chađinge
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();