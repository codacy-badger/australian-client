import React, { Component } from "react";
import PropTypes from "prop-types";
import ErrorAlert from "../common/alert/ErrorAlert";
import LoadingAlert from "../common/alert/LoadingAlert";
import Header from "../common/Header";
import Meta from "../common/Meta";
import { Alert, Container } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getNotification } from "../../actions/notificationActions";
import { change } from "redux-form";
import { translate } from "react-i18next";
import NotificationCard from "../common/card/NotificationCard";

class NotificationPage extends Component {
  render() {
    const {
      status: { message, isLoaded, isLoading, isUnloadable },
      notifications,
      t
    } = this.props;

    return (
      <div>
        <Meta code="notification" />
        <Header />
        <Container className="mt-3 text-justify">
          {!isLoaded && isUnloadable && <ErrorAlert>{t(message)}</ErrorAlert>}
          {!isLoaded && isLoading && <LoadingAlert />}
          {isLoaded &&
            0 === notifications.length && (
              <Alert color="info" className="text-center">
                {t("message.no-notification")}
              </Alert>
            )}
          {isLoaded &&
            notifications.length > 0 &&
            notifications.map((notification, index) => {
              return <NotificationCard key={index} notification={notification} />;
            })}
        </Container>
      </div>
    );
  }
}

NotificationPage.propTypes = {
  status: PropTypes.shape({
    message: PropTypes.string.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isUnloadable: PropTypes.bool.isRequired
  }).isRequired,
  t: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    status: {
      message: state.notificationReducer.message,
      isLoaded: state.notificationReducer.isNotificationLoaded,
      isLoading: state.notificationReducer.isNotificationLoading,
      isUnloadable: state.notificationReducer.isNotificationUnloadable
    },
    notifications: state.notificationReducer.notifications
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({ change, getNotification }, dispatch)
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NotificationPage)
);
