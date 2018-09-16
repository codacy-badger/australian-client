import React from "react";
import Header from "../common/Header";
import Meta from "../common/Meta";
import NotFoundJumbotron from "../common/jumbotron/NotFoundJumbotron";
import { Container } from "reactstrap";

const Error404Page = () => {
  return (
    <div>
      <Meta code="404" />
      <Header />
      <Container className="mt-3">
        <NotFoundJumbotron />
      </Container>
    </div>
  );
};

export default Error404Page;
