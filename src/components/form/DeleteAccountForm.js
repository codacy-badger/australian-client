import React, { Component } from "react";
import PropTypes from "prop-types";
import ErrorAlert from "../common/alert/ErrorAlert";
import PasswordFormGroup from "../formgroup/PasswordFormGroup";
import Submit from "../common/button/Submit";
import { Button, Form, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { formShape } from "rc-form";
import { translate } from "react-i18next";

library.add(faTrashAlt);

class DeleteAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.open = this.open.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.toggle();
    this.props.onSubmit(e);
  }

  open(e) {
    e.preventDefault();
    this.props.form.validateFields((error) => {
      if (!error) {
        this.toggle();
      }
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { children, error, form, isError, isPending, onChange, password, t } = this.props;
    const { modal } = this.state;

    return (
      <Form onSubmit={this.open} className="text-danger">
        <h2>{t("title.account")}</h2>
        <p>{t("form.account.description")}</p>
        {isError && <ErrorAlert>{t(error.message)}</ErrorAlert>}
        {children}
        <PasswordFormGroup onChange={onChange} form={form} value={password} disabled={isPending}/>
        <div className="text-right">
          <Submit className="btn-danger" name="account" icon="trash-alt" onClick={this.open} isPending={isPending} />
          <Modal isOpen={modal} toggle={this.toggle}>
            <ModalHeader>{t("help.are-you-sure.delete-account.title")}</ModalHeader>
            <ModalBody>{t("help.are-you-sure.delete-account.message")}</ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.onSubmit}>
                <FontAwesomeIcon icon="trash-alt" className={"mr-1"} />
                {t("form.account.submit")}
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                <FontAwesomeIcon icon="trash-alt" className={"mr-1"} />
                {t("button.cancel")}
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </Form>
    );
  }
}

DeleteAccountForm.propTypes = {
  children: PropTypes.element,
  error: PropTypes.object.isRequired,
  form: formShape,
  isError: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default translate("translations")(DeleteAccountForm);
