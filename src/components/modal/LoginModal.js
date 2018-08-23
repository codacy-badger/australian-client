import React, {Component} from "react";
import PropTypes from "prop-types";
import {translate} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faSignInAlt, faSpinner} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {login} from '../../actions/authActions';

library.add(faSignInAlt, faSpinner);


class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const {login} = this.props;
    const {email, password} = this.state;

    login(email, password);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const {email, modal, password} = this.state;
    const {isLoginPending, isLoginSuccess, isLoginError, t} = this.props;

    return (
      <Modal isOpen={modal} toggle={this.toggle}>
        <Form onSubmit={this.onSubmit}>
          <ModalHeader toggle={this.toggleLoginModal}>
            <FontAwesomeIcon fixedWidth icon="sign-in-alt"/>{" "}
            {t("navbar.user-login")}
          </ModalHeader>
          <ModalBody>
            {isLoginError && <span>{isLoginError.message}</span>}
            <FormGroup row>
              <Label for="loginEmail" sm={4}>
                {t("form.login.email")}
              </Label>
              <Col sm={8}>
                <Input
                  type="email"
                  name="email"
                  id="loginEmail"
                  value={email}
                  placeholder="john.doe@example.org"
                  required
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="loginPassword" sm={4}>
                {t("form.login.password")}
              </Label>
              <Col sm={8}>
                <Input
                  type="password"
                  name="password"
                  id="loginPassword"
                  value={password}
                  placeholder={t("form.login.password-placeholder")}
                  required
                  onChange={this.onChange}
                />
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.submit} disabled={isLoginPending}>
              {isLoginPending && <span><FontAwesomeIcon icon="spinner" spin className="mr-1"/>{t('form.login.submitting')}</span>}
              {!isLoginPending && <span>< FontAwesomeIcon icon="sign-in-alt" rotate={270} className="mr-1"/>{t('form.login.submit')}</span>}
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              {t("button.cancel")}
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

LoginModal.propTypes = {
  isLoginPending: PropTypes.bool.isRequired,
  isLoginSuccess: PropTypes.bool.isRequired,
  isLoginError: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  onRef: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    isLoginPending: state.authReducer.isLoginPending,
    isLoginSuccess: state.authReducer.isLoginSuccess,
    isLoginError: state.authReducer.isLoginError,
    error: state.authReducer.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default translate("translations")(connect(mapStateToProps, mapDispatchToProps)(LoginModal));
