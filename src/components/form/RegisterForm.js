import React from "react";
import PropTypes from "prop-types";
import HelpBlock from "../common/help/HelpBlock";
import PasswordFormGroup from "../formgroup/PasswordFormGroup";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { formShape } from "rc-form";
import { translate } from "react-i18next";
import EmailFormGroup from "../formgroup/EmailFormGroup";
import ConfirmationFormGroup from "../formgroup/ConfirmationFormGroup";

const RegisterForm = (props) => {
  const { confirmation, email, form, isPending, onChange, onClickCgu, onSubmit, password, read, t } = props;

  const { getFieldProps, getFieldError, getFieldValue } = form;
  const fieldProps = { disabled: isPending, form, onChange };
  const tosErrors = getFieldError("read");

  //TODO create a tos form group
  return (
    <Form onSubmit={onSubmit}>
      <EmailFormGroup value={email} {...fieldProps} />
      <PasswordFormGroup value={password} {...fieldProps} />
      <ConfirmationFormGroup value={confirmation} password={password} {...fieldProps} />
      <FormGroup check>
        <Col sm={{ size: 8, offset: 4 }}>
          <Label check>
            <Input
              type="checkbox"
              name="read"
              className={tosErrors ? "is-invalid" : ""}
              disabled={isPending}
              {...getFieldProps("read", {
                initialValue: read,
                rules: [
                  {
                    type: "boolean",
                    required: true
                  }
                ],
                onChange,
                valuePropName: "checked"
              })}
            />
            <Button onClick={onClickCgu} color={"link"} className="m-0 p-0" disabled={isPending}>
              {t("form.register.read.label")}
            </Button>
          </Label>
          {getFieldValue("read") || <HelpBlock color={"danger"}>{t("validators:accept cgu")}</HelpBlock>}
        </Col>
      </FormGroup>
    </Form>
  );
};

RegisterForm.defaultProps = {
  isPending: false
};

// The propTypes.
RegisterForm.propTypes = {
  confirmation: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  form: formShape,
  isPending: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onClickCgu: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired
};

export default translate(["translations"])(RegisterForm);
