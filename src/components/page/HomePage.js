import React from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import LastDogCard from "../common/card/LastDogCard";
import Meta from "../common/Meta";
import ProfileCard from "../common/card/ProfileCard";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";

const HomePage = (props) => {
  const { isAuthenticated } = props;
  return (
    <div>
      <Meta code="homepage" />
      <Header />
      <Row className="mx-1 mt-3">
        <Col md={3}>{isAuthenticated && <ProfileCard />}</Col>
        <Col md={6}>Three</Col>
        <Col md={3}>
          <LastDogCard />
        </Col>
      </Row>
    </div>
  );
};

//PropTypes
HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

//Redux
function mapStateToProps(state) {
  return {
    isAuthenticated: state.authReducer.isAuthenticated
  };
}

//Connect
export default connect(mapStateToProps)(HomePage);
