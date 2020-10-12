import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from './App';
import EditForm from './components/EditForm';import { auth } from "firebase";
import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, auth, ...others }) {
  if (!auth.isLoaded) return null;
  if (auth.uid) { 
    return (
      <Route
        {...others}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    );
  }

  return (
    <Route
        {...others}
        render={(props) => {
        return <Redirect to={{ pathname: "/login" }} />;
      }}
    />
  );
}

const mSTP = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mSTP)(ProtectedRoute);



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
