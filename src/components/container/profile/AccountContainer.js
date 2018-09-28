import React, { Component } from "react";
import PropTypes from "prop-types";
import PasswordFormGroup from "../../formgroup/PasswordFormGroup";
import { Button, Form } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translate } from "react-i18next";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { createForm, formShape } from "rc-form";

library.add(faTrashAlt);

class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.validateFields = this.validateFields.bind(this);
  }

  onChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  validateFields(e) {
    e.preventDefault();

    this.props.form.validateFields((error) => {
      if (!error) {
        this.onSubmit(e);
      }
    });
  }

  submit(e) {
    //FIXME redux calls
    console.log("do the job");
  }

  render() {
    const { password } = this.state;
    const { form, t } = this.props;

    return (
      <Form onSubmit={this.validateFields} className="text-danger">
        <h2>{t("title.account")}</h2>
        <p>{t("form.account.description")}</p>
        <PasswordFormGroup onChange={this.onChange} value={password} form={form} />
        <div className="text-right">
          <Button color="danger" onClick={this.validateFields}>
            <FontAwesomeIcon icon="trash-alt" className={"mr-1"} />
            {t("form.account.submit")}
          </Button>
        </div>
      </Form>
    );
  }
}

// The propTypes.
AccountContainer.propTypes = {
  form: formShape,
  t: PropTypes.func.isRequired
};

export default translate("translations")(createForm()(AccountContainer));
