import React from "react";
import PropTypes from "prop-types";
import HelpBlock from "../common/help/HelpBlock";
import HelpBlockErrors from "../common/help/HelpBlockErrors";
import InputGroupIcon from "../common/input/InputGroupIcon";
import { Col, FormGroup, Input, InputGroup, Label } from "reactstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { formShape } from "rc-form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { translate } from "react-i18next";

library.add(faUser);

const FamilyNameFormGroup = ({ disabled, form, onChange, t, value }) => {
  const { getFieldProps, getFieldError } = form;
  const familyNameErrors = getFieldError("familyName");
  const hasError = familyNameErrors ? familyNameErrors.length > 0 : false;

  return (
    <FormGroup row>
      <Label for="familyName" sm={4}>
        {t("form.profile.familyName.label")}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon="user" isLoading={disabled} />
          <Input
            type="text"
            name="familyName"
            id="FamilyName"
            className={familyNameErrors ? "is-invalid" : ""}
            {...getFieldProps("familyName", {
              initialValue: value,
              onChange
            })}
            disabled={disabled}
            placeholder={t("form.profile.familyName.placeholder")}
          />
        </InputGroup>
        {hasError && <HelpBlockErrors errors={familyNameErrors} />}
        {hasError || <HelpBlock>{t("form.profile.familyName.helpBlock")}</HelpBlock>}
      </Col>
    </FormGroup>
  );
};
FamilyNameFormGroup.defaultProps = {
  disabled: false
};

FamilyNameFormGroup.propTypes = {
  disabled: PropTypes.bool,
  form: formShape,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default translate("translations", "validators")(FamilyNameFormGroup);
