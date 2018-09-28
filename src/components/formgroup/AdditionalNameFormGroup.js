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

const AdditionalNameFormGroup = ({ form, onChange, t, value }) => {
  const { getFieldProps, getFieldError } = form;
  const additionalNameErrors = getFieldError("additionalName");
  const hasError = additionalNameErrors ? additionalNameErrors.length > 0 : false;

  return (
    <FormGroup row>
      <Label for="additionalName" sm={4}>
        {t("form.profile.additionalName.label")}
      </Label>
      <Col sm={8}>
        <InputGroup>
          <InputGroupIcon icon="user" />
          <Input
            type="text"
            name="additionalName"
            id="AdditionalName"
            className={additionalNameErrors ? "is-invalid" : ""}
            {...getFieldProps("additionalName", {
              initialValue: value,
              onChange
            })}
            placeholder={t("form.profile.additionalName.placeholder")}
          />
        </InputGroup>
        {hasError && <HelpBlockErrors errors={additionalNameErrors} />}
        {hasError || <HelpBlock>{t("form.profile.additionalName.helpBlock")}</HelpBlock>}
      </Col>
    </FormGroup>
  );
};

AdditionalNameFormGroup.propTypes = {
  form: formShape,
  onChange: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

//TODO verify translate(["translations", "validators"])
export default translate("translations", "validators")(AdditionalNameFormGroup);
