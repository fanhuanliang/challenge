import React from "react";
import AllUsers from './AllUsers'
import AgeDemographicOfUsers from "./AgeDemographicOfUsers";

const Layout = () => {
  // console.log('layout')
  return (
    <div>
      <AllUsers />
      <AgeDemographicOfUsers />
    </div>
  );
};

export default Layout;
