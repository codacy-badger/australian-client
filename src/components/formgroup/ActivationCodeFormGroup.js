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

const ActivationCodeFormGroup = ({ form, onChange, t, value }) => {
  const { getFieldProps, getFieldError } = form;
  const errors = getFieldError("activationCode");

  // TODO Unify translations form.form-name.input-name.label etc.
  return (
    <FormGroup row>
      <Label for="activationCode" sm={4}>
        {t("form.activation.activationCode")}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon="key" />
          <Input
            className={errors ? "is-invalid" : ""}
            name="activationCode"
            id="activationCode"
            placeholder={t("form.activation.activationCode-placeholder")}
            {...getFieldProps("activationCode", {
              initialValue: value,
              onChange,
              rules: [{ required: true }]
            })}
            type="text"
          />
        </InputGroup>
        <HelpBlockErrors errors={errors} />
      </Col>
    </FormGroup>
  );
};

ActivationCodeFormGroup.propTypes = {
  form: formShape,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default translate("translations", "validators")(ActivationCodeFormGroup);
