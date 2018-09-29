import React, { Component } from "react";
import PropTypes from "prop-types";
import CguModal from "./CguModal";
import ResultAlert from "../common/alert/ResultAlert";
import RegisterForm from "../form/RegisterForm";
import Submit from "../common/button/Submit";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { createForm, formShape } from "rc-form";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { register } from "../../actions/registerActions";
import { translate } from "react-i18next";

library.add(faSignInAlt);

class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmation: "",
      email: "",
      modalCgu: false,
      password: "",
      read: false
    };

    this.accept = this.accept.bind(this);
    this.decline = this.decline.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleCgu = this.toggleCgu.bind(this);
  }

  accept() {
    this.setState({
      read: true
    });
    this.toggleCgu();
  }

  decline() {
    this.setState({
      read: false
    });
    this.toggleCgu();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: "checkbox" === e.target.type ? e.target.checked : e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((error) => {
      if (!error) {
        const { register } = this.props;
        const { confirmation, email, password, read } = this.state;

        if (confirmation === password && read) {
          register(email, password);
        }
      }
    });
  }

  toggleCgu() {
    this.setState({
      modalCgu: !this.state.modalCgu
    });
  }

  render() {
    const { confirmation, email, modalCgu, read, password } = this.state;
    const { error, form, isOpen, isPending, isSuccess, isError, nextStep, t, toggle } = this.props;

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>
            <FontAwesomeIcon fixedWidth icon="sign-in-alt" rotation={270} /> {t("navbar.user-register")}
          </ModalHeader>
          <ModalBody>
            <ResultAlert code="register" isError={isError} isSuccess={isSuccess} error={error} success={nextStep} />
            <RegisterForm
              confirmation={confirmation}
              email={email}
              form={form}
              onChange={this.onChange}
              onClickCgu={this.toggleCgu}
              onSubmit={this.onSubmit}
              password={password}
              read={read}
            />
          </ModalBody>
          <ModalFooter>
            <Submit icon="sign-in-alt" name="register" isPending={isPending} onClick={this.onSubmit} rotation={270} />{" "}
            <Button color="secondary" onClick={toggle}>
              {t("button.cancel")}
            </Button>
          </ModalFooter>
        </Modal>
        <CguModal accept={this.accept} decline={this.decline} isOpen={modalCgu} toggle={this.toggleCgu} />
      </div>
    );
  }
}

RegisterModal.propTypes = {
  error: PropTypes.object.isRequired,
  form: formShape,
  isPending: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  nextStep: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    error: state.registerReducer.error,
    isPending: state.registerReducer.isRegisterPending,
    isSuccess: state.registerReducer.isRegisterSuccess,
    isError: state.registerReducer.isRegisterError,
    nextStep: state.registerReducer.nextStep
  };
}

function mapDispatchToProps(dispatch) {
  return {
    register: (email, password) => dispatch(register(email, password))
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(createForm()(RegisterModal))
);
