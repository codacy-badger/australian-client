import React from "react";
import PropTypes from "prop-types";
import { translate, Trans } from "react-i18next";

const HomePage = ({ t }) => {
  return (
    <div>
      <div className="App-header">
        <h1>{t("title.app")}</h1>
      </div>
      <div className="App-intro">
        <Trans i18nKey="description.part1">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Trans>
      </div>
      <div>{t("description.part2")}</div>
    </div>
  );
};

// The propTypes.
HomePage.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(HomePage);
