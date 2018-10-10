import React from "react";
import PropTypes from "prop-types";
import FormPasswordGroup from "../formgroup/abstract/FormPasswordGroup";
import Reset from "../common/button/Reset";
import Submit from "../common/button/Submit";
import isEmpty from "validator/lib/isEmpty";
import { Field, reduxForm } from "redux-form";
import { Form } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { passwordUpdate } from "../../actions/passwordActions";
import { translate } from "react-i18next";

export const validate = (values) => {
  const errors = {};

  if (!values["new-password"] || isEmpty(values["new-password"])) {
    errors["new-password"] = "new-password is required";
  }
  if (!values["old-password"] || isEmpty(values["old-password"])) {
    errors["old-password"] = "old-password is required";
  }
  if (!values.confirmation || isEmpty(values.confirmation)) {
    errors.confirmation = "confirmation is required";
  }
  if (!!values.confirmation && !!values["new-password"] && values["new-password"] !== values.confirmation) {
    errors.confirmation = "confirmation is different from password";
  }

  return errors;
};

const PasswordForm = (props) => {
  const { actions, handleSubmit, pristine, reset, submitting } = props;

  return (
    <Form onSubmit={handleSubmit(actions.passwordUpdate)}>
      <Field component={FormPasswordGroup} disabled={submitting} isLoading={submitting} name="old-password" required />
      <Field component={FormPasswordGroup} disabled={submitting} isLoading={submitting} name="new-password" required />
      <Field component={FormPasswordGroup} disabled={submitting} isLoading={submitting} name="confirmation" required />

      <div className="text-right">
        <Reset disabled={pristine || submitting} onClick={reset} />
        <Submit
          disabled={pristine || submitting}
          isPending={submitting}
          name="password"
          onClick={handleSubmit(actions.passwordUpdate)}
        />
      </div>
    </Form>
  );
};

//PropTypes
PasswordForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ passwordUpdate }, dispatch)
  };
}

// Redux form begin here
export default connect(
  null,
  mapDispatchToProps
)(
  reduxForm({
    form: "profile-password",
    validate
  })(translate("validators")(PasswordForm))
);
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
