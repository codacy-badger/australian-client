import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";
import { Helmet } from "react-helmet";

const Meta = ({ code, description, keywords, t, title }) => {
  return (
    <Helmet>
      {title && <title>{t("meta.title." + code)}</title>}
      {description && <meta name="description" content={t("meta.description." + code)} />}
      {keywords && <meta name="keywords" content={t("meta.keywords." + code)} />}
    </Helmet>
  );
};

Meta.defaultProps = {
  description: true,
  keywords: true,
  title: true
};

Meta.propTypes = {
  code: PropTypes.string.isRequired,
  description: PropTypes.bool,
  keywords: PropTypes.bool,
  title: PropTypes.bool,
  t: PropTypes.func.isRequired
};

export default translate("translations")(Meta);
