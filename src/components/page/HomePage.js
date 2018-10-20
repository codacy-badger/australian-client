import React from "react";
import Header from "../common/Header";
import LastDogCard from "../common/card/LastDogCard";
import Meta from "../common/Meta";
import { Col, Row } from "reactstrap";

const HomePage = () => {
  return (
    <div>
      <Meta code="homepage" />
      <Header />
      <Row className="mx-1 mt-3">
        <Col sm={2}>Two</Col>
        <Col sm={8}>Three</Col>
        <Col sm={2}>
          <LastDogCard />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
