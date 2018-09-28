import React, { Component } from "react";
import PropTypes from "prop-types";
import DeleteAccountForm from "../../form/DeleteAccountForm";
import { createForm, formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { translate } from "react-i18next";

library.add(faTrashAlt);

class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((error) => {
      if (!error) {
        //FIXME redux calls
        console.log("do the job");
      }
    });
  }

  render() {
    const { password } = this.state;
    const { form } = this.props;

    return <DeleteAccountForm form={form} password={password} onSubmit={this.onSubmit} />;
  }
}

// The propTypes.
AccountContainer.propTypes = {
  form: formShape,
  t: PropTypes.func.isRequired
};

export default translate("translations")(createForm()(AccountContainer));
