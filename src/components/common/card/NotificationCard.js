import React from "react";
import PropTypes from "prop-types";
import NotificationDefaultCard from "./NotificationDefaultCard";
import NotificationMessageCard from "./NotificationMessageCard";

const NotificationCard = (props) => {
  const { notification } = props;

  switch (notification.kind) {
    case "message":
      return <NotificationMessageCard {...notification} />;
    default:
      return <NotificationDefaultCard {...notification} />;
  }
};

NotificationCard.propTypes = {
  notification: PropTypes.shape({
    kind: PropTypes.string.isRequired
  }).isRequired
};

export default NotificationCard;
