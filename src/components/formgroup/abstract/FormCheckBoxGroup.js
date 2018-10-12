import React from "react";
import PropTypes from "prop-types";
import HelpBlock from "../../common/help/HelpBlock";
import HelpBlockErrors from "../../common/help/HelpBlockErrors";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import { fieldInputPropTypes, fieldMetaPropTypes } from "redux-form";
import { translate } from "react-i18next";

const FormCheckBoxGroup = (props) => {
  const getLabel = () => {
    const {
      meta: { form },
      input,
      t
    } = props;

    return t("form." + form + "." + input.name + ".label");
  };

  const getButton = () => {
    const { disabled, onClick } = props;

    return (
      <Button onClick={onClick} color="link" className="m-0 p-0" disabled={disabled}>
        {getLabel()}
      </Button>
    );
  };

  const {
    children,
    disabled,
    input,
    meta: { error, form },
    onClick,
    required,
    t
  } = props;

  const label = onClick ? getButton() : getLabel();
  const className = disabled ? "text-muted" : "";
  const helpBlock = t("form." + form + "." + input.name + ".helpBlock");
  const messages = ["form-" + form + "-" + input.name + "-unchecked"];

  return (
    <FormGroup check className="mb-3">
      <Col sm={{ size: 8, offset: 4 }}>
        <Label check className={className}>
          <Input {...input} type="checkbox" disabled={disabled} required={required} />
          {label}
        </Label>
        {!required && helpBlock && <HelpBlock>{helpBlock}</HelpBlock>}
        {error && <HelpBlockErrors errors={messages} />}
        {children}
      </Col>
    </FormGroup>
  );
};

// The propTypes.
FormCheckBoxGroup.defaultProps = {
  disabled: false,
  formName: "general",
  required: false
};

FormCheckBoxGroup.propTypes = {
  children: PropTypes.any,
  disabled: PropTypes.bool,
  input: PropTypes.shape(fieldInputPropTypes).isRequired, //redux-form
  meta: PropTypes.shape(fieldMetaPropTypes).isRequired, //redux-form
  onClick: PropTypes.func,
  required: PropTypes.bool,
  t: PropTypes.func.isRequired
};

export default translate()(FormCheckBoxGroup);
