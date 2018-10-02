import React from "react";
import PropTypes from "prop-types";
import EmailFormGroup from "../formgroup/EmailFormGroup";
import PasswordFormGroup from "../formgroup/PasswordFormGroup";
import { Form, FormText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { formShape } from "rc-form";
import { translate } from "react-i18next";
import RememberMeFormGroup from "../formgroup/RememberMeFormGroup";

const LoginForm = (props) => {
  const { email, isPending, form, onChange, onSubmit, password, rememberMe, t } = props;

  return (
    <Form onSubmit={onSubmit}>
      <EmailFormGroup form={form} onChange={onChange} value={email} disabled={isPending}/>
      <PasswordFormGroup form={form} onChange={onChange} value={password} disabled={isPending}>
        <FormText color="muted">
          <FontAwesomeIcon fixedWidth icon="info-circle" className="mr-1 text-info" />
          <Link to="/forgot-your-password" title={t("link.forgot-your-password-title")}>
            {t("link.forgot-your-password")}
          </Link>
        </FormText>
      </PasswordFormGroup>
      <RememberMeFormGroup disabled={isPending} onChange={onChange} value={rememberMe} />
    </Form>
  );
};

// The propTypes.
LoginForm.defaultProps = {
  isPending: false
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  isPending: PropTypes.bool,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  submitRender: PropTypes.bool,
  t: PropTypes.func.isRequired
};

export default translate(["translations"])(LoginForm);
