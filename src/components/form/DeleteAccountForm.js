import React, { Component } from "react";
import PropTypes from "prop-types";
import FormPasswordGroup from "../formgroup/abstract/FormPasswordGroup";
import Reset from "../common/button/Reset";
import ButtonIcon from "../common/button/Button";
import isEmpty from "validator/lib/isEmpty";
import { Button, Form, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faTrashAlt);

export const validate = (values) => {
  const errors = {};

  if (!values.password || isEmpty(values.password)) {
    errors.password = "password is required";
  }

  return errors;
};

class DeleteAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.open = this.open.bind(this);
    this.submit = this.submit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  open() {
    this.toggle();
  }

  submit() {
    this.toggle();
    this.props.handleSubmit();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, t } = this.props;

    const fieldProps = {
      disabled: submitting,
      isLoading: submitting
    };

    const { modal } = this.state;

    return (
      <Form onSubmit={handleSubmit} className="text-danger">
        <Field component={FormPasswordGroup} {...fieldProps} name="password" required />

        <div className="text-right">
          <Reset disabled={pristine || submitting} onClick={reset} />
          <ButtonIcon
            className="btn-danger"
            name="profile-account"
            icon="trash-alt"
            onClick={this.open}
            isPending={submitting}
            disabled={pristine}
            color="danger"
          />
        </div>

        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader>{t("help.are-you-sure.delete-account.title")}</ModalHeader>
          <ModalBody>{t("help.are-you-sure.delete-account.message")}</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.submit}>
              <FontAwesomeIcon icon="trash-alt" className={"mr-1"} />
              {t("form.profile-account.submit")}
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              {t("button.cancel")}
            </Button>
          </ModalFooter>
        </Modal>
      </Form>
    );
  }
}

DeleteAccountForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

export default reduxForm({
  form: "profile-account",
  validate
})(translate(["translations", "validators"])(DeleteAccountForm));
