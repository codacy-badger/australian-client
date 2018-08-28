import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate, Trans } from "react-i18next";
import {
  Alert,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { sendMail } from "../../actions/forgotPasswordActions";
import Submit from "../common/button/Submit";

class ForgotPasswordPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email } = this.state;

    if ("" !== email) {
      this.props.sendMail(email);
    }
    return false;
  }

  render() {
    const { error, isMailPending, isMailSuccess, isMailError, nextStep, t } = this.props;
    const { email } = this.state;

    return (
      <Container className="mt-3 text-justify">
        <Form onSubmit={this.onSubmit}>
          <Card>
            <CardHeader>{t("title.forgot-your-password")}</CardHeader>
            <CardBody>
              {isMailError && (
                <Alert color="danger" className="text-center">
                  <Trans i18nKey={"error.." + error.code}>{error.message}</Trans>
                </Alert>
              )}
              {isMailSuccess && (
                <Alert color="success" className="text-center">
                  {t("message.forgot-your-password-successful")}
                  <br />
                  <Trans i18nKey={"message.forgot-your-password-nextStep." + nextStep.code}>{nextStep.message}</Trans>
                </Alert>
              )}
              {!isMailError &&
                !isMailSuccess && (
                  <Alert color="info" className="text-center">
                    {t("help.forgot-your-password")}
                  </Alert>
                )}
              <FormGroup row>
                <Label for="forgotPasswordEmail" sm={4}>
                  {t("form.forgot-password.email")}
                </Label>
                <Col sm={8}>
                  <Input
                    type="email"
                    name="email"
                    id="forgotPasswordEmail"
                    placeholder={t("form.forgot-password.email-placeholder")}
                    value={email}
                    required
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>
            </CardBody>
            <CardFooter className="text-right">
              <Submit
                isPending={isMailPending}
                isSuccess={isMailSuccess}
                name="forgot-password"
                submitCallback={this.onSubmit}
              />
              <Link to="/" title={t("link.home-page-title")} className="ml-2 btn btn-secondary">
                {t("link.home-page")}
              </Link>
            </CardFooter>
          </Card>
        </Form>
      </Container>
    );
  }
}

// The propTypes.
ForgotPasswordPage.propTypes = {
  error: PropTypes.object.isRequired,
  isMailError: PropTypes.bool.isRequired,
  isMailPending: PropTypes.bool.isRequired,
  isMailSuccess: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

// Redux connect begin here
function mapStateToProps(state) {
  return {
    error: state.forgotPasswordReducer.error,
    isMailError: state.forgotPasswordReducer.isForgotPasswordError,
    isMailPending: state.forgotPasswordReducer.isForgotPasswordPending,
    isMailSuccess: state.forgotPasswordReducer.isForgotPasswordSuccess,
    nextStep: state.forgotPasswordReducer.nextStep
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendMail: (email) => dispatch(sendMail(email))
  };
}

export default translate("translations")(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ForgotPasswordPage)
);
