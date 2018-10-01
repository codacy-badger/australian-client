import React from "react";
import PropTypes from "prop-types";
import HelpBlockErrors from "../common/help/HelpBlockErrors";
import InputGroupIcon from "../common/input/InputGroupIcon";
import { Col, FormGroup, Input, InputGroup, Label } from "reactstrap";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faAt);

const EmailFormGroup = (props) => {
  const { disabled, form, newEmail, oldEmail, onChange, t, value } = props;
  const { getFieldProps, getFieldError } = form;
  const inputName = newEmail ? "newEmail" : oldEmail ? "oldEmail" : "email";
  const label = "form.general.email." + (newEmail ? "new-" : oldEmail ? "old-" : "") + "label";
  const placeholder = "form.general.email." + (newEmail ? "new-" : oldEmail ? "old-" : "") + "placeholder";
  const emailErrors = getFieldError(inputName);

  return (
    <FormGroup row>
      <Label for={inputName} sm={4}>
        {t(label)}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon="at" isLoading={disabled} />
          <Input
            type="email"
            name={inputName}
            className={emailErrors ? "is-invalid" : ""}
            disabled={disabled}
            placeholder={t(placeholder)}
            {...getFieldProps(inputName, {
              initialValue: value,
              onChange,
              rules: [
                {
                  type: "email",
                  required: true
                }
              ]
            })}
          />
        </InputGroup>
        <HelpBlockErrors errors={emailErrors} />
      </Col>
    </FormGroup>
  );
};

EmailFormGroup.defaultProps = {
  disabled: false,
  newEmail: false,
  oldEmail: false
};

EmailFormGroup.propTypes = {
  disabled: PropTypes.bool,
  form: formShape,
  newEmail: PropTypes.bool,
  oldEmail: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default translate(["translations", "validators"])(EmailFormGroup);
