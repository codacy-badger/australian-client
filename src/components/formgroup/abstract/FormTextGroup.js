import React from "react";
import PropTypes from "prop-types";
import HelpBlock from "../../common/help/HelpBlock";
import HelpBlockErrors from "../../common/help/HelpBlockErrors";
import InputGroupIcon from "../../common/input/InputGroupIcon";
import { Col, FormGroup as ReactFormGroup, Input, InputGroup, Label } from "reactstrap";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { formShape } from "rc-form";
import { translate } from "react-i18next";

library.add(faAlignJustify);

const FormTextGroup = (props) => {
  const {
    confirmation,
    disabled,
    form,
    fieldName,
    formName,
    helpBlock,
    icon,
    onChange,
    required,
    t,
    type,
    value
  } = props;
  const { getFieldProps, getFieldError } = form;
  const errors = getFieldError(fieldName);
  const hasError = errors ? errors.length > 0 : false;
  const help = t("form." + formName + "." + fieldName + ".helpBlock");
  const label = t("form." + formName + "." + fieldName + ".label");
  const placeholder = t("form." + formName + "." + fieldName + ".placeholder");
  const inputType = "confirmation" === type ? "password" : type;
  const ruleType = "confirmation" === type ? "enum" : "email" === type ? "email" : "string";

  const rules = {
    required,
    type: ruleType
  };
  if ("confirmation" === type) {
    rules.enum = [confirmation, ""];
    rules.message = "confirmation is different from password";
  }

  return (
    <ReactFormGroup row>
      <Label for={fieldName} sm={4}>
        {label}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon={icon} isLoading={disabled} />
          <Input
            className={errors ? "is-invalid" : ""}
            name={fieldName}
            disabled={disabled}
            placeholder={placeholder}
            {...getFieldProps(fieldName, {
              initialValue: value,
              onChange,
              rules: [rules]
            })}
            type={inputType}
          />
        </InputGroup>
        {hasError && <HelpBlockErrors errors={errors} />}
        {helpBlock && help.length > 0 && (hasError || <HelpBlock>{help}</HelpBlock>)}
      </Col>
    </ReactFormGroup>
  );
};

FormTextGroup.defaultProps = {
  disabled: false,
  formName: "general",
  helpBlock: false,
  icon: "align-justify",
  required: false,
  type: "text"
};

// The propTypes.
FormTextGroup.propTypes = {
  disabled: PropTypes.bool,
  fieldName: PropTypes.string.isRequired,
  form: formShape,
  formName: PropTypes.string,
  helpBlock: PropTypes.bool,
  icon: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  t: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["text", "password", "email", "confirmation"]),
  value: PropTypes.string.isRequired
};

export default translate()(FormTextGroup);
