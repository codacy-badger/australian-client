import React from "react";
import PropTypes from "prop-types";
import FormEmailGroup from "../formgroup/abstract/FormEmailGroup";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { Field, reduxForm } from "redux-form";
import { Card, CardBody, CardFooter, CardHeader, Form } from "reactstrap";
import { Link } from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {sendMail} from "../../actions/forgotPasswordActions";
import { translate } from "react-i18next";

export const validate = (values) => {
  const errors = {};
  const { email } = values;

  if (!email || isEmpty(email)) {
    errors.email = "email is required";
  }

  if (email && !isEmail(email)) {
    errors.email = "email is not a valid email";
  }

  return errors;
};

const ForgotPasswordForm = (props) => {
  const { actions, handleSubmit, pristine, status, submitting, t } = props;

  return (
    <Form onSubmit={handleSubmit(actions.sendMail)}>
      <Card>
        <CardHeader>{t("title.forgot-your-password")}</CardHeader>
        <CardBody>
          <StatusAlert code="forgot-your-password" status={status} />
          <Field component={FormEmailGroup} disabled={submitting} isLoading={submitting} name="email" required />
        </CardBody>
        <CardFooter className="text-right">
          <Submit disabled={submitting || pristine} isPending={submitting} name="forgot-password" onClick={handleSubmit(actions.sendMail)} />
          <Link to="/" title={t("link.home-page-title")} className="ml-2 btn btn-secondary">
            {t("link.home-page")}
          </Link>
        </CardFooter>
      </Card>
    </Form>
  );
};

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired,
  submitting: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ sendMail }, dispatch)
  };
}

// Redux form begin here
export default connect(null, mapDispatchToProps)(reduxForm({
  form: "forgot-password",
  validate
})(translate(["translations", "validators"])(ForgotPasswordForm)));
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
