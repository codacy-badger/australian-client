import React from "react";
import PropTypes from "prop-types";
import FormEmailGroup from "../formgroup/abstract/FormEmailGroup";
import Reset from "../common/button/Reset";
import Submit from "../common/button/Submit";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { Field, reduxForm } from "redux-form";
import { Form } from "reactstrap";
import { translate } from "react-i18next";
import {bindActionCreators} from "redux";
import {emailUpdate} from "../../actions/emailActions";
import {connect} from "react-redux";

export const validate = (values) => {
  const errors = {};

  if (values["old-email"] && !isEmail(values["old-email"])) {
    errors["old-email"] = "old-email is not a valid email";
  }
  if (values["new-email"] && !isEmail(values["new-email"])) {
    errors["new-email"] = "new-email is not a valid email";
  }
  if (!values["new-email"] || isEmpty(values["new-email"])) {
    errors["new-email"] = "new-email is required";
  }
  if (!values["old-email"] || isEmpty(values["old-email"])) {
    errors["old-email"] = "old-email is required";
  }

  return errors;
};

//FIXME update form with only two field : email and confirmation.
const EmailForm = (props) => {
  const { actions, handleSubmit, pristine, reset, submitting } = props;

  return (
    <Form onSubmit={handleSubmit(actions.emailUpdate)}>
      <Field component={FormEmailGroup} disabled={submitting} isLoading={submitting} name="old-email" required />
      <Field component={FormEmailGroup} disabled={submitting} isLoading={submitting} name="new-email" required />

      <div className="text-right">
        <Reset disabled={pristine || submitting} onClick={reset} />
        <Submit disabled={pristine || submitting} isPending={submitting} name="profile-email" onClick={handleSubmit(actions.emailUpdate)} />
      </div>
    </Form>
  );
};

EmailForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  isPending: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

//Redux connect
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ emailUpdate }, dispatch)
  };
}

// Redux form begin here
export default connect(null, mapDispatchToProps)(reduxForm({
  form: "profile-email",
  validate
})(translate("validators")(EmailForm)));
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
