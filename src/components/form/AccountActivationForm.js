import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "../formgroup/abstract/FormTextGroup";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import isEmpty from "validator/lib/isEmpty";
import { Field, reduxForm } from "redux-form";
import { Card, CardBody, CardFooter, CardHeader, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { accountActivate } from "../../actions/activationActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faCheckDouble);

export const validate = (values) => {
  const errors = {};

  if (!values.activation || isEmpty(values.activation)) {
    errors.activation = "account-activation is required";
  }

  return errors;
};

const AccountActivationForm = (props) => {
  const { actions, handleSubmit, status, submitting, t } = props;

  return (
    <Form onSubmit={handleSubmit(actions.accountActivate)}>
      <Card>
        <CardHeader>{t("title.account-activation")}</CardHeader>
        <CardBody>
          <StatusAlert code="account-activation" status={status} />
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
            icon="check-double"
            disabled={submitting}
            isPending={submitting}
            name="account-activation"
            onClick={handleSubmit(actions.accountActivate)}
          />
          <Link to="/" title={t("link.home-page-title")} className="ml-2 btn btn-secondary">
            {t("link.home-page")}
          </Link>
        </CardFooter>
      </Card>
    </Form>
  );
};

AccountActivationForm.propTypes = {
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
      error: state.activationReducer.error,
      isError: state.activationReducer.isActivationError,
      isSuccess: state.activationReducer.isActivationSuccess,
      success: state.activationReducer.nextStep
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ accountActivate: accountActivate }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  // Redux form begin here
  reduxForm({
    form: "account-activation",
    validate
  })(translate(["translations", "validators"])(AccountActivationForm))
);
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
