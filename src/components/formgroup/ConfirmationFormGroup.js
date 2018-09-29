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

const ConfirmationFormGroup = ({ children, form, onChange, t, password, value }) => {
  const { getFieldProps, getFieldError } = form;
  const confirmationErrors = getFieldError("confirmation");

  return (
    <FormGroup row>
      <Label for="confirmation" sm={4}>
        {t("form.general.confirmation.label")}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon="key" />
          <Input
            type="password"
            name="confirmation"
            id="registerPasswordConfirmation"
            placeholder={t("form.register.password-confirmation-placeholder")}
            className={confirmationErrors ? "is-invalid" : ""}
            {...getFieldProps("confirmation", {
              initialValue: value,
              onChange,
              rules: [
                {
                  type: "enum",
                  enum: [password, ""],
                  required: true,
                  message: "confirmation is different from password"
                }
              ]
            })}
          />
        </InputGroup>
        <HelpBlockErrors errors={confirmationErrors} />
        {children}
      </Col>
    </FormGroup>
  );
};

ConfirmationFormGroup.propTypes = {
  children: PropTypes.element,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default translate("translations")(ConfirmationFormGroup);
