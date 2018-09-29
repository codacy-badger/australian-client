import React, { Component } from "react";
import PropTypes from "prop-types";
import EmailFormGroup from "../formgroup/EmailFormGroup";
import PasswordFormGroup from "../formgroup/PasswordFormGroup";
import Submit from "../common/button/Submit";
import { Col, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { formShape } from "rc-form";
import { translate } from "react-i18next";

//TODO Convert into stateless react component.
class LoginForm extends Component {
  render() {
    const { email, form, isPending, onChange, onSubmit, password, rememberMe, submitRender, t } = this.props;

    return (
      <Form onSubmit={onSubmit}>
        <EmailFormGroup form={form} onChange={onChange} value={email} />
        <PasswordFormGroup form={form} onChange={onChange} value={password}>
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
        {submitRender && <Submit icon="sign-in-alt" name="login" isPending={isPending} onClick={onSubmit} />}
      </Form>
    );
  }
}

LoginForm.defaultProps = {
  submitRender: false
};

// The propTypes.
LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  form: formShape,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  rememberMe: PropTypes.bool.isRequired,
  submitRender: PropTypes.bool,
  t: PropTypes.func.isRequired
};

export default translate(["translations"])(LoginForm);
