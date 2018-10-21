import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchForm from "../../form/SearchForm";
import { Card, CardBody, CardHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { reduxForm } from "redux-form";
import { translate } from "react-i18next";

library.add(faSearch);

class SearchCard extends Component {
  render() {
    const { t } = this.props;

    return (
      <Card>
        <CardHeader>
          <FontAwesomeIcon icon="search" className="mr-1" />
          {t("title.search")}
        </CardHeader>
        <CardBody>
          <SearchForm />
        </CardBody>
      </Card>
    );
  }
}

// The propTypes.
SearchCard.propTypes = {
  t: PropTypes.func.isRequired
};

// Redux form begin here
export default translate()(reduxForm()(SearchCard));
