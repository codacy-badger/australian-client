import React from "react";
import PropTypes from "prop-types";
import HelpBlockErrors from "../common/help/HelpBlockErrors";
import {Col, FormGroup, Input, Label} from "reactstrap";
import {createForm} from "rc-form";
import { translate } from "react-i18next";


const PasswordFormGroup = ({children, form, onChange, t, value}) => {

  const { getFieldProps, getFieldError } = form;
  const passwordErrors = getFieldError("password");

  return (
    <FormGroup row>
      <Label for="password" sm={4}>
        {t("form.general.password")}
      </Label>
      <Col sm={8}>
        <Input
          type="password"
          name="password"
          id="password"
          className={passwordErrors ? "is-invalid" : ""}
          {...getFieldProps("password", {
            initialValue: value,
            onChange,
            rules: [{ required: true }]
          })}
          placeholder={t("form.general.password-placeholder")}
        />
        <HelpBlockErrors errors={passwordErrors} />
        {children}
      </Col>
    </FormGroup>
  );
};

PasswordFormGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default translate("translators")(createForm()(PasswordFormGroup));