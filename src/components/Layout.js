import React from "react";
import AllUsers from './AllUsers'
import AgeDemographicOfUsers from "./AgeDemographicOfUsers";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <Container>
      <AllUsers />
      <AgeDemographicOfUsers />
    </Container>
  );
};

export default Layout;
