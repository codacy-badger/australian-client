import React, { Component } from "react";
import PropTypes from "prop-types";
import HelpBlock from "../common/help/HelpBlock";
import HelpBlockErrors from "../common/help/HelpBlockErrors";
import Submit from "../common/button/Submit";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { createForm, formShape } from "rc-form";
import { translate } from "react-i18next";
import PasswordFormGroup from "../formgroup/PasswordFormGroup";

class registerForm extends Component {
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
    const {
      confirmation,
      email,
      isPending,
      isSuccess,
      onChange,
      onClickCgu,
      password,
      read,
      submitRender,
      t
    } = this.props;
    const { getFieldProps, getFieldError, getFieldValue } = this.props.form;
    const confirmationErrors = getFieldError("confirmation") || [];
    const cguErrors = getFieldError("read");
    const emailErrors = getFieldError("email");

    return (
      <Form onSubmit={this.internalSubmit}>
        <FormGroup row>
          <Label for="registerEmail" sm={4}>
            {t("form.register.email")}
          </Label>
          <Col sm={8}>
            <Input
              type="email"
              name="email"
              id="registerEmail"
              className={emailErrors ? "is-invalid" : ""}
              placeholder={t("form.register.email-placeholder")}
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
        <PasswordFormGroup onChange={onChange} value={password} />
        <FormGroup row>
          <Label for="registerPasswordConfirmation" sm={4}>
            {t("form.register.password-confirmation")}
          </Label>
          <Col sm={8}>
            <Input
              type="password"
              name="confirmation"
              id="registerPasswordConfirmation"
              placeholder={t("form.register.password-confirmation-placeholder")}
              className={confirmationErrors.length ? "is-invalid" : ""}
              {...getFieldProps("confirmation", {
                initialValue: confirmation,
                onChange,
                rules: [
                  {
                    type: "enum",
                    enum: [password],
                    required: true,
                    message: "confirmation is different from password"
                  }
                ]
              })}
            />
            <HelpBlockErrors errors={confirmationErrors} />
          </Col>
        </FormGroup>
        <FormGroup check>
          <Col sm={{ size: 8, offset: 4 }}>
            <Label check>
              <Input
                type="checkbox"
                name="read"
                id="read"
                className={cguErrors ? "is-invalid" : ""}
                {...getFieldProps("read", {
                  initialValue: read,
                  onChange,
                  valuePropName: "checked"
                })}
              />
              <Button onClick={onClickCgu} color={"link"} className="m-0 p-0 ">
                {t("form.register.read.label")}
              </Button>
            </Label>
            {getFieldValue("read") || <HelpBlock color={"danger"}>{t("validators:accept cgu")}</HelpBlock>}
          </Col>
        </FormGroup>
        {submitRender && (
          <Submit
            icon="sign-in-alt"
            rotate={270}
            name="register"
            isPending={isPending}
            isSuccess={isSuccess}
            onClick={this.internalSubmit}
          />
        )}
      </Form>
    );
  }
}

registerForm.defaultProps = {
  submitRender: false
};

// The propTypes.
registerForm.propTypes = {
  confirmation: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  form: formShape,
  isPending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickCgu: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
  submitRender: PropTypes.bool,
  t: PropTypes.func.isRequired
};

export default translate(["translations"])(createForm()(registerForm));
