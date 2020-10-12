import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import EditForm from "./components/EditForm";
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <ProtectedRoute exact path="/" component={App} />
        <Route exact path="/" component={App} />
        <Route path="/edit/:id" component={EditForm} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
};

export default Router;
