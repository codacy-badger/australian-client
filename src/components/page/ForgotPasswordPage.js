import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../common/Header";
import Meta from "../common/Meta";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import { Card, CardBody, CardFooter, CardHeader, Container, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createForm, formShape } from "rc-form";
import { sendMail } from "../../actions/forgotPasswordActions";
import { translate } from "react-i18next";
import EmailFormGroup from "../formgroup/EmailFormGroup";

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
      email: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((error) => {
      if (!error) {
        const { email } = this.state;

        this.props.sendMail(email);
      }
    });
  }

  render() {
    const { error, form, isMailPending, isMailSuccess, isMailError, nextStep, t } = this.props;
    const { email } = this.state;

    return (
      <div>
        <Meta code="forgotten-password" />
        <Header />
        <Container className="mt-3 text-justify">
          <Form onSubmit={this.onSubmit}>
            <Card>
              <CardHeader>{t("title.forgot-your-password")}</CardHeader>
              <CardBody>
                <StatusAlert
                  code="forgot-your-password"
                  error={error}
                  isError={isMailError}
                  isSuccess={isMailSuccess}
                  success={nextStep}
                />
                <EmailFormGroup form={form} onChange={this.onChange} value={email} />
              </CardBody>
              <CardFooter className="text-right">
                <Submit isPending={isMailPending} name="forgot-password" onClick={this.onSubmit} />
                <Link to="/" title={t("link.home-page-title")} className="ml-2 btn btn-secondary">
                  {t("link.home-page")}
                </Link>
              </CardFooter>
            </Card>
          </Form>
        </Container>
      </div>
    );
  }
}

// The propTypes.
ForgotPasswordPage.propTypes = {
  error: PropTypes.object.isRequired,
  form: formShape,
  isMailError: PropTypes.bool.isRequired,
  isMailPending: PropTypes.bool.isRequired,
  isMailSuccess: PropTypes.bool.isRequired,
  nextStep: PropTypes.object.isRequired,
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
  )(createForm()(ForgotPasswordPage))
);
