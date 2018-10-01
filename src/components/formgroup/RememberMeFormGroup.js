import React from "react";
import PropTypes from "prop-types";
import { Col, FormGroup, Input, Label } from "reactstrap";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faAt);

const RememberMeFormGroup = ({ disabled, onChange, t, value }) => {
  const className = disabled ? "text-muted" : "";

  return (
    <FormGroup check>
      <Col sm={{ size: 8, offset: 4 }}>
        <Label check className={className}>
          <Input type="checkbox" name="rememberMe" checked={value} onChange={onChange} disabled={disabled} />
          {t("form.login.rememberMe")}
        </Label>
      </Col>
    </FormGroup>
  );
};

RememberMeFormGroup.defaultProps = {
  disabled: false
};

RememberMeFormGroup.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default translate(["translations", "validators"])(RememberMeFormGroup);
