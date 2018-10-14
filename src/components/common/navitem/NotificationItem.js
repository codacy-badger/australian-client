import React, { Component } from "react";
import PropTypes from "prop-types";
import { Badge, NavItem, NavLink as ReactNavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { getNotification } from "../../../actions/notificationActions";

library.add(faBell);

/**
 * Notification item
 *
 * TODO : create notification page.
 */
class NotificationItem extends Component {
  constructor(props) {
    super(props);

    this.reload = this.reload.bind(this);

    this.reload();
    setInterval(this.reload, 120 * 1000);
  }

  reload() {
    const { actions, isLoading } = this.props;

    if (!isLoading) {
      actions.getNotification();
    }
  }

  render() {
    const { isLoaded, unread } = this.props;
    const hasUnread = isLoaded && unread > 0;

    return (
      <NavItem>
        <ReactNavLink tag={NavLink} to="/notification">
          {hasUnread && (
            <span>
              <FontAwesomeIcon icon="bell" className="text-info" />
              <Badge color="info">{unread}</Badge>
            </span>
          )}
          {!hasUnread && <FontAwesomeIcon icon="bell" />}
        </ReactNavLink>
      </NavItem>
    );
  }
}

// The propTypes.
NotificationItem.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  unread: PropTypes.number.isRequired
};

//Redux connect
function mapStateToProps(state) {
  return {
    actions: PropTypes.object.isRequired,
    isLoaded: state.notificationReducer.isNotificationLoaded,
    isLoading: state.notificationReducer.isNotificationLoading,
    //Filter return only notification which are read.
    unread: state.notificationReducer.notifications.filter((notification) => notification.read).length
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getNotification }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationItem);
