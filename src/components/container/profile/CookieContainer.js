import React from "react";
import PropTypes from "prop-types";
import AppStorage from "../../../tools/AppStorage";
import { translate } from "react-i18next";

const CookieContent = ({t}) => {
  return (
    <div>
      <h2>{t("cookie.title")}</h2>
      <p>{t("cookie.paragraph1")}</p>
      <p>{t("cookie.paragraph2")}</p>
      <dl>
        <dt>{t("cookie.information1", {"value": AppStorage.getItem("accessToken")})}</dt>
        <dd>{t("cookie.description1")}</dd>
        <dt>{t("cookie.information2", {"value": AppStorage.getItem("username")})}</dt>
        <dd>{t("cookie.description2")}</dd>
      </dl>
      <p>{t("cookie.paragraph3")}</p>
    </div>
  );
};

// The propTypes.
CookieContent.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("cookie")(CookieContent);
