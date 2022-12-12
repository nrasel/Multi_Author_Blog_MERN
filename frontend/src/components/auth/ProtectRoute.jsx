import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectRoute = ({ path, component, exact }) => {
  const { userInfo } = useSelector((state) => state.adminReducer);
  if (!userInfo) {
    return <Redirect to="/admin/login" />;
  } else {
    return <Route path={path} component={component} exact={exact} />;
  }
  return <h1></h1>;
};

export default ProtectRoute;
