import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "../formgroup/abstract/FormTextGroup";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import isEmpty from "validator/lib/isEmpty";
import { Field, reduxForm } from "redux-form";
import { Card, CardBody, CardFooter, CardHeader, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faCheckDouble);

const validate = (values) => {
  const errors = {};

  if (!values.activation || isEmpty(values.activation)) {
    errors["activation"] = "activation is required";
  }

  return errors;
};

const ActivationForm = (props) => {
  const { handleSubmit, status, submitting, t } = props;
  const { isPending } = status;

  const fieldProps = {
    disabled: isPending || submitting,
    isLoading: isPending || submitting
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>{t("title.activation")}</CardHeader>
        <CardBody>
          <StatusAlert code="activation" status={status} />
          <Field component={FormTextGroup} {...fieldProps} name="activation" required />
        </CardBody>
        <CardFooter className="text-right">
          <Submit icon="check-double" isPending={isPending} name="activation" onClick={handleSubmit} />
          <Link to="/" title={t("link.home-page-title")} className="ml-2 btn btn-secondary">
            {t("link.home-page")}
          </Link>
        </CardFooter>
      </Card>
    </Form>
  );
};

ActivationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  status: PropTypes.shape({
    error: PropTypes.object.isRequired,
    isError: PropTypes.bool.isRequired,
    isPending: PropTypes.bool.isRequired,
    isSuccess: PropTypes.bool.isRequired,
    success: PropTypes.object.isRequired
  }).isRequired,
  submitting: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

// Redux form begin here
export default reduxForm({
  form: "activation",
  validate
})(translate(["translations", "validators"])(ActivationForm));
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
