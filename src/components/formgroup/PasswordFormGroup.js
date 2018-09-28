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

const PasswordFormGroup = ({ children, form, onChange, t, value }) => {
  const { getFieldProps, getFieldError } = form;
  const passwordErrors = getFieldError("password");

  return (
    <FormGroup row>
      <Label for="password" sm={4}>
        {t("form.general.password.label")}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon="key" />
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
            placeholder={t("form.general.password.placeholder")}
          />
        </InputGroup>
        <HelpBlockErrors errors={passwordErrors} />
        {children}
      </Col>
    </FormGroup>
  );
};

PasswordFormGroup.propTypes = {
  children: PropTypes.element,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default translate("translations")(PasswordFormGroup);
