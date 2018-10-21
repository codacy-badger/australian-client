import React from "react";
import Header from "../common/Header";
import LastDogCard from "../common/card/LastDogCard";
import Meta from "../common/Meta";
import { Col, Row } from "reactstrap";
import SearchCard from "../common/card/SearchCard";

const HomePage = () => {
  return (
    <div>
      <Meta code="homepage" />
      <Header />
      <Row className="mx-1 mt-3">
        <Col md={3} lg={2}>
          <SearchCard />
        </Col>
        <Col md={6} lg={8}>
          Three
        </Col>
        <Col md={3} lg={2}>
          <LastDogCard />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
