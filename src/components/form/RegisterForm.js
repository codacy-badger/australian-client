import React from "react";
import PropTypes from "prop-types";
import HelpBlock from "../common/help/HelpBlock";
import PasswordFormGroup from "../formgroup/PasswordFormGroup";
import Submit from "../common/button/Submit";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { formShape } from "rc-form";
import { translate } from "react-i18next";
import EmailFormGroup from "../formgroup/EmailFormGroup";
import ConfirmationFormGroup from "../formgroup/ConfirmationFormGroup";

const RegisterForm = (props) => {
  const {
    confirmation,
    email,
    form,
    isPending,
    onChange,
    onClickCgu,
    onSubmit,
    password,
    read,
    submitRender,
    t
  } = props;

  const { getFieldProps, getFieldError, getFieldValue } = form;
  const tosErrors = getFieldError("read");

  return (
    <Form onSubmit={onSubmit}>
      <EmailFormGroup form={form} onChange={onChange} value={email} />
      <PasswordFormGroup form={form} onChange={onChange} value={password} />
      <ConfirmationFormGroup form={form} onChange={onChange} value={confirmation} password={password} />
      <FormGroup check>
        <Col sm={{ size: 8, offset: 4 }}>
          <Label check>
            <Input
              type="checkbox"
              name="read"
              id="read"
              className={tosErrors ? "is-invalid" : ""}
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
            <Button onClick={onClickCgu} color={"link"} className="m-0 p-0 ">
              {t("form.register.read.label")}
            </Button>
          </Label>
          {getFieldValue("read") || <HelpBlock color={"danger"}>{t("validators:accept cgu")}</HelpBlock>}
        </Col>
      </FormGroup>
      {submitRender && (
        <Submit icon="sign-in-alt" rotate={270} name="register" isPending={isPending} onClick={onSubmit} />
      )}
    </Form>
  );
};

RegisterForm.defaultProps = {
  submitRender: false
};

// The propTypes.
RegisterForm.propTypes = {
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

export default translate(["translations"])(RegisterForm);
