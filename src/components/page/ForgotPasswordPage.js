import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";

const ForgotPasswordPage = ({ t }) => {
  return <div>{t("FORGOT PASSWORD TEMP PAGE")}</div>;
};

// The propTypes.
ForgotPasswordPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(ForgotPasswordPage);
