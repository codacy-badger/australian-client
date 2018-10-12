import React from "react";
import PropTypes from "prop-types";
import FormTextGroup from "../formgroup/abstract/FormTextGroup";
import StatusAlert from "../common/alert/StatusAlert";
import Submit from "../common/button/Submit";
import isEmpty from "validator/lib/isEmpty";
import { Field, reduxForm } from "redux-form";
import { Card, CardBody, CardFooter, CardHeader, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { emailRestore } from "../../actions/emailRestorationActions";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faAt);

export const validate = (values) => {
  const errors = {};

  if (!values.restoration || isEmpty(values.restoration)) {
    errors.restoration = "email-restoration is required";
  }

  return errors;
};

const EmailRestorationForm = (props) => {
  const { actions, handleSubmit, status, submitting, t } = props;
  console.dir(status);
  return (
    <Form onSubmit={handleSubmit(actions.emailActivate)}>
      <Card>
        <CardHeader>{t("title.email-restoration")}</CardHeader>
        <CardBody>
          <StatusAlert code="email-restoration" status={status} />
          <Field
            type="text"
            component={FormTextGroup}
            disabled={submitting}
            isLoading={submitting}
            name="restoration"
            required
          />
        </CardBody>
        <CardFooter className="text-right">
          <Submit
            icon="at"
            disabled={submitting}
            isPending={submitting}
            name="email-restoration"
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

EmailRestorationForm.propTypes = {
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
      error: state.emailRestorationReducer.error,
      isError: state.emailRestorationReducer.isEmailRestorationError,
      isSuccess: state.emailRestorationReducer.isEmailRestorationSuccess,
      success: state.emailRestorationReducer.success
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ emailActivate: emailRestore }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  // Redux form begin here
  reduxForm({
    form: "email-restoration",
    validate
  })(translate(["translations", "validators"])(EmailRestorationForm))
);
//Be careful, do not remove validators, because if it is not preloaded, form is destroy and rebuild.
