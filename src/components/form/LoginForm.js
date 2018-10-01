import React from "react";
import PropTypes from "prop-types";
import EmailFormGroup from "../formgroup/EmailFormGroup";
import PasswordFormGroup from "../formgroup/PasswordFormGroup";
import { Col, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { formShape } from "rc-form";
import { translate } from "react-i18next";

const LoginForm = (props) => {
  const { email, isPending, form, onChange, onSubmit, password, rememberMe, t } = props;

  //TODO Create a formgroup for remember me.
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
      <FormGroup check>
        <Col sm={{ size: 8, offset: 4 }}>
          <Label check>
            <Input type="checkbox" name="rememberMe" id="rememberMe" checked={rememberMe} onChange={onChange} />
            {t("form.login.rememberMe")}
          </Label>
        </Col>
      </FormGroup>
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
