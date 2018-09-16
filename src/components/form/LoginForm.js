import React, { Component } from "react";
import PropTypes from "prop-types";
import Submit from "../common/button/Submit";
import { Col, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { createForm, formShape } from "rc-form";
import { translate } from "react-i18next";
import HelpBlockErrors from "../common/help/HelpBlockErrors";
import PasswordFormGroup from "../formgroup/PasswordFormGroup";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.internalSubmit = this.internalSubmit.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef();
  }

  internalSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((error) => {
      if (!error) {
        this.props.onSubmit(e);
      }
    });
  }

  render() {
    const { email, isPending, isSuccess, onChange, password, rememberMe, submitRender, t } = this.props;
    const { getFieldProps, getFieldError } = this.props.form;
    const emailErrors = getFieldError("email");

    return (
      <Form onSubmit={this.internalSubmit}>
        <FormGroup row>
          <Label for="loginEmail" sm={4}>
            {t("form.login.email")}
          </Label>
          <Col sm={8}>
            <Input
              id="loginEmail"
              placeholder="john.doe@example.org"
              className={emailErrors ? "is-invalid" : ""}
              name="email"
              {...getFieldProps("email", {
                initialValue: email,
                onChange,
                rules: [
                  {
                    type: "email",
                    required: true
                  }
                ]
              })}
            />
            <HelpBlockErrors errors={emailErrors} />
          </Col>
        </FormGroup>
        <PasswordFormGroup onChange={onChange} value={password}>
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
        {submitRender && (
          <Submit
            icon="sign-in-alt"
            name="login"
            isPending={isPending}
            isSuccess={isSuccess}
            onClick={this.internalSubmit}
          />
        )}
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

export default translate(["translations"])(createForm()(LoginForm));
