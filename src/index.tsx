import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Layout from "./layout/layout";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import routes from "./routes";
import { AuthStoreProvider } from "./auth/auth.context";

ReactDOM.render(
  <React.StrictMode>
    <AuthStoreProvider>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Layout>
        <BrowserRouter>
          <Switch>{routes}</Switch>
        </BrowserRouter>
      </Layout>
    </AuthStoreProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
