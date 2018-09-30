import React from "react";
import PropTypes from "prop-types";
import HelpBlockErrors from "../common/help/HelpBlockErrors";
import InputGroupIcon from "../common/input/InputGroupIcon";
import { Col, FormGroup, Input, InputGroup, Label } from "reactstrap";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faKey);

//TODO add disabled props
const PasswordFormGroup = (props) => {
  const { children, form, newPassword, oldPassword, onChange, t, value } = props;
  const { getFieldProps, getFieldError } = form;
  const inputName = oldPassword ? "oldPassword" : newPassword ? "newPassword" : "password";
  const label = "form.general.password." + (oldPassword ? "old-" : newPassword ? "new-" : "") +"label";
  const passwordErrors = getFieldError(inputName);
  const placeholder = "form.general.password." + (oldPassword ? "old-" : newPassword ? "new-" : "") + "placeholder";

  return (
    <FormGroup row>
      <Label for={inputName} sm={4}>
        {t(label)}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon="key" />
          <Input
            type="password"
            name={inputName}
            className={passwordErrors ? "is-invalid" : ""}
            {...getFieldProps(inputName, {
              initialValue: value,
              onChange,
              rules: [{ required: true }]
            })}
            placeholder={t(placeholder)}
          />
        </InputGroup>
        <HelpBlockErrors errors={passwordErrors} />
        {children}
      </Col>
    </FormGroup>
  );
};

PasswordFormGroup.defaultProps = {
  newPassword: false,
  oldPassword: false
};

PasswordFormGroup.propTypes = {
  children: PropTypes.element,
  form: formShape,
  newPassword: PropTypes.bool,
  oldPassword: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default translate("translations")(PasswordFormGroup);
