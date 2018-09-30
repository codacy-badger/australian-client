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

//TODO add disabled props
const EmailFormGroup = ({ children, form, onChange, t, value }) => {
  const { getFieldProps, getFieldError } = form;
  const emailErrors = getFieldError("email");

  return (
    <FormGroup row>
      <Label for="email" sm={4}>
        {t("form.general.email.label")}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon="at" />
          <Input
            type="email"
            name="email"
            id="email"
            className={emailErrors ? "is-invalid" : ""}
            placeholder={t("form.general.email.placeholder")}
            {...getFieldProps("email", {
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

EmailFormGroup.propTypes = {
  form: formShape,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default translate(["translations", "validators"])(EmailFormGroup);
