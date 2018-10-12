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
import { bindActionCreators } from "redux";
import { emailUpdate } from "../../actions/emailActions";
import { connect } from "react-redux";
import FormPasswordGroup from "../formgroup/abstract/FormPasswordGroup";

export const validate = (values) => {
  const errors = {};
  const { email, password } = values;

  if (email && !isEmail(email)) {
    errors.email = "email is not a valid email";
  }
  if (!email || isEmpty(email)) {
    errors.email = "email is required";
  }
  if (!password || isEmpty(password)) {
    errors.password = "password is required";
  }

  return errors;
};

const EmailForm = (props) => {
  const { actions, handleSubmit, pristine, reset, submitting } = props;

  return (
    <Form onSubmit={handleSubmit(actions.emailUpdate)}>
      <Field component={FormEmailGroup} disabled={submitting} isLoading={submitting} name="email" required />
      <Field component={FormPasswordGroup} disabled={submitting} isLoading={submitting} name="password" required />

      <div className="text-right">
        <Reset disabled={pristine || submitting} onClick={reset} />
        <Submit
          disabled={pristine || submitting}
          isPending={submitting}
          name="profile-email"
          onClick={handleSubmit(actions.emailUpdate)}
        />
      </div>
    </Form>
  );
};

EmailForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
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
export default connect(
  null,
  mapDispatchToProps
)(
  reduxForm({
    form: "profile-email",
    validate
  })(translate("validators")(EmailForm))
);
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
