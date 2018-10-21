import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trans, translate } from "react-i18next";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { faDog, faExclamationTriangle, faSpinner, faSync } from "@fortawesome/free-solid-svg-icons";
import { getLastDog } from "../../../actions/lastDogActions";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Button, Card, CardBody, CardHeader } from "reactstrap";

library.add(faDog, faExclamationTriangle, faSpinner, faSync);

class LastDogCard extends Component {
  constructor(props) {
    super(props);
    this.props.actions.getLastDog();

    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.props.actions.getLastDog();
  }

  renderCardHeader() {
    const { t } = this.props;
    return (
      <CardHeader>
        <FontAwesomeIcon icon="dog" className="mr-2" />
        {t("title.last-dogs")}
      </CardHeader>
    );
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

  render() {
    const {
      status: { isLoaded, isLoading, isUnloadable },
      dogs
    } = this.props;

    return (
      <Card>
        {this.renderCardHeader()}
        <CardBody className={!isLoaded && isUnloadable ? "text-danger" : !isLoaded && isLoading ? "" : ""}>
          {!isLoaded && isUnloadable && this.renderErrorMessage()}
          {!isLoaded && isLoading && this.renderLoadingMessage()}
          {isLoaded &&
            dogs.map((dog, index) => {
              return (
                <span key={index}>
                  {dog.name}
                  <hr />
                </span>
              );
            })}
        </CardBody>
      </Card>
    );
  }
}

// The propTypes.
LastDogCard.propTypes = {
  status: PropTypes.shape({
    message: PropTypes.string.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isUnloadable: PropTypes.bool.isRequired
  }).isRequired,
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  ),
  t: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    status: {
      message: state.lastDogReducer.message,
      isLoaded: state.lastDogReducer.isLastDogLoaded,
      isLoading: state.lastDogReducer.isLastDogLoading,
      isUnloadable: state.lastDogReducer.isLastDogUnloadable
    },
    dogs: state.lastDogReducer.dogs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({ getLastDog }, dispatch)
  };
}

export default translate()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LastDogCard)
);
