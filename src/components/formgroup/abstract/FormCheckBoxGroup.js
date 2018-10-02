import React from "react";
import PropTypes from "prop-types";
import { Button, Col, FormGroup, Input, Label } from "reactstrap";
import { translate } from "react-i18next";
import HelpBlock from "../../common/help/HelpBlock";
import HelpBlockErrors from "../../common/help/HelpBlockErrors";

const FormCheckBoxGroup = (props) => {
  const getButton = () => {
    const { disabled, onClick } = props;
    return (
      <Button onClick={onClick} color="link" className="m-0 p-0" disabled={disabled}>
        {getLabel()}
      </Button>
    );
  };

  const getLabel = () => {
    const { formName, fieldName, t } = props;
    return t("form." + formName + "." + fieldName + ".label");
  };

  const { disabled, fieldName, formName, onClick, required, t, value, ...otherProps } = props;
  const className = disabled ? "text-muted" : "";
  const label = onClick ? getButton() : getLabel();
  const helpBlock = t("form." + formName + "." + fieldName + ".helpBlock");
  const messages = [t("form." + formName + "." + fieldName + ".unchecked")];

  return (
    <FormGroup check>
      <Col sm={{ size: 8, offset: 4 }}>
        <Label check className={className}>
          <Input
            type="checkbox"
            name={fieldName}
            checked={value}
            disabled={disabled}
            required={required}
            {...otherProps}
          />
          {label}
        </Label>
        {!required && helpBlock && <HelpBlock>{helpBlock}</HelpBlock>}
        {!required || value || <HelpBlockErrors errors={messages} />}
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
  disabled: PropTypes.bool,
  fieldName: PropTypes.string.isRequired,
  formName: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired
};

export default translate()(FormCheckBoxGroup);
