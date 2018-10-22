import React from "react";
import PropTypes from "prop-types";
import { Card, CardText, CardTitle } from "reactstrap";
import { translate } from "react-i18next";

const NotificationDefaultCard = (props) => {
  const {
    level,
    meta: { message, title },
    read,
    t
  } = props;
  const className = read ? "" : "unread";

  return (
    <Card body outline color={level} className={"mb-1 " + className}>
      <CardTitle>{t("notification.title." + title)}</CardTitle>
      <CardText>{t("notification.title." + message)}</CardText>
    </Card>
  );
};

NotificationDefaultCard.defaultProps = {
  level: "secondary"
};

NotificationDefaultCard.propTypes = {
  level: PropTypes.string,
  meta: PropTypes.shape({
    message: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  read: PropTypes.bool.isRequired
};

export default translate()(NotificationDefaultCard);
