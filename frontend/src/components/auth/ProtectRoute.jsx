import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectRoute = ({ path, component, exact }) => {
  const { userInfo } = useSelector((state) => state.adminReducer);
  if (!userInfo) {
    return <Redirect to="/admin/login" />;
  } else {
    console.log(userInfo);
    if (userInfo.role === "admin" || userInfo.role === "sub admin") {
      if (userInfo.role === "admin") {
        return <Route path={path} component={component} exact={exact} />;
      } else {
        if (userInfo.accessStatus === "block") {
          return <Redirect to="/user/block" />;
        } else {
          return <Route path={path} component={component} exact={exact} />;
        }
      }
    } else {
      if (userInfo.accessStatus === "block") {
        return <Redirect to="/user/block" />;
      } else {
        return <Redirect to="/" />;
      }
    }
    return <Route path={path} component={component} exact={exact} />;
  }
  return <></>;
};

export default ProtectRoute;
