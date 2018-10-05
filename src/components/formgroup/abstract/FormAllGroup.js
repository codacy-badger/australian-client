import React from "react";
import PropTypes from "prop-types";
import HelpBlock from "../../common/help/HelpBlock";
import HelpBlockErrors from "../../common/help/HelpBlockErrors";
import InputGroupIcon from "../../common/input/InputGroupIcon";
import { Col, FormGroup, Input, InputGroup, Label } from "reactstrap";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faAlignJustify);

const FormAllGroup = (props) => {
  //TODO purge other.
  const {
    children,
    disabled,
    input,
    icon,
    meta: { asyncValidating, error, form, submitting, touched },
    type,
    t,
    ...other
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
          <InputGroupIcon icon={icon} isLoading={other.isLoading || submitting || asyncValidating} />
          <Input {...input} placeholder={placeholder} type={type} className={className} disabled={disabled} />
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
  type: "text"
};

// The propTypes.
FormAllGroup.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  input: PropTypes.object.isRequired, //redux-form
  icon: PropTypes.string, //The XXXFormGroup
  helpBlock: PropTypes.bool,
  meta: PropTypes.object.isRequired, //redux-form
  //TODO create rules to launch individual field validations
  //rules: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired, //translate
  type: PropTypes.oneOf(["text", "password", "email", "confirmation"]) //The XXXFormGroup
};

export default translate(["translations", "validators"])(FormAllGroup);
