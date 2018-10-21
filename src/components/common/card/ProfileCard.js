import React, { Component } from "react";
import PropTypes from "prop-types";
import BreederBadge from "../../badge/BreederBadge";
import OwnerBadge from "../../badge/OwnerBadge";
import { Card, CardBody, CardImg, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faUser);

class SearchCard extends Component {
  render() {
    const { isOwner, isBreeder, username } = this.props;

    //TODO Load image in CardImage!
    return (
      <Card className="text-left">
        <CardImg top width="100%" src="" alt="Card image cap" />
        <CardBody>
          <h2>
            <FontAwesomeIcon icon="user" className="mr-1" />
            {username}
          </h2>
          <Row>
            <Col sm={6}>
              <OwnerBadge isOwner={isOwner} />
            </Col>
            <Col sm={6}>
              <BreederBadge isBreeder={isBreeder} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

// The propTypes.
SearchCard.propTypes = {
  isBreeder: PropTypes.bool.isRequired,
  isOwner: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired
};

// Redux begin here
function mapStateToProps(state) {
  return {
    isBreeder: state.authReducer.isBreeder,
    isOwner: state.authReducer.isOwner,
    username: state.authReducer.username
  };
}

export default connect(mapStateToProps)(SearchCard);
