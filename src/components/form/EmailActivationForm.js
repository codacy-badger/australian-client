import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "../formgroup/abstract/FormTextGroup";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import isEmpty from "validator/lib/isEmpty";
import { Field, reduxForm } from "redux-form";
import { Card, CardBody, CardFooter, CardHeader, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { emailActivate } from "../../actions/activationActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faAt);

export const validate = (values) => {
  const errors = {};

  if (!values.activation || isEmpty(values.activation)) {
    errors.activation = "email-activation is required";
  }

  return errors;
};

const EmailActivationForm = (props) => {
  const { actions, handleSubmit, status, submitting, t } = props;

  return (
    <Form onSubmit={handleSubmit(actions.emailActivate)}>
      <Card>
        <CardHeader>{t("title.email-activation")}</CardHeader>
        <CardBody>
          <StatusAlert code="email-activation" status={status} />
          <Field
            type="text"
            component={FormTextGroup}
            disabled={submitting}
            isLoading={submitting}
            name="activation"
            required
          />
        </CardBody>
        <CardFooter className="text-right">
          <Submit
            icon="at"
            disabled={submitting}
            isPending={submitting}
            name="email-activation"
            onClick={handleSubmit(actions.emailActivate)}
          />
          <Link to="/" title={t("link.home-page-title")} className="ml-2 btn btn-secondary">
            {t("link.home-page")}
          </Link>
        </CardFooter>
      </Card>
    </Form>
  );
};

EmailActivationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired,
  submitting: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

// Redux connect
function mapStateToProps(state) {
  return {
    status: {
      error: state.emailActivationReducer.error,
      isError: state.emailActivationReducer.isActivationError,
      isSuccess: state.emailActivationReducer.isActivationSuccess,
      success: state.emailActivationReducer.nextStep
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ emailActivate: emailActivate }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  // Redux form begin here
  reduxForm({
    form: "email-activation",
    validate
  })(translate(["translations", "validators"])(EmailActivationForm))
);
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
