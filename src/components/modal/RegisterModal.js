import React, { Component } from "react";
import PropTypes from "prop-types";
import TosModal from "./TosModal";
import RegisterForm from "../form/RegisterForm";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { register } from "../../actions/registerActions";
import { change, formValueSelector, submit } from "redux-form";
import { translate } from "react-i18next";

library.add(faSignInAlt);

//TODO Create a register page
class RegisterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalTos: false
    };

    this.accept = this.accept.bind(this);
    this.decline = this.decline.bind(this);
    this.toggleTos = this.toggleTos.bind(this);
  }

  accept() {
    this.props.actions.change("register", "read", true);
    this.toggleTos();
  }
  decline() {
    this.props.actions.change("register", "read", false);
    // this.props.actions.change("register", "email", "email-decline");
    this.toggleTos();
  }

  toggleTos() {
    this.setState({
      modalTos: !this.state.modalTos
    });
  }

  render() {
    const { actions, dispatch, status, isOpen, t, toggle } = this.props;
    const { modalTos } = this.state;
    const { isPending } = status;

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>
            <FontAwesomeIcon fixedWidth icon="sign-in-alt" rotation={270} /> {t("navbar.user-register")}
          </ModalHeader>
          <ModalBody>
            <StatusAlert code="register" status={status} />
            <RegisterForm isPending={isPending} onClickTos={this.toggleTos} onSubmit={actions.register} />
          </ModalBody>
          <ModalFooter>
            <Submit
              icon="sign-in-alt"
              name="register"
              isPending={isPending}
              onClick={() => dispatch(submit("register"))}
              rotation={270}
            />{" "}
            <Button color="secondary" onClick={toggle}>
              {t("button.cancel")}
            </Button>
          </ModalFooter>
        </Modal>
        <TosModal accept={this.accept} decline={this.decline} isOpen={modalTos} toggle={this.toggleTos} />
      </div>
    );
  }
}

RegisterModal.propTypes = {
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isPending: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired,
  t: PropTypes.func.isRequired
};

// Redux connect begin here
const selector = formValueSelector("register"); // Decorate with connect to read form values

function mapStateToProps(state) {
  return {
    read: selector(state, "read"),
    status: {
      error: state.registerReducer.error,
      isPending: state.registerReducer.isRegisterPending,
      isSuccess: state.registerReducer.isRegisterSuccess,
      isError: state.registerReducer.isRegisterError,
      success: state.registerReducer.nextStep
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actions: bindActionCreators({ change, register }, dispatch)
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegisterModal)
);
