import React, { Component } from "react";
import PropTypes from "prop-types";
import BreederBadge from "../../badge/BreederBadge";
import OwnerBadge from "../../badge/OwnerBadge";
import { Button, Card, CardBody, CardImg, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { getProfile } from "../../../actions/profileActions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate, Trans } from "react-i18next";

library.add(faUser);

class SearchCard extends Component {
  constructor(props) {
    super(props);

    if (!props.status.isLoaded) {
      props.actions.getProfile();
    }
  }

  refresh() {
    this.props.actions.getProfile();
  }

  renderLoadingMessage() {
    const { t } = this.props;
    return (
      <span className="text-secondary">
        <FontAwesomeIcon icon="spinner" spin className="mr-1" />
        {t("error.loading")}
      </span>
    );
  }

  renderErrorMessage() {
    const {
      status: { code, message },
      t
    } = this.props;
    return (
      <span className="text-danger">
        <FontAwesomeIcon icon="exclamation-triangle" className="mr-1" />
        <Trans i18nKey={code}>{t(message)}</Trans>
        <Button onClick={this.refresh} color="danger" className="mt-2">
          <FontAwesomeIcon icon="sync" className="mr-1" />
          {t("button.retry")}
        </Button>
      </span>
    );
  }

  renderCard() {
    const { isOwner, isBreeder, username } = this.props;

    return (
      <div>
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
      </div>
    );
  }
  render() {
    const { isLoaded, isLoading, isUnloadable } = this.props.status;

    //TODO Load image in CardImage!
    return (
      <Card className="text-left">
        <CardImg top width="100%" src="" alt="Card image cap" />
        <CardBody>
          {!isLoaded && isUnloadable && this.renderErrorMessage()}
          {!isLoaded && isLoading && this.renderLoadingMessage()}
          {isLoaded && this.renderCard()}
        </CardBody>
      </Card>
    );
  }
}

// The propTypes.
SearchCard.propTypes = {
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isUnloadable: PropTypes.bool.isRequired
  }).isRequired,
  isBreeder: PropTypes.bool.isRequired,
  isOwner: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired
};

// Redux begin here
function mapStateToProps(state) {
  return {
    status: {
      error: state.profileReducer.error,
      isLoaded: state.profileReducer.isProfileLoaded,
      isLoading: state.profileReducer.isProfileLoading,
      isUnloadable: state.profileReducer.isProfileUnloadable
    },
    isBreeder: state.profileReducer.user.isBreeder,
    isOwner: state.profileReducer.user.isOwner,
    username: state.profileReducer.user.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getProfile }, dispatch)
  };
}

export default translate()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchCard)
);
