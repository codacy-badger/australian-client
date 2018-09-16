import React, {Component} from "react";
import PropTypes from "prop-types";
import PasswordFormGroup from "../../formgroup/PasswordFormGroup";
import {Button} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translate } from "react-i18next";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt);

class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render () {
    const {password} = this.state;
    const {t} = this.props;

    return (
      <div className="text-danger">
        <h2>{t("title.account")}</h2>
        <p>{t("form.account.description")}</p>
        <PasswordFormGroup onChange={this.onChange} value={password}/>
        <div className="text-right">
          <Button color="danger">
            <FontAwesomeIcon icon="trash-alt" className={"mr-1"}/>
            {t("form.account.submit")}
          </Button>
        </div>
      </div>
    );
  }
}

// The propTypes.
AccountContainer.propTypes = {
  t: PropTypes.func.isRequired
};

export default translate("translations")(AccountContainer);
