import React from "react";
import PropTypes from "prop-types";
import HelpBlock from "../../common/help/HelpBlock";
import HelpBlockErrors from "../../common/help/HelpBlockErrors";
import InputGroupIcon from "../../common/input/InputGroupIcon";
import { Col, FormGroup, Input, InputGroup, Label } from "reactstrap";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { fieldInputPropTypes, fieldMetaPropTypes } from "redux-form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faAlignJustify);

const FormAllGroup = (props) => {
  const {
    children,
    disabled,
    input,
    icon,
    isLoading,
    isUnloadable,
    meta: { asyncValidating, error, form, submitting, touched },
    type,
    t
  } = props;

  const label = t("form." + form + "." + input.name + ".label");
  const help = t("form." + form + "." + input.name + ".helpBlock");
  const placeholder = t("form." + form + "." + input.name + ".placeholder");
  const className = error ? "is-invalid" : "";

  return (
    <FormGroup row>
      <Label for={input.name} sm={4}>
        {label}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon
            icon={icon}
            isLoading={isLoading || submitting || asyncValidating}
            isUnloadable={isUnloadable}
          />
          <Input
            {...input}
            placeholder={placeholder}
            type={type}
            className={className}
            disabled={disabled || isUnloadable}
          />
        </InputGroup>
        {touched && error && <HelpBlockErrors errors={[error]} />}
        {help.length > 0 && ((touched && !!error) || <HelpBlock>{help}</HelpBlock>)}
        {children}
      </Col>
    </FormGroup>
  );
};

FormAllGroup.defaultProps = {
  disabled: false,
  helpBlock: false,
  icon: "align-justify",
  isUnloadable: false,
  type: "text"
};

// The propTypes.
FormAllGroup.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  helpBlock: PropTypes.bool,
  icon: PropTypes.string, //The XXXFormGroup
  input: PropTypes.shape(fieldInputPropTypes).isRequired, //redux-form
  isLoading: PropTypes.bool.isRequired,
  isUnloadable: PropTypes.bool,
  meta: PropTypes.shape(fieldMetaPropTypes).isRequired, //redux-form
  t: PropTypes.func.isRequired, //translate
  type: PropTypes.oneOf(["text", "password", "email", "confirmation"]) //The XXXFormGroup
};

export default translate(["translations", "validators"])(FormAllGroup);
