import { auth } from "firebase";
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